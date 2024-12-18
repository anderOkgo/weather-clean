import { Module } from '@nestjs/common';
import { WeatherController } from './application/controllers/weather.controller';
import { WeatherService } from './application/services/weather.service';
import { FetchAndStoreWeatherUseCase } from './domain/usecases/fetch-and-store-weather.usecase';
import { WeatherApiAdapter } from './infrastructure/api/weather-api.adapter';
import { WeatherRepositoryAdapter } from './infrastructure/database/weather-repository.adapter';

@Module({
  controllers: [WeatherController],
  providers: [
    WeatherService,
    FetchAndStoreWeatherUseCase,
    WeatherApiAdapter,
    WeatherRepositoryAdapter,
  ],
})
export class WeatherModule {}
