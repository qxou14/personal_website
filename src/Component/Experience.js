import React from "react";
import { Card } from "react-bootstrap";

function ExperiencePage({ content }) {
  return content.map((exp) => (
    <Card>
      <Card.Body>
        <Card.Title>{exp.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Position : {exp.position}
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">
          Time Period : {exp.time}
        </Card.Subtitle>
        <Card.Text>
          Description:{" "}
          {exp.description.map((des) => (
            <Card.Text className="mb-2 text-muted">{des}</Card.Text>
          ))}
        </Card.Text>
        <Card.Text>Tools: {exp.tools}</Card.Text>
      </Card.Body>
    </Card>
  ));
}

export default ExperiencePage;
