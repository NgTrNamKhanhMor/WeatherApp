import axios from 'axios';
import { fetchCityCoordinates } from './city';

const apiUrl = import.meta.env.VITE_OPENWEATHER_API_URL;
const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

export async function getWeatherNow(city) {
    try {
        const { lat, lon, country } = await fetchCityCoordinates(city);

        const weatherApiUrl = `${apiUrl}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
        const response = await axios.get(weatherApiUrl);

        const data = response.data;
        const weatherNow = {
            temp: data.main.temp,
            location: `${city}, ${country}`,
            iconUrl: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
        };

        return weatherNow;
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}


