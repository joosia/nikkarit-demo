import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

const InfoContainer = () => {
    return (
        <Row className="shadow-sm py-2 my-3 bg-white">
            <Col className="border-right">data 1</Col>
            <Col>data 2</Col>
            <Col>data 3</Col>
            <Col>data 4</Col>
            <Col>data maat</Col>
        </Row>
    )
}

export default InfoContainer