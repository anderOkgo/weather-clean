import { Module } from '@nestjs/common';
import { WeatherModule } from './wheather/weather.module';

@Module({
  imports: [WeatherModule],
})
export class AppModule {}
