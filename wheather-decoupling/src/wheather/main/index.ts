import { FetchAndStoreWeatherUseCase } from '../application/fetch-and-store-weather.usecase';
import { WeatherApiAdapter } from '../infrastructure/api-adapters/weather-api.adapter';
import { WeatherRepositoryAdapter } from '../infrastructure/database-adapters/weather-repository.adapter';

// Instantiate the adapters
const weatherApiAdapter = new WeatherApiAdapter();
const weatherRepositoryAdapter = new WeatherRepositoryAdapter();

// Instantiate the use case
const fetchAndStoreWeather = new FetchAndStoreWeatherUseCase(
  weatherApiAdapter,
  weatherRepositoryAdapter,
);

// Execute the use case
fetchAndStoreWeather
  .execute('New York')
  .then(() => console.log('Weather data fetched and stored!'))
  .catch((err) => console.error('Error:', err));
