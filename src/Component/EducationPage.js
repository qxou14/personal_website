import React from "react";
import { Card } from "react-bootstrap";

const school_page = (education) => {
  return education.school ? (
    <Card key={education.key}>
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
  ) : (
    <Card key={education.key}>
      <Card.Body>
        <Card.Title>{education.name}</Card.Title>
        <div>
          Description:{" "}
          {education.description.map((des) => (
            <Card.Text className="mb-2 text-muted" key={des.key}>
              {des.content}
            </Card.Text>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
};

function EducationPage({ content }) {
  return <div>{content.map((education) => school_page(education))}</div>;
}

export default EducationPage;
