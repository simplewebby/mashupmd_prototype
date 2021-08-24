import './App.css';

import { Container, Row, Col, Image, Card } from "react-bootstrap";
import React, { useEffect, useState } from 'react'
import mashupMD from './components/images/mashupMD_380.png'
import Header from './components/Header'
import Signup from './components/Signup'

import Search from './components/Search';
import Navbar from './components/Navbar';
import Ad from './components/Ad'
import TrendingTopics from './components/TrendingTopics';
import Title from './components/Title'

import Small_card from './components/Small_card'

function App() {

 



  return (
    <div style={ { width: "90%", margin: "0 auto" } }>

      <Row>
        <Col xs={ 12 } md={ 4 } lg={ 2 } style={ { background: "#eee", height: "100vh" } }>
          <Image style={ { width: "90%", margin: "10px auto" } } src={ mashupMD } alt="mashupLogo" />
          <Search />
          <Navbar />
          <Ad />
          <TrendingTopics />
        </Col>



        <Col xs={ 12 } md={ 8 } lg={ 10 } style={ { background: "#fff", padding: "0" } }>
          <Header />
          <Signup />
          <Row>
            <Col xs={ 12 } md={ 12 } lg={ 12 } style={ { background: "#eee", padding: "0" } }>
                <Small_card />
            </Col>
          </Row>
        </Col>

      </Row>


    </div>

  );
}

export default App;
