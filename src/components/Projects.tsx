import React from "react";
import { projects } from "../data/Projects";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            {project.image && (
              <img src={project.image} alt={project.title} className="project-image" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;