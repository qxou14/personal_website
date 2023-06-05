import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";

export default function Header() {
  return (
    <div>
      <Navbar>
        <Navbar.Brand>
          <a>Home</a>
        </Navbar.Brand>
        <Nav>
          <NavItem eventKey={1} href="#">
            Skills
          </NavItem>
          <NavItem eventKey={2} href="#">
            Experience
          </NavItem>
          <NavItem eventKey={3} href="#">
            Projects
          </NavItem>
          <NavItem eventKey={4} href="#">
            Contact Me
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}
