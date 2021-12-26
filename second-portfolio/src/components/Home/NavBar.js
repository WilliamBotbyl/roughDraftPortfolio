import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Initials from "../Images/Wb.png";
import { IconContext } from "react-icons";
import { CgGitFork } from "react-icons/cg";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";

function NavBar() {
  useEffect(() => {
    AOS.init(
      {
        offset: 100,
        duration: 1000,
        easing: "ease",
        // once: true,
      },
      []
    );
  });
  const [navScrolled, setNavScrolled] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavScrolled(true);
    } else {
      setNavScrolled(false);
      // console.log(window.scrollY);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <IconContext.Provider value={{ size: "1.7em", color: "white" }}>
      <Navbar
        expand="md"
        variant="dark"
        data-aos-once="true"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos="fade-down"
        className={navScrolled ? "nav-scrolled" : "nav-not-scrolled sticky-top"}
      >
        <Container>
          <Navbar.Brand className="Navbar-brand">
            <img className="initials" src={Initials} alt="initials" />
          </Navbar.Brand>
          <Nav className="nav-container">
            <Nav.Link className="nav-link" style={{ paddingLeft: "20px" }}>
              <Link
                activeClass="active"
                to="home2"
                style={{ textDecoration: "none", color: "white" }}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px", marginRight: "5px" }}
                />
                Projects
              </Link>
            </Nav.Link>
            <Nav.Link
              className="nav-link"
              style={{ paddingLeft: "20px", textDecoration: "none" }}
            >
              <Link
                to="home2"
                style={{ textDecoration: "none", color: "white" }}
              >
                <BiPhoneCall
                  style={{
                    marginBottom: "2px",
                    marginRight: "5px",
                  }}
                />
                Contact
              </Link>
            </Nav.Link>
            <Nav.Link className="nav-link" style={{ paddingLeft: "20px" }}>
              <Link
                to="home2"
                style={{ textDecoration: "none", color: "white" }}
              >
                <AiOutlineUser
                  style={{ marginBottom: "2px", marginRight: "5px" }}
                />
                About
              </Link>
            </Nav.Link>
            <Nav.Link className="nav-link">
              <CgGitFork style={{ marginLeft: "10px" }} />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </IconContext.Provider>
  );
}

export default NavBar;
