import { Controller, Get, Param } from '@nestjs/common';
import { WeatherService } from '../services/weather.service';
import { WeatherResponseDto } from '../dto/weather.response.dto';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get(':city')
  async getWeather(@Param('city') city: string): Promise<WeatherResponseDto> {
    const weather = await this.weatherService.getWeather(city);
    return WeatherResponseDto.fromDomain(weather);
  }
}
