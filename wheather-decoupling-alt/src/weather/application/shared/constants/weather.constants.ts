export const WeatherConstants = {
  CACHE_TTL: 60 * 60 * 1000, // 1 hour in milliseconds
  MAX_CITY_LENGTH: 100,
  MIN_TEMPERATURE: -273.15, // Absolute zero
  MAX_TEMPERATURE: 100,
  MIN_HUMIDITY: 0,
  MAX_HUMIDITY: 100,
} as const;
