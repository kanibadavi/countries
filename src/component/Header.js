// import { useState } from "react";
import { Button, Container, Navbar } from "react-bootstrap";

// this is our Header component
const Header = ({ theme, onClick }) => {
  //every component needs a returning
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Where in the world?🌏</Navbar.Brand>
        <Button onClick={onClick}>Change Mode</Button>
      </Container>
    </Navbar>
  );
};

export default Header;
