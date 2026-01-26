import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Register = () => {
  return (
    <div>
      <Container fluid className="text-center register text-white">
        <Row>
          <Col>
            <h3>Ready to Monetize Your Creativity?</h3>
            <p>
              Join creators from across Africa at the Digital Creator Africa
              Summit 2025. Secure your spot now and be part of the movement
              shaping Africa’s digital future.
            </p>
            <button>Register now</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
