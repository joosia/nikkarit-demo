import React from 'react'
import { Col, Row, Popover, OverlayTrigger } from 'react-bootstrap'

const GraafiContainer = () => {
    return (
        <Row className="shadow-sm bg-white py-2 my-3">
            <Col className="align-items-center"><span className="mx-1 h4 font-weight-bold">Yöpymiset</span><i className="fas fa-chevron-down"></i></Col>
            <Col className="col-1 text-right">
                <OverlayTrigger overlay={
                    <Popover>
                        <Popover.Content>

                        </Popover.Content>
                    </Popover>
                }>
                    <i className="fas fa-info-circle bislenz-blue"></i>
                </OverlayTrigger>
            </Col>
            <Col className="col-12 my-2">
                <Row>
                    <Col className="col-3">
                        <Row>
                            <Col className="bg-primary">Yhteensä</Col>
                            <Col className="bg-secondary">Yksityiset</Col>
                            <Col className="bg-primary">Julkiset</Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default GraafiContainer