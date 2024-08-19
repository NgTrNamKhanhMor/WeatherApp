import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function MainWeather() {
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
      <Row className="w-100">
        <Col md={2} className="d-flex justify-content-center align-self-center align-items-center">
          <Row className="p-0 w-100 text-center justify-content-center align-self-center">
            <Col xs={8}>
              <p className="text-dark display-2" id="nowTemp">23</p>
            </Col>
            <Col xs={8} className="ps-3 ps-md-0">
              <p id="location">Hanoi</p>
            </Col>
          </Row>
        </Col>
        <Col md={10} className="d-flex justify-content-center justify-content-md-end align-items-center">
          <img id="nowIcon" className="h-100" alt="Weather Icon" />
        </Col>
      </Row>
    </Container>
  );
}
