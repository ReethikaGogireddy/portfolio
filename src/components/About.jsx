import React from "react";
import programmer from "../assets/programmer1.png";

function About() {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-r from-[#ff1b6b] to-[#45caff] pt-10 text-black "
    >
      <h1
        className="text-4xl font-bold text-white "
        style={{
          marginLeft: "315px",
          marginTop: "25px",
        }}
      >
        About
      </h1>
      <div
        className="flex flex-row justify-around align-middle"
        style={{
          marginTop: "25px",
          marginLeft: "70px",
        }}
      >
        <div>
          <p className="flex-1 bg-white rounded-[12px] text-black w-full h-screen  ml-{50} max-w-[500px] max-h-[450px] p-5 z-10 align-middle justify-center items-center">
            I am Reethika , who loves learnings new things. I am currently in my
            last semester of B.tech in Computer Science. I love developing new
            things and designing UI of web through UX.
          </p>
        </div>
        <div className="flex-2">
          <img
            src={programmer}
            className="object-cover w-full h-full z-10 max-w-[367px] max-h-[367px] "
            style={{ marginRight: "100px" }}
            alt="programmer "
          />
        </div>
      </div>
    </div>
  );
}
export default About;
