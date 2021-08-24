import React from 'react'
import '../App.css';
import { Nav } from "react-bootstrap";
import { FiTrendingUp } from 'react-icons/fi';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { FaFileMedical } from 'react-icons/fa';
import { FaGlobeAmericas } from 'react-icons/fa';
import { BsEnvelope } from 'react-icons/bs';


   
function Navbar() {
    return (
       
            <Nav defaultActiveKey="/" className="flex-column" >
                <Nav.Link to="/"><FiTrendingUp style={{ fontSize: "22px"}}/> Trending</Nav.Link>
                <Nav.Link eventKey="link-1"><AiOutlineClockCircle style={{ fontSize: "22px"}}/> Latest</Nav.Link>
                <Nav.Link eventKey="link-2"><FaFileMedical style={{ fontSize: "22px"}}/> Specialties</Nav.Link>
                <Nav.Link eventKey="link-3"><FaGlobeAmericas style={{ fontSize: "22px"}}/> Discover</Nav.Link>
                <Nav.Link eventKey="link-4"><BsEnvelope style={{ fontSize: "22px"}}/> Expert Newsletters</Nav.Link>
            </Nav>
       
    )
}

export default Navbar
