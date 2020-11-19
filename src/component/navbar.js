import React from "react";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/esm/Nav";
// import { Nav } from 'react-bootstrap';
import Navbar from "react-bootstrap/Navbar";

const Navigation = () => {
  return (
    // <Navbar bg="light" expand="lg" fixed="top">
    //   <Container>
    //     <Navbar.Brand href="#home">LATECHCOM</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="justify-content-end" activeKey="/home">
    //         <Nav.Item>
    //           <Nav.Link href="/home">PROGRAMS</Nav.Link>
    //         </Nav.Item>
    //         <Nav.Item>
    //           <Nav.Link href="/home">ABOUT</Nav.Link>
    //         </Nav.Item>
    //         <Nav.Item>
    //           <Nav.Link href="/home">REGISTER</Nav.Link>
    //         </Nav.Item>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    <Navbar collapseOnSelect expand="lg" bg="light" fixed="top">
      <Container>
        <Navbar.Brand href="/">LATECHCOM</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#"></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#programs">PROGRAMS</Nav.Link>
            <Nav.Link eventKey={2} href="#about">
              ABOUT
            </Nav.Link>
            <Nav.Link href="#register">REGISTER</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
