import { Weather } from '../entities/weather.entity';

export interface WeatherRepositoryPort {
  /**
   * Saves weather data for a specific city
   * @param data The weather data to save
   */
  saveWeatherData(data: Weather): Promise<void>;

  /**
   * Retrieves weather data for a specific city
   * @param city The city to get weather data for
   * @returns The weather data or null if not found
   */
  getWeatherData(city: string): Promise<Weather | null>;

  /**
   * Checks if weather data exists for a specific city
   * @param city The city to check
   * @returns True if data exists, false otherwise
   */
  //exists(city: string): Promise<boolean>;
}
