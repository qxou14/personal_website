import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export default function Header() {
  return (
    <div>
      <Navbar className="bg-body-tertiary">
        <Navbar.Brand>Home</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link eventKey={1} href="#">
            Education
          </Nav.Link>
          <Nav.Link eventKey={1} href="#">
            Skills
          </Nav.Link>
          <Nav.Link eventKey={2} href="#">
            Experience
          </Nav.Link>
          <Nav.Link eventKey={3} href="#">
            Projects
          </Nav.Link>
          <Nav.Link eventKey={4} href="#">
            Contact Me
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}
