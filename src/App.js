import './App.css';
import { Container, Row, Col, Image } from "react-bootstrap";
import mashupMD from './components/images/mashupMD_380.png'
import React, { useEffect, useState } from "react";
import Header from './components/Header'
import Signup from './components/Signup'
import Title from './components/Title';
import Small_card from './components/Small_card';
import Big_card from './components/Big_card';
import Search from './components/Search';
import Navbar from './components/Navbar';
import Ad from './components/Ad'
import TrendingTopics from './components/TrendingTopics';


function App() {

  return (
    <div style={ { width: "90%", margin: "0 auto" } }>
      <Row>
        <Col xs={ 12 } md={ 4 } lg={ 2 } style={ { background: "#eee" } }>
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
            <Col xs={ 12 } md={ 6 } lg={ 4 } style={ { padding: "20px 15px 10px 34px", height: "100vh" } }>
              <Title />
              <Small_card />
            </Col>
            <Col xs={ 12 } md={ 6 } lg={ 8 } style={ { padding: "0", height: "100vh" } }>
              <Big_card />
            </Col>
          </Row>

        </Col>
      </Row>


    </div>

  );
}

export default App;
