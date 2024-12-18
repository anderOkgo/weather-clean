import { Module } from '@nestjs/common';
import { WeatherModule } from './wheather/main/weather.module';

@Module({
  imports: [WeatherModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
