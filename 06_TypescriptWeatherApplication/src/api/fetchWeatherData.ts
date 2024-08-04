import { WeatherData } from "../models/WeatherData.js";

const API_KEY = '75ceacbf64980f93511c1931bcc4a8be';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export async function fetchWeatherData(city: string): Promise<WeatherData>{
    try {
        const response = await fetch(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`);
        if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data as WeatherData;
    } catch (err) {
        console.error('Error fetching weather data:', err);
        throw err;
    }
}