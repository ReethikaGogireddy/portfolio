import React from "react";
import { Link } from "react-scroll";
function Navbar() {
  return (
    <header>
      <nav
        className="fixed block text-white mt-2 pr-2 w-full h-screen z-40"
        style={{ marginTop: "15px" }}
      >
        <ul className="flex flex-row justify-center align-center ">
          <li className="mr-5">
            <button className="btn-primary  rounded-full bg-[#F64C72]">
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </button>
          </li>
          <li className="mr-5 ">
            <button className="btn-primary  rounded-full bg-[#F64C72]">
              <Link to="about" smooth={true} duration={500}>
                About
              </Link>
            </button>
          </li>
          <li className="mr-5">
            <button className="btn-primary  rounded-full bg-[#F64C72]">
              <Link to="projects" smooth={true} duration={500}>
                Projects
              </Link>
            </button>
          </li>
          <li className="mr-5">
            <button className="btn-primary  rounded-full bg-[#F64C72]">
              <Link to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Navbar;
