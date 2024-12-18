import { Injectable } from '@nestjs/common';
import { WeatherApiPort } from '../../domain/ports/weather-api-port.interface';
import axios from 'axios';

@Injectable()
export class WeatherApiAdapter implements WeatherApiPort {
  async getWeather(city: string): Promise<any> {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY`);
    return {
      city: response.data.name,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
    };
  }
}
