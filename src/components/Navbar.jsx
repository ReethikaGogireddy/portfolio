import React from "react";
import { Link } from "react-scroll";
import "../css/Navbar.css";

function Navbar() {
  return (
    <header>
      <nav>
        <div className="navbar">
          <div className="list">
            <button>
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </button>
          </div>
          <div className="list">
            <button>
              <Link to="about" smooth={true} duration={500}>
                About
              </Link>
            </button>
          </div>
          <div className="list">
            <button>
              <Link to="projects" smooth={true} duration={500}>
                Projects
              </Link>
            </button>
          </div>
          <div className="list">
            <button>
              <Link to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Navbar;
