import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaWarehouse, FaTachometerAlt, FaSeedling, FaChartLine } from 'react-icons/fa'; // Import icons
import './Header.css'; // Ensure your CSS file is linked correctly

export const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="navbar-custom">
            <Navbar.Brand as={Link} to="/" className="navbar-brand">
                {/* Assuming your logo is stored in the public folder */}
                <img src={`${process.env.PUBLIC_URL}/logo/power.png`} alt="Green Harvest Logo" height="30" className="d-inline-block align-top" /> Green Harvest
            </Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto"> {/* Adjusted to ml-auto for alignment to the right */}
                    <Nav.Link as={Link} to="/list-greenhouses" className="nav-link"><FaWarehouse /> My Greenhouses</Nav.Link>
                    <Nav.Link as={Link} to="/my-sensors" className="nav-link"><FaTachometerAlt /> My Sensors</Nav.Link>
                    <Nav.Link as={Link} to="/my-production" className="nav-link"><FaSeedling /> My Production</Nav.Link>
                    <Nav.Link as={Link} to="/general-statistics" className="nav-link"><FaChartLine /> General Statistics</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
