import React from 'react'
import '../App.css';
import { Nav} from "react-bootstrap";
import { FiTrendingUp } from 'react-icons/fi';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { FaFileMedical } from 'react-icons/fa';
import { FaGlobeAmericas } from 'react-icons/fa';
import { BsEnvelope } from 'react-icons/bs';

import { Link } from 'react-router-dom'

   
function Navbar() {

    
 
    return (
       
            <Nav defaultActiveKey="/" className="flex-column" >
             
                <Link to="/" style={ { textDecoration: "none", color: "#666", lineHeight:"30px"  } }><FiTrendingUp style={{ fontSize: "22px"}}/> Trending</Link>
                <Link to="/login" style={ { textDecoration: "none", color: "#666", lineHeight:"30px"  } }><AiOutlineClockCircle style={{ fontSize: "22px"}}/> Log In</Link>
                <Link to="/" style={ { textDecoration: "none", color: "#666", lineHeight:"30px"  } }><FaFileMedical style={{ fontSize: "22px"}}/> Specialties</Link>
                <Link to="/" style={ { textDecoration: "none", color: "#666", lineHeight:"30px"  } }><FaGlobeAmericas style={{ fontSize: "22px"}}/> Discover</Link>
                <Link  to="/expertssection" style={ { textDecoration: "none", color: "#666", lineHeight:"30px"  } }><BsEnvelope style={{ fontSize: "22px"}}/> Expert Newsletters</Link>
            </Nav>
       
    )
}

export default Navbar
