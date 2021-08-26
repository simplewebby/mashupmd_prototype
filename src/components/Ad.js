import React from 'react'
import { Image} from "react-bootstrap";
import ad from '../components/images/cardiology.jpg'


function Ad() {
    return (
        <div className="ad" style={{margin: "30px 0", padding: "0px"}}>
        <Image style={{width: "300px", height: "250px"}} 
        src={ ad }  fluid alt="Ad Image"/>
        </div>
    )
}

export default Ad
