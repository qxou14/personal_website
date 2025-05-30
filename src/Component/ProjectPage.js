import React, { useState } from "react";
import { Card, Col, Button } from "react-bootstrap";
import CustomModal from "./CustomModal";

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

  const [showModal, setShowModal] = useState(false);
  const [projectData, setProjectData] = useState(undefined);

  function handleHoverState(label, onHover) {
    setImageHoverState((prev) => ({
      ...prev,
      [label]: onHover,
    }));
  }
  return (
    <>
      <h1 id="project" className="section-header-name">
        Project
      </h1>
      <hr className="custom-hr-tag" />
      <div className="project-list">
        {content.map((project) => (
          <Card className="project" key={project.id}>
            <Col
              className="card-item"
              onMouseEnter={() => handleHoverState(project.label, true)}
              onMouseLeave={() => handleHoverState(project.label, false)}
            >
              <Card.Img
                variant="top"
                src={
                  imageHoverState[project.label]
                    ? project.gif[0]
                    : project.image
                }
                className={
                  project.isMobile ? "gif-container-mobile" : "gif-container"
                }
              />
              <div className="project-view-more">
                <Button
                  variant="primary"
                  onClick={() => {
                    setShowModal(true);
                    setProjectData(project);
                  }}
                >
                  Show More
                </Button>
              </div>
            </Col>

            <Card.Body>
              <Card.Title>
                <div className="custom-text">{project.title}</div>
              </Card.Title>
              <Card.Text>
                <div className="custom-text">{project.description}</div>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
        <CustomModal
          showModal={showModal}
          closeModal={() => setShowModal(false)}
          project={projectData}
        />
      </div>
    </>
  );
}

export default ProjectPage;
