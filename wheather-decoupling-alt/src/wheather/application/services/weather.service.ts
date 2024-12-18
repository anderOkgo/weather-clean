import { Injectable } from '@nestjs/common';
import { FetchAndStoreWeatherUseCase } from '../../domain/usecases/fetch-and-store-weather.usecase';
import { WeatherRepositoryPort } from '../../domain/ports/weather-repository-port.interface';
import { WeatherApiPort } from '../../domain/ports/weather-api-port.interface';

@Injectable()
export class WeatherService {
  constructor(
    private fetchAndStoreWeatherUseCase: FetchAndStoreWeatherUseCase,
    private weatherApiPort: WeatherApiPort,
    private weatherRepositoryPort: WeatherRepositoryPort
  ) {}

  async getWeather(city: string) {
    const weatherData = await this.fetchAndStoreWeatherUseCase.execute(city);
    return weatherData;
  }
}
