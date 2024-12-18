import { WeatherData } from '../usecases/fetch-and-store-weather.usecase';

export interface WeatherApiPort {
  getWeather(city: string): Promise<WeatherData>;
}


