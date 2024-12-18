import { WeatherData } from './fetch-and-store-weather.usecase';

export interface WeatherRepositoryPort {
  saveWeatherData(data: WeatherData): Promise<void>;
}
