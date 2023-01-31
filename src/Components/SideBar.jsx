import React from "react";
import { Nav } from "react-bootstrap";

const sidebarStyles = {
  background: "#006600",
  width: "200px",
  height: "100%",
  position: "fixed",
  top: "0",
  left: "0",
};

function Sidebar() {
  return (
    <Nav style={sidebarStyles} className="flex-column">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
  );
}

export default Sidebar;