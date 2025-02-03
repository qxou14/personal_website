import React from "react";
import { Card, Carousel, Row, Col } from "react-bootstrap";

function ProjectPage({ content }) {
  return (
    <Row>
      {" "}
      {content.map((project) => (
        <Col md={6} className="single-project">
          <Card key={project.id} className="card">
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Carousel
                controls={project.gif.length > 1 ? true : false}
                className="carousel"
              >
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
        </Col>
      ))}
    </Row>
  );
}

export default ProjectPage;
