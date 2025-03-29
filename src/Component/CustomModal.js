import React from "react";
import { Modal } from "react-bootstrap";

export default function CustomModal({ showModal, closeModal, project }) {
  if (project == undefined) return;
  return (
    <>
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>{project.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>This is modal body</Modal.Body>
      </Modal>
    </>
  );
}
