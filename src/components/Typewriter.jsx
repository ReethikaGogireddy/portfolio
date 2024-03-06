import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Typewriter = () => {
  const [text] = useTypewriter({
    words: ["UI/ UX Designer", "Web Developer"],
    loop: Infinity,
  });

  return (
    <div className="App">
      <span class="text-5xl inline-block font-semibold  bg-gradient-to-r from-[#ff1b6b] to-[#45caff] text-transparent bg-clip-text">
        I'm Reethika <br />
      </span>
      <br />
      <span class="text-4xl  inline-block font-semibold  bg-gradient-to-r from-[#ff1b6b] to-[#45caff] text-transparent bg-clip-text"></span>
      &nbsp;
      <span class="text-3xl  inline-block font-semibold bg-gradient-to-r from-[#ff1b6b] to-[#45caff] text-transparent bg-clip-text">
        {text}
      </span>
      <Cursor cursorColor="white" />
    </div>
  );
};

export default Typewriter;
