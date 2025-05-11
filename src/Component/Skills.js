import React from "react";
import SkillContainer from "./SkillContainer";

const skills = [
  "Python",
  "Java",
  "C++",
  "C#",
  "Kafka",
  ".Net",
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
  "MySQL",
  "PostgreSQL",
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
      <hr className="custom-hr-tag" />
      <div className="skillpage-container">
        {skills.map((skill, index) => (
          <SkillContainer skill={skill} index={index} />
        ))}
      </div>
    </>
  );
}

export default SkillPage;
