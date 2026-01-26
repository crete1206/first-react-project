import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


 

const Footer = () => {
  return (
    <div>
      <Container fluid className="bg-black text-white text">
        <Row>
          <Col>
            <h3>Digital Creator Africa Summit 2025</h3>
            <p>
              Theme: Monetize Your Creativity Empowering African creators with
              monetization strategies.
            </p>
          </Col>
          <Col>
            <h3>Contacts</h3>
            <p>
              Date: September 18, 2025 Venue: Landmark Event Center, Victoria
              Island, Lagos Email: info@digitalcreatorafrica.com
            </p>
          </Col>
          <Col>
            <a
              href="https://logwork.com/countdown-timer"
              className="countdown-timer"
              data-timezone="Africa/Lagos"
              data-textcolor="#fcfcfc"
              data-date="2026-02-28 09:00"
              data-unitscolor="#fafafa"
            >
              Countdown to D-day
            </a>
          </Col>
        </Row>
      </Container>
      <Container fluid className="text-center bg-black text-white">
        <Row>
          <Col>
          © 2025 Digital Creator Africa. All rights reserved.</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
