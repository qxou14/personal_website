import React from "react";
import { Modal } from "react-bootstrap";

export default function CustomModal({ showModal, closeModal, title }) {
  return (
    <>
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>This is modal body</Modal.Body>
      </Modal>
    </>
  );
}
