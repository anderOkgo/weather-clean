import { Injectable } from '@nestjs/common';
import { WeatherRepositoryPort } from '../../domain/ports/weather-repository-port.interface';
import { WeatherApiPort } from '../../domain/ports/weather-api-port.interface';


export interface WeatherData {
  city: string;
  temperature: number;
  description: string;
}

export class FetchAndStoreWeatherUseCase {
  constructor(
    private weatherApiPort: WeatherApiPort,
    private weatherRepositoryPort: WeatherRepositoryPort
  ) {}

  async execute(city: string): Promise<any> {
    const weatherData = await this.weatherApiPort.getWeather(city);
    await this.weatherRepositoryPort.saveWeatherData(weatherData);
    return weatherData;
  }
}
