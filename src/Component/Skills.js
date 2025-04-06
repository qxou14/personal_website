import React from "react";

const skills = [
  "Python",
  "Java",
  "C++",
  "C#",
  "JavaScript",
  "TypeScript",
  "React",
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
      <b>Skills</b>
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
