import React from "react";

function getColor(tool) {
  switch (tool.toLowerCase()) {
    case "python":
      return "#FFD43B";
    case "java":
      return "#D32F2F";
    case "c++":
      return "#00BFA6";
    case "c#":
      return "#AB47BC";
    case "javascript":
      return "#F7DF1E";
    case "typescript":
      return "#29B6F6";
    case "react":
      return "#61DAFB";
    case "react native":
      return "#00BCD4";
    case "jenkins":
      return "#FF5722";
    case "ci/cd":
      return "#FF9800";
    case "agile":
      return "#8BC34A";
    case "kubernetes":
      return "#1976D2";
    case "openshift":
      return "#C62828";
    case "datadog":
      return "#BA68C8";
    case "node.js":
      return "#76FF03";
    case "html":
      return "#FF5722";
    case "css":
      return "#03A9F4";
    case "postgresql":
      return "#FFC107";
    case "mysql":
      return "#00A6C2";
    case "django":
      return "#43A047";
    case "php":
      return "#D500F9";
    case ".net":
      return "#7C4DFF";
    case "kafka":
      return "#F05A28";
    default:
      return "gray";
  }
}

function SkillContainer({ skill, index }) {
  return (
    <span
      key={index}
      className="skill"
      style={{
        borderColor: getColor(skill),
        color: getColor(skill),
      }}
    >
      {skill}
    </span>
  );
}

export default SkillContainer;
