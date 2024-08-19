import "bootstrap/dist/css/bootstrap.min.css"
import SlideShow from "./components/SlideShow/SlideShow";
import Container from 'react-bootstrap/Container';
function App() {
  return (
    <Container fluid={true} className="d-flex justify-content-center align-items-center vh-100">
      <Container className="bg-info-subtle mx-4 mx-lg-5 rounded-4">
        <SlideShow/>
      </Container>
    </Container>
  );
}

export default App;
