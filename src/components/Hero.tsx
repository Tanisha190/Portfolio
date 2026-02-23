import React, { useState, useEffect } from "react";

const Hero: React.FC = () => {
  const [displayedName, setDisplayedName] = useState("");

  const name = "Hi, I'm Tanisha Gangadharaiah👋";
  const intro = "I’m an engineering professional with over 4 years of experience building reliable and scalable solutions in fast-paced environments.I am always eager to expand my knowledge, explore emerging technologies, and continuously strengthen my expertise to stay aligned with evolving industry standards and deliver greater value over time.";

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
    </section>
  );
};

export default Hero;