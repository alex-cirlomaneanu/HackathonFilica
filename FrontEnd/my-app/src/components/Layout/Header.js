import React from 'react';
import { Navbar, Nav, Image} from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Asigurați-vă că aveți importat Link-ul din 'react-router-dom'
import './Header.css'

export const Header = () => {
   return (
   <Navbar className="navbar" expand="lg" fluid>
    <Navbar.Brand as={Link} to="/" className="navbar-brand">
        <Image src={'/logo/power.png'} alt="Green Harvest Logo" height="30" className="d-inline-block align-top" /> Green Harvest
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/login" className="nav-link">Login</Nav.Link>
          <Nav.Link as={Link} to="/store" className="nav-link">About</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    )
}

export default Header