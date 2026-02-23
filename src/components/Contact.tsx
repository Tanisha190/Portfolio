import React from "react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <p>
        Email:{" "}
        <a
            href="mailto:tanishagangadharaiaheu@gmail.com"
            className="contact-link"
        >
            tanishagangadharaiaheu@gmail.com
        </a>
        </p>
       <p>Github: {" "}
         <a
          href="https://github.com/Tanisha190"   
          className="contact-link">
            https://github.com/Tanisha190

          </a>
        </p>
        <p>
        LinkedIn: {" "}
        <a
          href="https://www.linkedin.com/in/tanisha-gangadharaiah/"
          className="contact-link"
        >
         linkedin.com/in/tanisha-gangadharaiah/
        </a>
      </p>
    </section>
  );
};

export default Contact;