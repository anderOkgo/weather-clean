import { WeatherApiPort } from './weather-api-port.interface';
import { WeatherRepositoryPort } from './weather-repository-port.interface';

export interface WeatherData {
  city: string;
  temperature: number;
  description: string;
}

export class FetchAndStoreWeatherUseCase {
  constructor(
    private readonly weatherApi: WeatherApiPort,
    private readonly weatherRepository: WeatherRepositoryPort,
  ) {}

  async execute(city: string): Promise<void> {
    // Fetch data from the API
    const weatherData = await this.weatherApi.fetchWeather(city);

    // Save data to the database
    await this.weatherRepository.saveWeatherData(weatherData);
  }
}
