import React from 'react'
import { Navbar, Nav, Link} from "react-bootstrap";
import { CgSearch } from 'react-icons/cg';

const Header = () => {
    return (
       
                <Navbar style={{ background: "#fff", fontSize: "18px"}}>
                
                    <Nav className="me-auto">
                     
                    <Nav.Link href="#home"><CgSearch style={{ fontSize: "24px"}}/> Search</Nav.Link>
                    </Nav>
                    <Nav>
                    <Nav.Link href="#deets">Register</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Log In
                    </Nav.Link>
                    </Nav>
                </Navbar>

    )
}

export default Header
