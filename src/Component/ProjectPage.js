import React from "react";
import { Card } from "react-bootstrap";

function ProjectPage({ content }) {
  return content.map((project) => (
    <Card>
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        {/* <Card.Img variant="top" src={project.gif}></Card.Img> */}
        {/* <Card.Link href={project.gif} target="_blank">
          Card Link
        </Card.Link> */}
        <Card.Subtitle className="mb-2 text-muted">
          {project.description}
        </Card.Subtitle>
        <Card.Text>
          Features:
          <ul>
            {project.features.map((feature) => (
              <li>{feature}</li>
            ))}
          </ul>
        </Card.Text>
        <Card.Text>Tools: {project.tool}</Card.Text>
      </Card.Body>
    </Card>
  ));
}

export default ProjectPage;
