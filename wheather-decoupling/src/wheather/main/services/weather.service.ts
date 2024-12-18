import { Injectable } from '@nestjs/common';
import { FetchAndStoreWeatherUseCase } from '../../application/fetch-and-store-weather.usecase';
import { WeatherApiAdapter } from '../../infrastructure/api-adapters/weather-api.adapter';
import { WeatherRepositoryAdapter } from '../../infrastructure/database-adapters/weather-repository.adapter';
import { WeatherData } from '../../application/fetch-and-store-weather.usecase';

@Injectable()
export class WeatherService {
  private readonly fetchAndStoreWeatherUseCase: FetchAndStoreWeatherUseCase;

  constructor() {
    const weatherApiAdapter = new WeatherApiAdapter();
    const weatherRepositoryAdapter = new WeatherRepositoryAdapter();
    this.fetchAndStoreWeatherUseCase = new FetchAndStoreWeatherUseCase(
      weatherApiAdapter,
      weatherRepositoryAdapter,
    );
  }

  async getWeather(city: string): Promise<WeatherData> {
    // Use the use case to fetch and store weather
    await this.fetchAndStoreWeatherUseCase.execute(city);

    // After storing, return the weather from the repository
    const weatherData =
      await this.fetchAndStoreWeatherUseCase.weatherRepository.getWeatherData(
        city,
      );
    return weatherData;
  }
}
