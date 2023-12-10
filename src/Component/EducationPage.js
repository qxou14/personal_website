import React from "react";
import { Card } from "react-bootstrap";

function EducationPage({ content }) {
  return (
    <div>
      {" "}
      <p>Hello this is from Education page </p>
      {content.map((education) => education.name)}
    </div>
  );
}

export default EducationPage;
