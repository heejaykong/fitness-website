import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Navigator() {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="#">Safe Gym</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#stories">Stories</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Navigator;
