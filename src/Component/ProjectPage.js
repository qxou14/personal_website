import React from "react";
import { Card, Carousel, Row, Col } from "react-bootstrap";

function ProjectPage({ content }) {
  return (
    <div className="project-list">
      {" "}
      {content.map((project) => (
        <Col md={6} className="project" key={project.id}>
          <div>{project.title}</div>
          <Carousel
            controls={project.gif.length > 1 ? true : false}
            indicators={false}
          >
            {project.gif.map((gif, index) => {
              return (
                <Carousel.Item key={index} className="carousel-temp">
                  <Card.Img variant="top" src={gif} className="gif-container" />
                </Carousel.Item>
              );
            })}
          </Carousel>
          <div>{project.description}</div>
          <div>
            Features:
            <ul>
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <div>Tools: {project.tool}</div>
        </Col>
      ))}
    </div>
  );
}

export default ProjectPage;
