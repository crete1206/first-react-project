import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/catalyst-x.png";
function Navbars() {
  return (
    <Navbar expand="lg" className="bg-black">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="" height="80px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#why-catalyst-x">Why catalyst</Nav.Link>
            <Nav.Link href="#speaker">Speaker</Nav.Link>
            <Nav.Link href="#register">Register</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
