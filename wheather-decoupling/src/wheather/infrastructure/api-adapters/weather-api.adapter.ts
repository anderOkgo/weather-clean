import axios from 'axios';
import { WeatherApiPort } from '../../application/weather-api-port.interface';
import { WeatherData } from '../../application/fetch-and-store-weather.usecase';

export class WeatherApiAdapter implements WeatherApiPort {
  async fetchWeather(city: string): Promise<WeatherData> {
    const response = await axios.get(
      `https://api.weather.com/v3/weather/${city}`,
    );
    return {
      city: response.data.city,
      temperature: response.data.temperature,
      description: response.data.description,
    };
  }
}
