import React from "react";
import { Card } from "react-bootstrap";

function ExperiencePage({ content }) {
  return (
    <div className="exp-page">
      <h1 id="experience" className="section-header-name">
        Work Experience
      </h1>
      {content.map((exp) => (
        <Card key={exp.id} className="exp-content">
          <Card.Body style={{ backgroundColor: "#f0f0f0" }}>
            <Card.Title>{exp.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Position : {exp.position}
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">
              Time Period : {exp.time}
            </Card.Subtitle>
            <div>
              Description:{" "}
              <ul>
                {exp.description.map((des) => (
                  <li key={des.key}>
                    {" "}
                    <Card.Text className="mb-2 text-muted">
                      {des.content}
                    </Card.Text>{" "}
                  </li>
                ))}
              </ul>
            </div>
            <Card.Text>Tools: {exp.tools}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default ExperiencePage;
