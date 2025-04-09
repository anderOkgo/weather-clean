import { Injectable } from '@nestjs/common';
import { WeatherApiPort } from '../../domain/ports/weather-api-port.interface';
import { Weather } from '../../domain/entities/weather.entity';
import axios from 'axios';

export interface WeatherApiResponse {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: Array<{
    description: string;
  }>;
}

@Injectable()
export class WeatherApiAdapter implements WeatherApiPort {
  async getWeather(city: string): Promise<Weather> {
    const response = await axios.get<WeatherApiResponse>(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY`,
    );
    return {
      city: response.data.name,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      timestamp: new Date(),
    };
  }
}
