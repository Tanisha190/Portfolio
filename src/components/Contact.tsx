import React from "react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <p>Email: tanishagangadharaiaheu@gmail.com</p>
      <p>
        LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/tanisha-gangadharaiah/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
         linkedin.com/in/tanisha-gangadharaiah/
        </a>
      </p>
    </section>
  );
};

export default Contact;