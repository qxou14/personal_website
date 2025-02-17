import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export default function Header() {
  return (
    <div className="header">
      <Navbar>
        <Navbar.Brand className="custom-nav-link">Home</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link eventKey={1} href="#" className="custom-nav-link">
            Education
          </Nav.Link>
          <Nav.Link eventKey={1} href="#" className="custom-nav-link">
            Skills
          </Nav.Link>
          <Nav.Link eventKey={2} href="#" className="custom-nav-link">
            Experience
          </Nav.Link>
          <Nav.Link eventKey={3} href="#" className="custom-nav-link">
            Projects
          </Nav.Link>
          <Nav.Link eventKey={4} href="#" className="custom-nav-link">
            Contact Me
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}
