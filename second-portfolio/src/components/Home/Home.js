import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./NavBar";
import Type from "./Type";
import homeLogo from "../Images/home-main.svg";
import Particle from "./Particle";
import Home2 from "../Home2/Home2";
import ScrollToTop from "./ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init(
      {
        offset: 100,
        duration: 1000,
        easing: "ease",
        once: true,
      },
      []
    );
  });

  return (
    <section>
      <div className="home-mainWrapper" style={{ backgroundColor: "black" }}>
        <NavBar />
        <Container fluid>
          <Row>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Col md={7} className="home-header">
                <h1
                  style={{ paddingBottom: 15, color: "white" }}
                  className="heading"
                >
                  Hi There!
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>

                <h1 className="heading-name" style={{ color: "white" }}>
                  I'M
                  <strong className="main-name"> William Botbyl</strong>
                </h1>

                <div style={{ padding: 50, textAlign: "left" }}>
                  <Type />
                </div>
              </Col>
              <Col md={5} style={{ paddingBottom: 20 }}>
                <img src={homeLogo} alt="home pic" className="img-home" />
              </Col>
            </div>
          </Row>
          <ScrollToTop />
        </Container>

        <Particle />
      </div>
      <Home2 />
    </section>
  );
}

export default Home;
