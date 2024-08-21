//Libraries
import Row from "react-bootstrap/Row";

//Components
import WeatherItem from "/WeatherItem/WeatherItem";

//Hooks
import { useEffect, useState } from "react";
//APIs
import { getWeatherNext5Days, getWeatherNext5Hours } from "~apis/weather";

export default function FutureWeather({ isHourly, city }) {
  const [weathers, setWeather] = useState([]);

  useEffect(() => {
    const fetchWeather = async () => {
      const weatherData = isHourly
        ? await getWeatherNext5Hours(city)
        : await getWeatherNext5Days(city);

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
