import React from "react";

interface SkillCategory {
  category: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["JavaScript", "TypeScript"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Nest.js", "GraphQL"],
  },
  {
    category: "Frontend",
    skills: ["React.js", "Redux"],
  },
  {
    category: "Databases & Cache",
    skills: ["MongoDB", "PostgreSQL", "Redis"],
  },
  {
    category: "Messaging & Event Streaming",
    skills: ["Apache Kafka", "RabbitMQ", "Redis Pub/Sub"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS (Lambda, S3, EC2)", "Docker"],
  },
  {
    category: "Testing",
    skills: ["Jest"],
  },
  {
    category: "Gen AI/ML",
    skills: ["OpenAI API", "Google Gemini API", "LangChain", "Hugging Face", "N8N"],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <div className="skills-container">
        {skillCategories.map((category: SkillCategory, index: number) => (
          <div key={index} className="skill-category">
            <h3>{category.category}</h3>
            <ul className="skills-list">
              {category.skills.map((skill: string, skillIndex: number) => (
                <li key={skillIndex} className="skill-item">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;