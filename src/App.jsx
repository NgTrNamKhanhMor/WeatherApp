//Libraries
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
//Components
import SlideShow from "~components/SlideShow/SlideShow";
function App() {
  return (
    <Container
      fluid={true}
      className="d-flex justify-content-center align-items-center vh-100"
    >
      <Container className="bg-info-subtle mx-4 mx-lg-5 rounded-4">
        <SlideShow />
      </Container>
    </Container>
  );
}

export default App;
