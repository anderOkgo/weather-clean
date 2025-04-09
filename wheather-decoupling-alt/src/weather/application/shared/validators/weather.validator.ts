import { BadRequestException } from '@nestjs/common';

export class WeatherValidator {
  static validateCity(city: string): void {
    if (!city || city.trim().length === 0) {
      throw new BadRequestException('City name cannot be empty');
    }

    if (!/^[a-zA-Z\s-]+$/.test(city)) {
      throw new BadRequestException(
        'City name can only contain letters, spaces, and hyphens',
      );
    }
  }

  static validateTemperature(temperature: number): void {
    if (temperature < -273.15) {
      throw new BadRequestException(
        'Temperature cannot be below absolute zero',
      );
    }
  }

  static validateHumidity(humidity: number): void {
    if (humidity < 0 || humidity > 100) {
      throw new BadRequestException('Humidity must be between 0 and 100');
    }
  }
}
