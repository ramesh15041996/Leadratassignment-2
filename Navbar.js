import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaUser} from "react-icons/fa"
import NavDropdown from 'react-bootstrap/NavDropdown';
function TicketNav() {
  return (
    <>
      <Navbar bg="danger" variant="light">
        <Container>
          <Navbar.Brand href="#home">Leadrat</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#pricing">Book-My-Seat</Nav.Link>
          </Nav>
          <Nav>
          <NavDropdown title={<FaUser style={{fontSize:16}}/>} id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Sign In/Sign Out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default TicketNav;