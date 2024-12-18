import { Controller, Get, Param } from '@nestjs/common';
import { WeatherService } from '../services/weather.service';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  // GET /weather/:city
  @Get(':city')
  async getWeather(@Param('city') city: string) {
    const weatherData = await this.weatherService.getWeather(city);
    return weatherData;
  }
}
