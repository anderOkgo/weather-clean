import { Injectable } from '@nestjs/common';
import { WeatherRepositoryPort } from '../../domain/ports/weather-repository-port.interface';
import { WeatherApiPort } from '../../domain/ports/weather-api-port.interface';
import { Weather } from '../../domain/entities/weather.entity';
import { WeatherValidator } from '../shared/validators/weather.validator';
import { WeatherConstants } from '../shared/constants/weather.constants';

@Injectable()
export class FetchAndStoreWeatherUseCase {
  constructor(
    private weatherApiPort: WeatherApiPort,
    private weatherRepositoryPort: WeatherRepositoryPort,
  ) {}

  async execute(city: string): Promise<Weather> {
    // Validate input
    WeatherValidator.validateCity(city);

    // Check if we have recent data in the database
    const existingData = await this.weatherRepositoryPort.getWeatherData(city);
    if (existingData && this.isDataRecent(existingData)) {
      return existingData;
    }

    // Fetch new data from the API
    const weatherData = await this.weatherApiPort.getWeather(city);

    // Validate the data
    WeatherValidator.validateTemperature(weatherData.temperature);
    WeatherValidator.validateHumidity(weatherData.humidity);

    // Save the new data
    await this.weatherRepositoryPort.saveWeatherData(weatherData);

    return weatherData;
  }

  private isDataRecent(weather: Weather): boolean {
    const oneHourAgo = new Date(Date.now() - WeatherConstants.CACHE_TTL);
    return weather.timestamp > oneHourAgo;
  }
}
