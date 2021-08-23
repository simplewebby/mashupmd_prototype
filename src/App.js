import './App.css';
import { Container, Row, Col, Image } from "react-bootstrap";
import React, { useEffect, useState } from 'react'
import mashupMD from './components/images/mashupMD_380.png'
import Header from './components/Header'
import Signup from './components/Signup'
import Small_card from './components/Small_card';
import Search from './components/Search';
import Navbar from './components/Navbar';
import Ad from './components/Ad'
import TrendingTopics from './components/TrendingTopics';


function App() {
  const [ data, setData ] = useState([]);

  useEffect(() => {
      fetch("https://rickandmortyapi.com/api/character/")
          .then((res) => res.json())
          .then((data) => setData(data.results.slice(0, 20)));
  }, []);

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
            <Col style={ { padding: "20px 15px 10px 34px", height: "62vh" } }>
              <Small_card data={ data } />
            </Col>
          </Row>
        </Col>
      </Row>


    </div>

  );
}

export default App;
