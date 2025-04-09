import { Injectable } from '@nestjs/common';
import { FetchAndStoreWeatherUseCase } from '../usecases/fetch-and-store-weather.usecase';
import { Weather } from '../../domain/entities/weather.entity';

@Injectable()
export class WeatherService {
  constructor(
    private fetchAndStoreWeatherUseCase: FetchAndStoreWeatherUseCase,
  ) {}

  async getWeather(city: string): Promise<Weather> {
    return this.fetchAndStoreWeatherUseCase.execute(city);
  }
}
