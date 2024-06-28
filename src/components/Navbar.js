import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const CustomNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Гульмира Тусупбекова</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Главная</Nav.Link>
            <Nav.Link href="#projects">Проекты</Nav.Link>
            <Nav.Link href="#education">Образование</Nav.Link>
            <Nav.Link href="#portfolio">Портфолио</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
