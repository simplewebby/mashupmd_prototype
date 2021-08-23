
import '../App.css';
import { Button, Card, Text, Row, Col } from "react-bootstrap";
import Big_card from './Big_card';
import Title from './Title'


const Small_card = ({ data }) => {
  

    function clickHandler() {
        console.log("button Clicked")
    }
    return (

      <>
  
        <Row>
        <Col  style={ { padding: "20px 15px 10px 34px", height: "62vh" } }>
         <Title />
        <div className="container_scroll" > 
          <div className="center-col" >
          { data.map((character) => (
                  <Card key={character.id} style={ { display: "flex", flexDirection: "row", width: "100%", maxWidth: "410px", height: "160px", marginBottom: "20px" } }>
                      <Card.Img src={ character.image } style={ { width: "160px", height: "160px", objectFit: "cover" } } />
                      <Card.Body>
                          <Card.Text>
                              { character.species }
                          </Card.Text>
                          <Button onClick={clickHandler} variant="primary" href={ character.url } target="_blank">
                              Learn More
                          </Button>
                      </Card.Body>
                  </Card>
                )) } 
          </div>
      </div>
        </Col>
         <Col xs={ 12 } md={ 6 } lg={ 8 } style={ { padding: "0", height: "62vh" } }>
          <Big_card data ={ data } />
        </Col> 
        </Row>
       
</>
      


    )
}

export default Small_card