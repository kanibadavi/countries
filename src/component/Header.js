import { useState, useEffect } from "react";
import "./DarkMode.css";
import { Container, Navbar } from "react-bootstrap";

// this is our Header component
const Header = () => {
  /* useState returns an array with exactly two values:
  1.The current state. During the first render, it will match the initialState you have passed.
  2.The set function that lets you update the state to a different value and trigger a re-render.
  */
  //const [state, setState] = useState(initialState)
  const [theme, setTheme] = useState("light");
  function changeModeHandler() {
    setTheme(() => {
      if (theme === "light") {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    });
  }
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Where in the world?🌏</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
