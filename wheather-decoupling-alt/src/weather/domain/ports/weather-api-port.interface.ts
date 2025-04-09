import { Weather } from '../entities/weather.entity';

export interface WeatherApiPort {
  /**
   * Fetches weather data from an external API for a specific city
   * @param city The city to get weather data for
   * @returns The weather data
   * @throws WeatherApiError if the API request fails
   */
  getWeather(city: string): Promise<Weather>;
}
