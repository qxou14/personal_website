import React from "react";
import { Card } from "react-bootstrap";

function ProjectPage({ content }) {
  return content.map((project) => (
    <Card>
      <Card.Body>
        <Card.Text>Hello</Card.Text>
        <Card.Img variant="top" src={project.gif}></Card.Img>
        <Card.Link href={project.gif} target="_blank">
          Card Link
        </Card.Link>
      </Card.Body>
    </Card>
  ));
}

export default ProjectPage;
