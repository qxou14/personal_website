import React from "react";
import { Card, Row, Col } from "react-bootstrap";

function EducationPage({ education, extra }) {
  return (
    <div className="education-page">
      <h1 id="education" className="section-header-name">
        Education
      </h1>
      <Row className="education-content">
        <Card key={education.key} className="education-card">
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
      </Row>

      <Row className="education-content">
        <Card key={extra.key} className="education-card">
          <Card.Body>
            <Card.Title>{extra.name}</Card.Title>
            <div>
              Description:{" "}
              {extra.description.map((des) => (
                <Card.Text className="mb-2 text-muted" key={des.key}>
                  {des.content}
                </Card.Text>
              ))}
            </div>
          </Card.Body>
        </Card>
      </Row>
    </div>
  );
}

export default EducationPage;
