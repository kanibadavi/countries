//we use react bootstrap in this project
import { Button, Container, Navbar } from "react-bootstrap";

// this is our Header component
//we can write both props.onClick or destructure way like this: {onClick}
const Header = ({ onClick }) => {
  //every component needs a returning
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Where in the world?🌏</Navbar.Brand>
        {/* we should use that props we given to an event or classNAme or ... */}
        <Button onClick={onClick}>Change Mode</Button>
      </Container>
    </Navbar>
  );
};

export default Header;
