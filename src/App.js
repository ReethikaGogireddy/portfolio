import React from "react";
import "./components/Home.css";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Progressbar from "./components/Progressbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Progressbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
