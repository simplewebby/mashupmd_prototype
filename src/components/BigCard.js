import React, { useState, useEffect } from 'react'
import '../App.css';

import { Image, Card } from "react-bootstrap";


function BigCard({ user }) {

    const [ userDetails, setUserDetails ] = useState();


    useEffect(() => {
        (async () => {
            const resp = await fetch(`https://jsonplaceholder.typicode.com/photos/${ user.id }`);
            const json = await resp.json();
            setUserDetails(json);
        })();
    }, [ user ]);


    return (

        <div className="container_detail">
            { userDetails && (
                <>
                    <Card className="big_card" >
                        <Card.Body>
                            <Card.Title style={ { fontSize: "24px" } }>

                                { userDetails.title }
                            </Card.Title>
                            <Card.Text>
                                { userDetails.url }
                            </Card.Text>


                            <div style={ { display: "flex", flexDirection: "row", gap: "20px", marginTop: "20px" } }>
                                <Image src={ userDetails.thumbnailUrl } roundedCircle style={ { width: "80px", height: "80px", objectFit: "cover" } } />
                                <div>
                                    <Card.Title>
                                        { userDetails.title }
                                    </Card.Title>

                                </div>
                            </div>

                        </Card.Body>

                    </Card>
                </>
            ) }
        </div>


    )
}

export default BigCard