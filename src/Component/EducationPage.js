import React from "react";
import { Card, Row } from "react-bootstrap";

function EducationPage({ education, extra }) {
  return (
    <div className="education-page">
      <h1 id="education" className="section-header-name">
        Education
      </h1>
      <hr className="custom-hr-tag" />
      <Row className="education-content">
        <Card key={education.key} className="education-card">
          <Card.Body>
            <Card.Title>
              <div className="custom-text">{education.name}</div>
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              <div className="custom-text">Major : {education.major}</div>
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">
              <div className="custom-text">GPA: {education.gpa}</div>
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">
              <div className="custom-text">Year: {education.year}</div>
            </Card.Subtitle>
            <Card.Text>
              <div className="custom-text">
                Relevant course : {education.relevant_course}
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>

      <Row className="education-content">
        <Card key={extra.key} className="education-card">
          <Card.Body>
            <Card.Title>
              <div className="custom-text">{extra.name} </div>
            </Card.Title>
            <div>
              <div className="custom-text"> Description: </div>
              {extra.description.map((des) => (
                <Card.Text className="mb-2 text-muted" key={des.key}>
                  <div className="custom-text">{des.content}</div>
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
