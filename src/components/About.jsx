import React from "react";
import programmer from "../assets/programmer1.png";
import "../css/About.css";

function About() {
  return (
    <div className="about">
      <h1>About</h1>
      <div className="aligndiv">
        <div>
          <p>
            I am Reethika , who loves learnings new things. I am currently in my
            last semester of B.tech in Computer Science. I love developing new
            things and designing UI of web through UX.
          </p>
        </div>
        <div className="flex-2">
          <img src={programmer} alt="programmer " />
        </div>
      </div>
    </div>
  );
}
export default About;
