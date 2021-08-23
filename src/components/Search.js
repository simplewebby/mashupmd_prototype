import React from 'react'
import { Form, Row, Col } from "react-bootstrap";
function Search() {
    return (
        <Form>
            <Form.Group as={ Row } className="mb-3" controlId="">

                <Col sm="12">
                    <Form.Control type="text" placeholder="Post to reading list" />
                </Col>
            </Form.Group>

        </Form>
    )
}

export default Search
