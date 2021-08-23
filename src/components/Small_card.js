import React, { useEffect, useState } from 'react'
import '../App.css';
import signup from '../components/images/signup.jpg'
import { Image, Button, Card, Text, Title } from "react-bootstrap";


const Small_card = () => {
    const [ data, setData ] = useState([]);

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character/")
            .then((res) => res.json())
            .then((data) => setData(data.results.slice(0, 20)));
    }, []);
    return (
        <div className="container_scroll" >
            <div className="center-col" >
                { data.map((character) => (
                    <Card style={ { display: "flex", flexDirection: "row", width: "100%", maxWidth: "430px", height: "160px", marginBottom: "20px" } }>
                        <Card.Img src={ character.image } style={ { width: "160px", height: "160px", objectFit: "cover" } } />
                        <Card.Body>
                            <Card.Text>
                                { character.species }
                            </Card.Text>
                            <Button variant="primary" href={ character.url } target="_blank">
                                More Info
                            </Button>
                        </Card.Body>
                    </Card>
                )) }
            </div>
        </div>


    )
}

export default Small_card