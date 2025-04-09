import { Weather } from '../../../domain/entities/weather.entity';
import { WeatherResponseDto } from '../../dto/weather.response.dto';
import { WeatherApiResponse } from '../../../infrastructure/api/weather-api.adapter';

export class WeatherMapper {
  static toDomain(apiResponse: WeatherApiResponse): Weather {
    return {
      city: apiResponse.name,
      temperature: apiResponse.main.temp,
      humidity: apiResponse.main.humidity,
      description: apiResponse.weather[0].description,
      timestamp: new Date(),
    };
  }

  static toResponseDto(weather: Weather): WeatherResponseDto {
    return WeatherResponseDto.fromDomain(weather);
  }
}
