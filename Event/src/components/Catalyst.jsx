import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AboutImg from "../assets/image-3.jpg";
import AboutImg2 from "../assets/image-4.jpg";
function Catalyst() {
  return (
    <Container fluid className="py-5 bg-black text-white">
      <Row className="align-items-center px-5">
        <Col>
          <h3>WHY CATALYST X</h3>
          <h2>Why Attend Catalyst X?</h2>

          <p>
            Catalyst X is designed for people who want more than motivation —
            people who want direction, strategy, and results.
          </p>

          <p>At Catalyst X, you will:</p>

          <ul>
            <li>Gain insights from proven industry leaders</li>

            <li>Understand emerging trends shaping Africa’s future</li>

            <li>Learn practical strategies you can apply immediately</li>

            <li>Build high-value connections across industries</li>

            <li>Position yourself for growth, leadership, and opportunity</li>
          </ul>
        </Col>
        <Col>
          <img
            src={AboutImg2}
            width="100%"
            height="500px"
            style={{ ObjectFit: "cover" }}
            alt=""
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Catalyst;
