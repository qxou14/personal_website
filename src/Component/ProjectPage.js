import React from "react";
import { Card, Carousel } from "react-bootstrap";

function ProjectPage({ content }) {
  return content.map((project) => (
    <Card>
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Carousel controls={project.gif.length > 1 ? true : false}>
          {project.gif.map((gif) => {
            return (
              <Carousel.Item>
                <Card.Img variant="top" src={gif}></Card.Img>
              </Carousel.Item>
            );
          })}
        </Carousel>
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
