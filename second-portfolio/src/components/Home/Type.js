import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "<strong><span style='color: #cd5ff8;'>Software Engineering</span></strong> Student",
          "<strong><span style='color: #cd5ff8;'>MERN Stack </span></strong>Developer",
          "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
