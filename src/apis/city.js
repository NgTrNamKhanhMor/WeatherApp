import axios from 'axios';

const apiUrl = import.meta.env.VITE_OPENWEATHER_API_URL;
const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

export async function fetchCityCoordinates(city) {
    try {
        const cityUrl = `${apiUrl}/geo/1.0/direct?q=${city}&appid=${apiKey}`;
        const response = await axios.get(cityUrl);
        const data = response.data;

        if (data && data.length > 0) {
            const { lat, lon, country } = data[0];
            return { lat, lon, country };
        } else {
            console.error('City not found');
            return null;
        }
    } catch (error) {
        console.error('Error fetching city coordinates:', error);
        return null;
    }
}
