import React from "react";

const skills = [
  "Python",
  "Java",
  "C++",
  "C#",
  "JavaScript",
  "TypeScript",
  "React",
  "Jenkins",
  "CI/CD",
  "Agile",
  "Kubernetes",
  "Openshift",
  "Datadog",
  "Node.js",
  "HTML",
  "CSS",
  "SQL",
  "Django",
  "PHP",
  "React Native",
];

function SkillPage() {
  return (
    <>
      <h1 className="section-header-name" id="skills">
        Skills
      </h1>
      <div className="skillpage-container">
        {skills.map((skill, index) => (
          <span key={index} className="skill">
            {skill}
          </span>
        ))}
      </div>
    </>
  );
}

export default SkillPage;
