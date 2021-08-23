import React from 'react'
import '../App.css';
import signup from '../components/images/signup.jpg'
import { Image, Card } from "react-bootstrap";


function Big_card({ data }) {
    return (
        <>

            { data.map((character) => (
              
                    <div className="container_detail">


                    <Card className="big_card" key={ character.id }>
                        <Card.Body>
                            <Card.Title style={ { fontSize: "24px" } }>

                                { character.species }
                            </Card.Title>
                            <Card.Text>
                                { character.url }
                            </Card.Text>
                            <div style={ { display: "flex", flexDirection: "row", gap: "20px" } }>
                                <Image src={ character.image } roundedCircle style={ { width: "80px", height: "80px", objectFit: "cover" } } />
                                <div>
                                    <Card.Title>
                                        { character.name }
                                    </Card.Title>
                                    <Card.Text>
                                        { character.gender }

                                    </Card.Text>
                                </div>
                            </div>

                            <div style={ { display: "flex", flexDirection: "row", gap: "20px", marginTop: "20px" } }>
                                <Image src={ signup } roundedCircle style={ { width: "80px", height: "80px", objectFit: "cover" } } />
                                <div>
                                    <Card.Title>
                                        Hany Ragy
                                    </Card.Title>
                                    <Card.Text>
                                        There you have it in @NEJM. Pfizer is ~90% effective against
                                        delta. AstraZeneca is ~70%. This is similar to effectiveness
                                        against other variants, including alpha. Vaccines work, even
                                        against variants. Get vaccinated if you haven't already. https://
                                        t.co/FV1Rr5fiVa - view on twitter
                                    </Card.Text>
                                </div>
                            </div>
                            <div style={ { display: "flex", flexDirection: "row", gap: "20px", marginTop: "20px" } }>
                                <Image src={ signup } roundedCircle style={ { width: "80px", height: "80px", objectFit: "cover" } } />
                                <div>
                                    <Card.Title>
                                        Hany Ragy
                                    </Card.Title>
                                    <Card.Text>
                                        There you have it in @NEJM. Pfizer is ~90% effective against
                                        delta. AstraZeneca is ~70%. This is similar to effectiveness
                                        against other variants, including alpha. Vaccines work, even
                                        against variants.
                                    </Card.Text>
                                </div>
                            </div>
                        </Card.Body>

                    </Card>

                </div>
                
               
            )) }
        </>
    )
}

export default Big_card

