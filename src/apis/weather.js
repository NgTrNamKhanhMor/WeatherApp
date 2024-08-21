//React
import { fetchCityCoordinates } from '~apis/city';
import { formatTimestampToDay, formatTimestampToHour } from '~ultis/text';
//libraries
import axios from 'axios';

//const
const APIURL = import.meta.env.VITE_OPENWEATHER_API_URL;
const APIKEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const IMGURL = import.meta.env.VITE_OPENWEATHER_IMG_API_URL;
const FUTUREDAYS = 5;
const FUTUREHOURS = 5;

export async function getWeatherNow(city) {
    try {
        const { lat, lon, country } = await fetchCityCoordinates(city);

        const weatherAPIURL = `${APIURL}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric`;
        const response = await axios.get(weatherAPIURL);

        const data = response.data;
        const weatherNow = {
            temp: data.main.temp,
            location: `${city}, ${country}`,
            iconUrl: `${IMGURL}/img/wn/${data.weather[0].icon}@2x.png`,
        };

        return weatherNow;
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

export async function getWeatherNextHours(city) {
    try {
        const { lat, lon } = await fetchCityCoordinates(city);
        const weatherAPIURL = `${APIURL}/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric`;
        const response = await axios.get(weatherAPIURL);

        const data = response.data;

        const nextHours = [];
        for (let i = 0; i < FUTUREHOURS; i++) {
            nextHours.push({
                temp: data.list[i].main.temp,
                iconUrl: `${IMGURL}/img/wn/${data.list[i].weather[0].icon}@2x.png`,
                time: formatTimestampToHour(data.list[i].dt)
            });
        }
        return nextHours;
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }

}

export async function getWeatherNextDays(city) {
    try {
        const { lat, lon } = await fetchCityCoordinates(city);
        const weatherAPIURL = `${APIURL}/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric`;
        const response = await axios.get(weatherAPIURL);

        const data = response.data;

        const nextDays = [];
        let lastDay = '';
        let dayCount = 0;
        for (let i = 0; i < data.list.length; i++) {
            const day = formatTimestampToDay(data.list[i].dt);
            if (day !== lastDay && dayCount < FUTUREDAYS) {
                lastDay = day;
                dayCount++;
                nextDays.push({
                    temp: data.list[i].main.temp,
                    iconUrl: `${IMGURL}/img/wn/${data.list[i].weather[0].icon}@2x.png`,
                    day: day,
                });
            }
        }
        return nextDays;
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }

}


