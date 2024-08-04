import { SearchBar } from "./compoents/SearchBar.js";
import { getWeatherForCity } from "./services/weatherService.js";

class WeatherApp {
    private searchBar: SearchBar;

    constructor() {
        this.searchBar = new SearchBar(this.handleSearch.bind(this));
        const appElement = document.getElementById("app");
        if(appElement) {
            appElement.appendChild(this.searchBar.render());
        } else {
            console.error("App container not found");
        }
    }

    private async handleSearch(city: string) {
        console.log(`Search for weather in ${city}`);
        try {
            const weatherData = await getWeatherForCity(city);
            console.log(weatherData);
        } catch (error) {
            console.error('Error in weather app:', error);
            alert('Failed to fetch weather data. Please try again.');
        }
    }
}

new WeatherApp();