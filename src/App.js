import './App.css';

import { Row, Col, Image} from "react-bootstrap";
import mashupMD from './components/images/mashupMD_380.png'
import Header from './components/Header'
import SignupBanner from './components/SignupBanner'
import Search from './components/Search';
import Navbar from './components/Navbar';
import Ad from './components/Ad'
import TrendingTopics from './components/TrendingTopics';
import SmallCard from './components/SmallCard'

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



        <Col xs={ 12 } md={ 8 } lg={ 10 } style={ {  padding: "0",} }>
          <Header />
          <SignupBanner />
          <Row>
            <Col xs={ 12 } md={ 12 } lg={ 12 } style={ {  padding: "0" } }>
                <SmallCard />
            </Col>
          </Row>
        </Col>

      </Row>


    </div>

  );
}

export default App;
