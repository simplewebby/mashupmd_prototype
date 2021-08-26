import React from 'react'
import SmallCard from '../components/SmallCard.js'
import { Row, Col} from "react-bootstrap";

import Header from '../components/Header'
import SignupBanner from '../components/SignupBanner'
function MainContent() {
    return (
        <div>
            <Header />
            <SignupBanner />
            <Row>
                <Col xs={ 12 } md={ 12 } lg={ 12 } style={ { padding: "0", height: "100vh" } }>
                    <SmallCard />
                </Col>
            </Row>

        </div>
    )
}

export default MainContent
