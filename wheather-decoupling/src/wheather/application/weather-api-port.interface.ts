import { WeatherData } from './fetch-and-store-weather.usecase';

export interface WeatherApiPort {
  fetchWeather(city: string): Promise<WeatherData>;
}
