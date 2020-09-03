import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import './Header.css'

const Header = () => {
    return (
        <Navbar bg="info" expand="lg">
            <div className="container">
                <Navbar.Brand href="/home"> SREE </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto main-menu">
                        <Nav.Link className='menu-li' href="/home"> Home</Nav.Link>
                        <Nav.Link className='menu-li' href="/country"> All Country</Nav.Link>
                        <Nav.Link className='menu-li' href="/contact"> Contact Us</Nav.Link>
                        <Nav.Link className='menu-li' href="/blog"> Blog</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default Header;