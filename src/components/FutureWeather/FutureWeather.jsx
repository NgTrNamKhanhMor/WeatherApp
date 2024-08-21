//React
import { useEffect, useState } from "react";
import { getWeatherNextDays, getWeatherNextHours } from "~apis/weather";
//Libraries
import Row from "react-bootstrap/Row";

//Components
import WeatherItem from "~components/WeatherItem/WeatherItem";

export default function FutureWeather({ isHourly, city }) {
  const [weathers, setWeather] = useState([]);

  useEffect(() => {
    const fetchWeather = async () => {
      const weatherData = isHourly
        ? await getWeatherNextHours(city)
        : await getWeatherNextDays(city);

      setWeather(weatherData);
    };

    fetchWeather();
  }, [city, isHourly]);

  return (
    <Row className="justify-content-center align-content-center text-center h-100">
      {weathers.map((weather, index) => (
        <WeatherItem key={index} weather={weather} isHourly={isHourly} />
      ))}
    </Row>
  );
}
