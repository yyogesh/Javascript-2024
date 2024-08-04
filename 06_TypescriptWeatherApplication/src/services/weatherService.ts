import { fetchWeatherData } from "../api/fetchWeatherData.js";
import { WeatherData } from "../models/WeatherData.js";

export async function getWeatherForCity(city: string): Promise<WeatherData> {
    // Implement API call to weather API
    // Return weather data for the specified city
    try {
        return await fetchWeatherData(city);
    } catch (error) {
        console.error('Error in weather service:', error);
        throw error;
      }
}