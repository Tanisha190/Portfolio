import React from "react";

interface Project {
  descriptions: string[];
  technologies: string;
}

interface Role {
  designation: string;
  timeline: string;
  projects: Project[];
}

interface ExperienceItem {
  company: string;
  icon: string;
  address: string;
  roles: Role[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Antino Labs",
    icon: "🏢",
    address: "Bengaluru, India",
    roles: [
      {
        designation: "Senior Software Developer",
        timeline: "Nov 2024 - Nov 2025",
        projects: [
          {
            descriptions: [
              "Integrated multiple payment systems like Razorpay, Easebuzz, Cashfree, Paysprint, FinoBank.",
              "Developed API's for Digilocker authorization process for secure user login.",
              "Integrated digiyatra API's for seamless face verification feature.",
              "Developed a fingerprint solution for real-time flagging of IP addresses for fraudulent activities.",
              "Developed API's for telematics portal handling GPS and CAN data for fleet management.",
              "Developed an Electron.js solution for real-time research on company data for sales team."
            ],
            technologies:
              "Node.js, Nest.js, Express.js, Electron.js, React, Redux, PostgreSQL, MongoDB, Razorpay API, Easebuzz API, Cashfree API, Paysprint API, FinoBank API, Digilocker API, Digiyatra API, MMDB, Jest",
          },
        ],
      },
      {
        designation: "Software Developer",
        timeline: "Feb 2023 - Nov 2024",
        projects: [
          {
            descriptions: [
              "Developed API's for consignment management system and AWS Lambda for real time currency conversion and used Apache Kafka to upadate databases in real time.",
              "Developed GraphQL apis with Apollo server for loading of necessary data efficiently.",
              "Created a one-on-one chat system using Socket.io for real-time communication.",
              "Integrated third-party services like ZOOP.ONE for real time GST and PAN verification and Razorpay for payment processing.",
              "Developed and maintained a CMS portal for content management.",
              "Developed API's for a mobility platform using Nest.js.",
              "Contributed to development of Nest.js boilerplate for rapid project setup and standardized development practices."
            ],
            technologies: "React, Redux, GraphQL, PostgreSQL, Node.js,Nest.js, Express.js, Apache Kafka, Socket.io, AWS Lambda, ZOOP.ONE API, Razorpay API, Jest",
          },
        ],
      },
    ],
  },
   {
    company: "Verzeo",
    icon: "🏢",
    address: "Bengaluru, India",
    roles: [
      {
        designation: "Backend Developer",
        timeline: "Jul 2021 - Jan 2023",
        projects: [
          {
            descriptions: [
              "Built a React Native mobile application for employees to mark daily attendance and manage leave requests",
              "Integrated Google Calendar into web portal to streamline scheduling feature",
              "Worked on API's for real estate project",
              "Developed a portal for lead tracking and revenue management"
            ],
            technologies:
              "React Native, Expo, Node.js, Express.js, MongoDB, AWS S3, Google Calendar API, PostgreSQL",
          },
        ],
      },
      
      {
        designation: "Backend Developer  Intern",
        timeline: "Jan 2021 - Jun 2021",
        projects: [
          {
            descriptions: [
              "Integrated SendinBlue email and contact services",
              "Integrated Razorpay and Instamojo payment gateways for seamless transactions",
              "Contributed to development of Verzeo website and CMS portal enabling dynamic content management"
            ],
            technologies: "Node.js, Express.js, SendinBlue API, Razorpay API, Instamojo API, React.js, MongoDB, AWS S3",
          },
        ],
      },
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section">
      <h2>Experience</h2>
      <div className="experience-container">
        {experiences.map((exp: ExperienceItem, index: number) => (
          <div key={index} className="experience-card">
            <div className="company-header">
              <span className="company-icon">{exp.icon}</span>
              <div className="company-info">
                <h3 className="company-name">{exp.company}</h3>
                <p className="company-address">{exp.address}</p>
              </div>
            </div>
            <div className="roles-container">
              {exp.roles.map((role: Role, roleIndex: number) => (
                <div key={roleIndex} className="role-item">
                  <div className="role-header">
                    <h4 className="designation">{role.designation}</h4>
                    <span className="timeline">{role.timeline}</span>
                  </div>
                  {role.projects.map((project: Project, projectIndex: number) => (
                    <div key={projectIndex} className="project-details">
                      <ul className="project-descriptions">
                        {project.descriptions.map((desc: string, descIndex: number) => (
                          <li key={descIndex} className="project-description">{desc}</li>
                        ))}
                      </ul>
                      <p className="project-technologies">{project.technologies}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
