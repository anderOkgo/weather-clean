import { Injectable } from '@nestjs/common';
import { WeatherRepositoryPort } from '../../domain/ports/weather-repository-port.interface';
import { prisma } from './prisma.client';

@Injectable()
export class WeatherRepositoryAdapter implements WeatherRepositoryPort {
  async saveWeatherData(data: any): Promise<void> {
    await prisma.weather.create({
      data: {
        city: data.city,
        temperature: data.temperature,
        humidity: data.humidity,
        description: data.description,
        timestamp: new Date(),
      },
    });
  }

  async getWeatherData(city: string): Promise<any> {
    return await prisma.weather.findUnique({
      where: { city },
    });
  }
}
