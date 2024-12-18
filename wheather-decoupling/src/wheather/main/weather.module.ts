import { Module } from '@nestjs/common';
import { WeatherController } from './controllers/weather.controller';
import { WeatherService } from './services/weather.service';
import { FetchAndStoreWeatherUseCase } from '../application/fetch-and-store-weather.usecase';
import { WeatherApiAdapter } from '../infrastructure/api-adapters/weather-api.adapter';
import { WeatherRepositoryAdapter } from '../infrastructure/database-adapters/weather-repository.adapter';

@Module({
  imports: [],
  controllers: [WeatherController],
  providers: [
    WeatherService,
    {
      provide: FetchAndStoreWeatherUseCase,
      useFactory: () => {
        const weatherApiAdapter = new WeatherApiAdapter();
        const weatherRepositoryAdapter = new WeatherRepositoryAdapter();
        return new FetchAndStoreWeatherUseCase(
          weatherApiAdapter,
          weatherRepositoryAdapter,
        );
      },
    },
  ],
})
export class WeatherModule {}
