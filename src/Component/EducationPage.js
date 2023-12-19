import React from "react";
import { Card } from "react-bootstrap";

const school_page = (education) => {
  if (education.school) {
    return (
      <Card>
        <Card.Body>
          <Card.Title>{education.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Major : {education.major}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
            GPA: {education.gpa}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
            Year: {education.year}
          </Card.Subtitle>
          <Card.Text>Relevant course : {education.relevant_course}</Card.Text>
        </Card.Body>
      </Card>
    );
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title>{education.name}</Card.Title>
        <Card.Text>
          Description:{" "}
          {education.description.map((des) => (
            <Card.Text className="mb-2 text-muted">{des}</Card.Text>
          ))}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

function EducationPage({ content }) {
  return (
    <div>
      {" "}
      <p>Hello this is from Education page </p>
      {content.map((education) => school_page(education))}
    </div>
  );
}

export default EducationPage;
