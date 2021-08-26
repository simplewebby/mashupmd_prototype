import React from 'react'
import { Navbar, Nav, Container, } from "react-bootstrap";
import { CgSearch } from 'react-icons/cg';

import { Link } from 'react-router-dom'


const Header = () => {
    return (

        <Navbar collapseOnSelect expand="lg"  variant="light" bg="light">
            <Container>
                <Navbar.Brand></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link style={ { textDecoration: "none", color: "#666"  } } to=""><CgSearch style={ { fontSize: "24px", color: "#666", textDecoration: "none"  } } /> Search</Link>

                    </Nav>
                    <Nav.Link>
                        <Link to="/register"  style={ { color: "#666", textDecoration: "none" } }> Register</Link> </Nav.Link>
                    <Nav.Link><Link to="/login"  style={ { color: "#666", textDecoration: "none" } }>Log In</Link></Nav.Link>

                </Navbar.Collapse>
            </Container>
        </Navbar>


    )
}

export default Header
