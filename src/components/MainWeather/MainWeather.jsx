import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { getWeatherNow } from '../../apis/weather';
import { temperatureText } from '../../ultis/text';
import { useEffect, useState } from 'react';

export default function MainWeather() {
  const [weather, setWeather] = useState(null);
  const city = "New York"

  useEffect(() => {
    const fetchWeather = async () => {
      const weatherData = await getWeatherNow(city);
      setWeather(weatherData)
    };

    fetchWeather();
  }, [city]);
  console.log(weather)

  return (
    <>
      {weather? (
        <Container className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
        <Row className="w-100">
          <Col md={2} className="d-flex justify-content-center align-self-center align-items-center">
            <Row className="p-0 w-100 text-center justify-content-center align-self-center">
              <Col xs={8}>
                <p className="text-dark display-2" id="nowTemp">{temperatureText(weather.temp)}</p>
              </Col>
              <Col xs={8} className="ps-3 ps-md-0">
                <p id="location">{weather.location}</p>
              </Col>
            </Row>
          </Col>
          <Col md={10} className="d-flex justify-content-center justify-content-md-end align-items-center">
            <img id="nowIcon" src={weather.iconUrl} className="h-100" alt="Weather Icon" />
          </Col>
        </Row>
        </Container>
      ):(
        <p>Loading weather data...</p>
      )}
    </>
   
  );
}
