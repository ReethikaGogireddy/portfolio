import React, { useEffect, useState } from "react";
import "../css/Progressbar.css";

const Progressbar = () => {
  const [lineLength, setLineLength] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const totalScroll = documentHeight - windowHeight;
      const scrollPercentage = (scrollPosition / totalScroll) * 100;

      setLineLength(scrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <div className="line" style={{ width: `${lineLength}%` }}></div>;
};

export default Progressbar;
