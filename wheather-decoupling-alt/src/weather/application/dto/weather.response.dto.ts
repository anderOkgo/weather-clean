import { Weather } from '../../domain/entities/weather.entity';

export class WeatherResponseDto {
  city: string;
  temperature: number;
  humidity: number;
  description: string;
  timestamp: Date;

  static fromDomain(weather: Weather): WeatherResponseDto {
    const dto = new WeatherResponseDto();
    dto.city = weather.city;
    dto.temperature = weather.temperature;
    dto.humidity = weather.humidity;
    dto.description = weather.description;
    dto.timestamp = weather.timestamp;
    return dto;
  }
}
