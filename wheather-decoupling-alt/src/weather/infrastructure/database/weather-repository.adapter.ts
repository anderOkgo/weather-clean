import { Injectable } from '@nestjs/common';
import { WeatherRepositoryPort } from '../../domain/ports/weather-repository-port.interface';
import { Weather } from '../../domain/entities/weather.entity';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class WeatherRepositoryAdapter implements WeatherRepositoryPort {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async saveWeatherData(data: Weather): Promise<void> {
    await this.prisma.weather.create({
      data: {
        city: data.city,
        temperature: data.temperature,
        humidity: data.humidity,
        description: data.description,
        timestamp: data.timestamp,
      },
    });
  }

  async getWeatherData(city: string): Promise<Weather | null> {
    return this.prisma.weather.findUnique({
      where: { city },
    });
  }
}
