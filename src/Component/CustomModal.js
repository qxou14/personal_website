import React from "react";
import { Modal, Card } from "react-bootstrap";

export default function CustomModal({ showModal, closeModal, project }) {
  if (project === undefined) return;
  return (
    <>
      <Modal
        show={showModal}
        onHide={closeModal}
        size="xl"
        className="custom-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>{project.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <b>Description:</b>
            <div>{project.description}</div>
          </div>

          <div>
            <b>Features:</b>
            <ul className="modal-list">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div>
            <b>Tools:</b> {project.tool}
          </div>

          <div>
            <b style={{ display: "block" }}>Demo/Screenshot:</b>{" "}
            <div className="modal-gif-container">
              {project.gif.map((gif) => (
                <Card.Img src={gif} className="modal-gif" />
              ))}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
