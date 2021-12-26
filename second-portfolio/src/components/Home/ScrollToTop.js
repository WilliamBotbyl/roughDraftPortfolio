import React, { useState, useEffect } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import { Container } from "react-bootstrap";

function ScrollToTop() {
  const [scrollUp, setScrollUp] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 170) {
      setScrollUp(true);
    } else {
      setScrollUp(false);
    }
    console.log("Scroll");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleTop = () => {
    if (scrollUp === true) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Container
        className="container-forScroll"
        style={{ marginRight: "20vw" }}
      >
        <IconContext.Provider value={{ size: "3em", color: "#cd5ff8" }}>
          <BsFillArrowUpCircleFill
            style={{ zIndex: "1" }}
            onClick={handleTop}
            className={scrollUp ? "show-scroll-up" : "hide-scroll"}
          />
        </IconContext.Provider>
      </Container>
    </>
  );
}

export default ScrollToTop;
