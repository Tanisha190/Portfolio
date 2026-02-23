import React from "react";
import "../App.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <a href="#intro">Intro</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;