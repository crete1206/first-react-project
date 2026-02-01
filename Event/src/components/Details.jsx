import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AboutImg from "../assets/image-3.jpg";
import AboutImg2 from "../assets/image-4.jpg";
function Details() {
  return (
    <Container className="py-5 ">
      <Row className="align-items-center">
        <Col>
          <img
            src={AboutImg}
            width="100%"
            height="500px"
            style={{ ObjectFit: "cover" }}
            alt=""
          />
        </Col>
        <Col>
          <h3>ABOUT THE CONFERENCE</h3>
          <h4>About Catalyst X Conference</h4>
          <p>
            Catalyst X Conference is a high-impact annual gathering focused on
            innovation, leadership, technology, and business growth in Africa.
          </p>
          <p>
            Hosted in the heart of Lagos, Nigeria’s commercial and creative
            capital, Catalyst X provides a platform for visionaries,
            professionals, entrepreneurs, and young leaders to exchange ideas,
            gain clarity, and build meaningful connections that drive real-world
            impact
          </p>
          .
          <p>
            This is not just a conference — it is a space for purposeful
            dialogue, strategic thinking, and forward movement.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Details;
