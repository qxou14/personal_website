import React, { useState } from "react";
import { Card, Carousel, Row, Col } from "react-bootstrap";

function ProjectPage({ content }) {
  const [imageHoverState, setImageHoverState] = useState({
    PhotoShare: false,
    PhotoShareAPI: false,
    Flicks: false,
    IAuctionsAPI: false,
    Flix: false,
    Tweet: false,
    InsClone: false,
    Todo: false,
    Online: false,
    Piechart: false,
  });

  function handleHoverState(label, onHover) {
    setImageHoverState((prev) => ({
      ...prev,
      [label]: onHover,
    }));
  }
  return (
    <div className="project-list">
      {content.map((project) => (
        <Row>
          <Col className="project" key={project.id}>
            <div>
              <div>{project.title}</div>

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
            </div>

            <div>
              <Carousel controls={false} indicators={false}>
                <Carousel.Item className="">
                  <Card.Img
                    variant="top"
                    src={
                      imageHoverState[project.label]
                        ? project.gif[0]
                        : project.image
                    }
                    className="gif-container"
                    onMouseEnter={() => handleHoverState(project.label, true)}
                    onMouseLeave={() => handleHoverState(project.label, false)}
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
        </Row>
      ))}
    </div>
  );
}

export default ProjectPage;

{
  /* <div>
<Carousel
  controls={project.gif.length > 1 ? true : false}
  indicators={false}
>
  {project.gif.map((gif, index) => {
    return (
      <Carousel.Item key={index} className="">
        <Card.Img
          variant="top"
          src={gif}
          className="gif-container"
          onMouseEnter={() =>
            handleHoverState(project.label, true)
          }
          onMouseLeave={() =>
            handleHoverState(project.label, false)
          }
        />
      </Carousel.Item>
    );
  })}
</Carousel>
</div> */
}
