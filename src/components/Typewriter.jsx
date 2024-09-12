import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "../css/Typewriter.css";

const Typewriter = () => {
  const [text] = useTypewriter({
    words: ["UI/ UX Designer", "Web Developer"],
    loop: Infinity,
  });

  return (
    <div className="App">
      <span className="myname">
        I'm Reethika <br />
      </span>
      <br />
      <span className="text2"></span>
      &nbsp;
      <span className="text2">{text}</span>
      <Cursor cursorColor="white" />
    </div>
  );
};

export default Typewriter;
