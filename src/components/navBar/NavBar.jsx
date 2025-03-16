import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./NavBar.css";
import CustomContainer from "../container/Container";

const NavBar = () => {
  return (
    <CustomContainer>
      <Navbar
        expand="lg"
        className="bg-transparent"
        style={{ marginBlock: "20px" }}
      >
        <Navbar.Brand href="#" className="logo">
          Alaa Al-Faqawi
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mx-auto my-2 my-lg-0">
            <Nav.Link href="#action1" style={{ marginRight: "50px" }}>
              Home
            </Nav.Link>
            <Nav.Link href="#action2" style={{ marginRight: "50px" }}>
              About Me
            </Nav.Link>
            <Nav.Link href="#action3" style={{ marginRight: "50px" }}>
              My Works
            </Nav.Link>
            <Nav.Link href="#action4" style={{ marginRight: "50px" }}>
              Services
            </Nav.Link>
          </Nav>
          <button className="btn-contact">Contact With Me</button>
        </Navbar.Collapse>
      </Navbar>
    </CustomContainer>
  );
};

export default NavBar;
