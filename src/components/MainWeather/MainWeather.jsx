//Libraries
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//APIs
import { getWeatherNow } from "~apis/weather";
//Ultis
import { temperatureText } from "~ultis/text";
//Hooks
import { useEffect, useState } from "react";

export default function MainWeather({ city }) {
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      const weatherData = await getWeatherNow(city);
      setWeather(weatherData);
      setLoading(false);
    };

    fetchWeather();
  }, [city]);

  return (
    <>
      {loading ? (
        <Container
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100%" }}
        >
          <p>Loading weather data...</p>
        </Container>
      ) : (
        <Container
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100%" }}
        >
          <Row className="w-100">
            <Col
              lg={3}
              className="d-flex justify-content-center align-self-center align-items-center"
            >
              <Row className="p-0 w-100 text-center justify-content-center align-self-center">
                <Col xs={8} className="text-center ps-3 ps-md-0">
                  <p className="text-dark display-2" id="nowTemp">
                    {temperatureText(weather.temp)}
                  </p>
                </Col>
                <Col xs={8} className="ps-3 ps-md-0">
                  <p id="location">{weather.location}</p>
                </Col>
              </Row>
            </Col>
            <Col
              lg={9}
              className="d-flex justify-content-center justify-content-lg-end align-items-center"
            >
              <img
                id="nowIcon"
                src={weather.iconUrl}
                className="h-100"
                alt="Weather Icon"
              />
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}
