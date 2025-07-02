import { Navbar, Nav, Container } from "react-bootstrap"
import { NavLink } from "react-router-dom";
import "../App.css";

const NavbarComponent = () => {

  return(
    <div>
      <Container>
        <Navbar 
          className="navbar"
          expand='lg'
          sticky='top' 
        >
          <Navbar.Brand className="narbar-brand" as={NavLink} to="/">Nicole & Tyler</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className='ms-auto'>
              <Nav.Link className="navlink" as={NavLink} to="/">Home</Nav.Link>
              <Nav.Link className="navlink" as={NavLink} to="/RSVP">RSVP</Nav.Link>
              <Nav.Link className="navlink" as={NavLink} to="/Details">Details</Nav.Link>
              <Nav.Link className="navlink" as={NavLink} to="/Gallery">Gallery</Nav.Link>
              <Nav.Link className="navlink" as={NavLink} to="/Registry">Registry</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  )
};

export default NavbarComponent;