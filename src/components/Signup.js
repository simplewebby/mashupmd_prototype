import React from 'react'
import '../App.css';
import { Image, Button } from "react-bootstrap";
import signup from '../components/images/signup.jpg'
const Signup= () => {
    return (
        <div className="main">
              
              <div className="contents" style={{width: "100%", height: "300px",margin: "0", padding: "0px"}}>
              <Image style={{width: "100%", height: "300px",margin: "0", padding: "0px",  backgroundRepeat: "no-repeat", opacity: "0.6"}} 
              src={ signup }  fluid alt="Sign Up Image"/>
              </div>
              <div className="centered" style={{display: "flex", flexDirection: "column", justifyContent: "flex-end"}}>
                  <div style={{maxWidth: "700px", marginLeft: "auto"}}>
                  <h3>MashupMD is the premier medical news aggregator that’s completely free of
                    data-tracking algorithms. Optimized for rapid and efficient access to the latest
                    headlines in the medical world.</h3>
                    <div>
                   <Button style={{ backgroundColor: "#457b9d", border: "none", borderRadius: "20px", padding: "4px 20px"}}>Sign Up</Button><br/>
                    <small>Already a member? <a href="#">Log In</a> </small>
                   </div>
                  </div>
             
                  
                    
                   
                    
              </div>
            
              
        </div>
    )
}

export default Signup
