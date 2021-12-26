import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Avatar from "../Images/myavatar.png";
import Footer from "./Footer";

import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { IconContext } from "react-icons";

function Home2() {
  return (
    <IconContext.Provider value={{ size: "2rem" }}>
      <section id="home2">
        <div
          style={{
            backgroundColor: "black",
          }}
          className="outside-wrapper-h2"
        >
          <Container className="home2-container">
            <Row>
              <div className="flexDirection-change">
                <Col md={8}>
                  <h1
                    style={{ fontSize: "2.6em", color: "#ffffff" }}
                    className="home2-header"
                  >
                    Let me <span className="purple">introduce</span> myself!
                  </h1>
                  <br />
                  <div className="flex-introduction-body">
                    <p className="introduction-body">
                      My name is William Botbyl, I am a Software Engineering
                      student at Monmouth University,
                      <br />
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      I am fluent in languages such as &nbsp;
                      <b className="purple">Java, Javascript, Python, C++</b>
                      <br />
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; I am currently studying
                      &nbsp;
                      <span className="purple">Software Engineering</span>&nbsp;
                      and working on side projects.
                      <br />
                      <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; My field of
                      interest is &nbsp;
                      <span className="purple">
                        Machine Learning &nbsp;and&nbsp; Web/Mobile development
                      </span>
                    </p>
                  </div>
                </Col>
                <Col>
                  <img src={Avatar} alt="Avatar" className="avatar" />
                </Col>
              </div>
              <Col style={{ marginTop: "35px" }} className="findMe">
                <h1 style={{ color: "white" }}>
                  <b>FIND ME ON</b>
                </h1>
                <p style={{ color: "white", fontSize: "1rem" }}>
                  <i>
                    Feel free to <span className="purple">connect</span> with me
                  </i>
                </p>
                <ul className="social-links">
                  <li className="social-icon">
                    <a href="/" className="icon-colour home-social-icons">
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="social-icon">
                    <a href="/" className="icon-colour home-social-icons">
                      <AiFillLinkedin />
                    </a>
                  </li>
                  <li className="social-icon">
                    <a href="/" className="icon-colour home-social-icons">
                      <AiFillTwitterCircle />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
          <Footer />
        </div>
      </section>
    </IconContext.Provider>
  );
}

export default Home2;
