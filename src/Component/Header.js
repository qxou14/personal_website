import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export default function Header() {
  const clickHeader = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    window.location.hash = id;
  };
  return (
    <div className="header">
      <Navbar>
        <Navbar.Brand className="custom-nav-link">Home</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link
            eventKey={1}
            onClick={() => clickHeader("education")}
            className="custom-nav-link"
          >
            Education
          </Nav.Link>
          <Nav.Link
            eventKey={1}
            onClick={() => clickHeader("skills")}
            className="custom-nav-link"
          >
            Skills
          </Nav.Link>
          <Nav.Link
            eventKey={2}
            onClick={() => clickHeader("experience")}
            className="custom-nav-link"
          >
            Experience
          </Nav.Link>
          <Nav.Link
            eventKey={3}
            onClick={() => clickHeader("project")}
            className="custom-nav-link"
          >
            Projects
          </Nav.Link>
          <Nav.Link
            eventKey={4}
            onClick={() => clickHeader("contact")}
            className="custom-nav-link"
          >
            Contact Me
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}
