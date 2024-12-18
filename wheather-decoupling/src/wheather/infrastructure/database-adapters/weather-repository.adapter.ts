import { WeatherRepositoryPort } from '../../application/weather-repository-port.interface';
import { PrismaClient } from '@prisma/client';
import { WeatherData } from '../../application/fetch-and-store-weather.usecase';

export class WeatherRepositoryAdapter implements WeatherRepositoryPort {
  private readonly prisma = new PrismaClient();

  async saveWeatherData(data: WeatherData): Promise<void> {
    await this.prisma.weather.create({
      data: {
        city: data.city,
        temperature: data.temperature,
        description: data.description,
      },
    });
  }
}
