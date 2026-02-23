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
        <a  href="https://drive.google.com/file/d/1Nbiwdf5PQerj-jasEJtvhoT_dJHCy5qQ/view?usp=drive_link"
        rel="noopener noreferrer">Resume</a>

      </div>
      <div className="nav-links">
        <a href="https://www.linkedin.com/in/tanisha-gangadharaiah/">
          <img className="social-icon" src="src/assets/linkedin.png"   />
        </a>
        <a href="mailto:tanishagangadharaiaheu@gmail.com">
          <img className="social-icon" src="src/assets/email.png" />
        </a>
        <a href="https://github.com/Tanisha190">
          <img className="social-icon" src="src/assets/github.png" />
        </a>
   
      </div>
      
    </nav>
  );
};

export default Navbar;