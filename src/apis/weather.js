import axios from 'axios';
import { fetchCityCoordinates } from './city';
import { formatTimestampToDay, formatTimestampToHour } from '../ultis/text';

const apiUrl = import.meta.env.VITE_OPENWEATHER_API_URL;
const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
const imgURL = import.meta.env.VITE_OPENWEATHER_IMG_API_URL;

export async function getWeatherNow(city) {
    try {
        const { lat, lon, country } = await fetchCityCoordinates(city);

        const weatherApiUrl = `${apiUrl}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
        const response = await axios.get(weatherApiUrl);

        const data = response.data;
        const weatherNow = {
            temp: data.main.temp,
            location: `${city}, ${country}`,
            iconUrl: `${imgURL}/img/wn/${data.weather[0].icon}@2x.png`,
        };

        return weatherNow;
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

export async function getWeatherNext5Hours(city) {
    try{
        const { lat, lon } = await fetchCityCoordinates(city);
        const weatherApiUrl = `${apiUrl}/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
        const response = await axios.get(weatherApiUrl);

        const data = response.data;

        const next5Hours = [];
        for (let i = 0; i < 5; i++) {
            next5Hours.push({
                temp: data.list[i].main.temp,
                iconUrl: `${imgURL}/img/wn/${data.list[i].weather[0].icon}@2x.png`,
                time: formatTimestampToHour(data.list[i].dt)
            });
        } 
        return next5Hours;
    }catch (error){
        console.error("Error fetching weather data:", error);
    }
    
}

export async function getWeatherNext5Days(city) {
    try{
        const { lat, lon } = await fetchCityCoordinates(city);
        const weatherApiUrl = `${apiUrl}/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
        const response = await axios.get(weatherApiUrl);

        const data = response.data;

        const next5Days = [];
        let lastDay = '';
        let dayCount = 0;
        for (let i = 0; i < data.list.length; i++) {
            const day = formatTimestampToDay(data.list[i].dt);
            if (day !== lastDay && dayCount < 5) {
                lastDay = day;
                dayCount++;
                next5Days.push({
                    temp: data.list[i].main.temp,
                    iconUrl: `${imgURL}/img/wn/${data.list[i].weather[0].icon}@2x.png`,
                    day: day,
                });
            }
        } 
        return next5Days;
    }catch (error){
        console.error("Error fetching weather data:", error);
    }
    
}


