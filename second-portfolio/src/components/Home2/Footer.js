import React from "react";
import { Container, Col } from "react-bootstrap";

function Footer() {
  return (
    <div className="footer">
      <Container fluid>
        <Col md={4}>
          <p className="footer-text">
            <i>Designed and Developed By William Botbyl</i>
          </p>
        </Col>
      </Container>
    </div>
  );
}

export default Footer;
