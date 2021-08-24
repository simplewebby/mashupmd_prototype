import React from 'react'
import '../App.css';
import { Nav } from "react-bootstrap";
import { BsPlus } from 'react-icons/bs';



function TrendingTopics() {
    return (
        <div>
             <h6 style={{ marginLeft: "10px", fontWeight: "bold", fontSize: "18px"}}>TRENDING TOPICS</h6>
             <Nav defaultActiveKey="/home" className="flex-column" >
            
            <Nav.Link href="/home">Covid-19 (168817) <BsPlus style={{ fontSize: "22px"}}/></Nav.Link>
            <Nav.Link eventKey="link-1">biorxiv (44056) <BsPlus style={{ fontSize: "22px"}}/></Nav.Link>
            <Nav.Link eventKey="link-2">medtwitter (13897) <BsPlus style={{ fontSize: "22px"}}/></Nav.Link>
            <Nav.Link eventKey="link-3">Cancer (13510) <BsPlus style={{ fontSize: "22px"}}/></Nav.Link>
            <Nav.Link eventKey="link-4">Healthcare (13247) <BsPlus style={{ fontSize: "22px"}}/></Nav.Link>
            <Nav.Link eventKey="link-3">Cardiology (13510) <BsPlus style={{ fontSize: "22px"}}/></Nav.Link>
            <Nav.Link eventKey="link-4">MedEd (7805)  <BsPlus style={{ fontSize: "22px"}}/></Nav.Link>
        </Nav> 
        </div>
    )
}

export default TrendingTopics
