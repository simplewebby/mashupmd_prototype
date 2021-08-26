import React, { useState, useEffect } from 'react'
import '../App.css';
import { Card, Row, Col } from "react-bootstrap";
import BigCard from './BigCard'
import Title from './Title'


const SmallCard = () => {
    const [ users, setUsers ] = useState([]);
    const [ selectedUser, setSelectedUser ] = useState(null);

    useEffect(() => {
        (async () => {
            const resp = await fetch('https://jsonplaceholder.typicode.com/photos');
            const json = await resp.json();
            setUsers(json);
        })();
    }, []);


    return (

        <Row style={ { padding: "20px 15px 10px 34px", height: "62vh" } }>
            
            <Col xs={ 12} md={4} lg={ 4 } >
            <Title />
                <div className="container_scroll">
              
                    <div className="center-col" >
                        { users.map(u => (
                            <Card key={ u.id } onClick={ () => setSelectedUser(u) } style={ { display: "flex", flexDirection: "row", width: "100%", maxWidth: "440px", width: "100%", height: "120px", marginBottom: "20px" } }>
                                <Card.Img src={ u.thumbnailUrl } style={ { width: "120px", height: "120px", objectFit: "cover" } } />
                                <Card.Body>
                                    <Card.Text > { u.title } </Card.Text>
                                </Card.Body>
                            </Card>
                        )) }
                    </div>
                </div>
            </Col>
            <Col xs={ 12 } md={ 6 } lg={ 8 } style={ { padding: "0", height: "62vh" } }>
                <div>
                    { selectedUser ? <BigCard key={ selectedUser.id } user={ selectedUser } /> : "" } 
                  
                </div>
            </Col>
        </Row>






    )
}

export default SmallCard