import React, { useState, useEffect } from "react";

const Hero: React.FC = () => {
  const [displayedName, setDisplayedName] = useState("");

  const name = "Hi, I'm Tanisha Gangadharaiah👋";
  const intro = "Software Developer with 4+ years of experience designing scalable microservices and event-driven systems. Proven expertise in developing high-performance APIs and integrating secure payment solutions using Node.js, MongoDB, and PostgreSQL. Experienced with React.js for end-to-end feature development, enabling seamless full-stack delivery."

  useEffect(() => {
    let nameIndex = 0;
    const nameInterval = setInterval(() => {
      if (nameIndex <= name.length) {
        setDisplayedName(name.slice(0, nameIndex));
        nameIndex++;
      } else {
        clearInterval(nameInterval);
      }
    }, 50);

    return () => clearInterval(nameInterval);
  }, []);



  return (
    <section id="intro" className="hero">
      <h1>{displayedName}</h1>

      <p>{intro}</p>
       <p className="open-to-work">💼 Currently Open to Developer Roles in Spain & EU</p>
      <ul className="open-list">
       <li>Valid work authorization in Spain</li>
       <li>Open to remote opportunities</li>
      </ul>
    </section>
  );
};

export default Hero;