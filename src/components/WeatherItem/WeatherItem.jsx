//React
import { parseTimeString, temperatureText } from "~ultis/text";
//Libraries
import Col from "react-bootstrap/Col";

function WeatherItem({ weather, isHourly }) {
  return (
    <Col md={2} xs={4} className="mb-3">
      <p className="small">{temperatureText(weather.temp)}</p>
      <img id="" alt="Weather icon" src={weather.iconUrl} />
      {isHourly ? (
        <>
          <p>
            <strong>{parseTimeString(weather.time)[0]}</strong>
          </p>
          <p>
            <strong>{parseTimeString(weather.time)[1]}</strong>
          </p>
        </>
      ) : (
        <p>
          <strong>{weather.day}</strong>
        </p>
      )}
    </Col>
  );
}

export default WeatherItem;
