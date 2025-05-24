import React from "react";
import { Card } from "react-bootstrap";

function ExperiencePage({ content }) {
  return (
    <div className="exp-page">
      <h1 id="experience" className="section-header-name">
        Work Experience
      </h1>
      <hr className="custom-hr-tag" />
      {content.map((exp) => (
        <Card key={exp.id} className="exp-content">
          <Card.Body>
            <Card.Title>
              <div className="custom-text">{exp.name}</div>
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              <div className="custom-text">Position : {exp.position}</div>
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">
              <div className="custom-text"> Time Period : {exp.time} </div>
            </Card.Subtitle>
            <div>
              <div className="custom-text"> Description: </div>
              <ul style={{ listStyle: "none" }}>
                {exp.description.map((des) => (
                  <li key={des.key}>
                    {" "}
                    <Card.Text className="mb-2 text-muted">
                      <div className="custom-text">{des.content}</div>
                    </Card.Text>{" "}
                  </li>
                ))}
              </ul>
            </div>
            <Card.Text>
              <div className="custom-text">Tools: {exp.tools}</div>
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default ExperiencePage;
