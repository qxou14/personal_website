import React from "react";
import { Card, Carousel } from "react-bootstrap";

function ProjectPage({ content }) {
  return content.map((project) => (
    <Card key={project.id}>
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Carousel controls={project.gif.length > 1 ? true : false}>
          {project.gif.map((gif, index) => {
            return (
              <Carousel.Item key={index}>
                <Card.Img variant="top" src={gif}></Card.Img>
              </Carousel.Item>
            );
          })}
        </Carousel>
        <Card.Subtitle className="mb-2 text-muted">
          {project.description}
        </Card.Subtitle>
        <div>
          Features:
          <ul>
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <Card.Text>Tools: {project.tool}</Card.Text>
      </Card.Body>
    </Card>
  ));
}

export default ProjectPage;
