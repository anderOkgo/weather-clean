import { WeatherData } from '../usecases/fetch-and-store-weather.usecase';

export interface WeatherRepositoryPort {
  saveWeatherData(data: WeatherData): Promise<void>;
  getWeatherData(city: string): Promise<WeatherData | null>;
}
