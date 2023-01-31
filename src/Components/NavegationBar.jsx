import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function NavigationBar() {
  const navbarStyles = {
    background: "linear-gradient(to right, #00b33c, #006622)",
    boxShadow: "0px 0px 10px #888888",
  };
  return (
    <Navbar style={navbarStyles} bg="light" expand="lg">
      <Navbar.Brand href="/">Data Structures</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/app">App</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;




