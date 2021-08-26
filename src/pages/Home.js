import React from 'react'
import '../App.css';

import { Row, Col, Image } from "react-bootstrap";
import mashupMD from '../components/images/mashupMD_380.png'

import Search from '../components/Search';
import Navbar from '../components/Navbar';
import MainContent from '../layout/MainContent';
import Ad from '../components/Ad'

function Home() {
    return (

        <div style={ { width: "100%", margin: "0 auto" } }>

            <Row>
                <Col className="left-sidebar" 
                style={ { background: "#eee", height: "100vh !important", paddingLeft: "60px"} }>
                    <Image style={ { width: "100%", margin: "10px auto" } } src={ mashupMD } alt="mashupLogo" />
                    <Search />
                    <Navbar />
                  <Ad />
                   
                </Col>



                <Col className="right-content" style={ { padding: "0", height: "100vh" } }>
                  <MainContent />
                </Col>
            </Row>


        </div>

    )
}

export default Home
