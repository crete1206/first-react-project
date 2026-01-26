import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Cta = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.logwork.com/widget/countdown.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div>
      <Container className="bg-primary">
        <Row>
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
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cta;
