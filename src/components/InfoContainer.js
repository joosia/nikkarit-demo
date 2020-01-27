import React from 'react'
import { Col, Row, OverlayTrigger, Tooltip } from 'react-bootstrap'

const InfoContainer = () => {
    return (
        <Row className="shadow-sm py-2 my-3 bg-white">

            <Col>
                <Row className="col-12 my-2">
                    <Col className="align-items-center"><i className="fas fa-chevron-left"></i><span className="mx-1 h4">2019</span><i className="fas fa-chevron-right"></i></Col>
                    <Col >
                        <div className="text-right">
                            <i className="fas fa-square-full mx-2 pink"></i>Yksityiset
                        <i className="fas fa-square-full mx-2 blue"></i>Julkiset
                        </div>
                    </Col>
                </Row>
                <Row>
                    {[
                    {title: "Yöpymiset", content: "Yöpymiset tooltip"}, 
                    {title: "Yöpymishinta", content: "Yöpymishinta tooltip"},
                    {title: "Viipymisaika", content: "Viipymisaika tooltip"},
                    {title: "Käyttöaste", content: "Käyttöaste tooltip"},
                    {title: "Yöpymiset maittain", content: "Yöpymiset maittain tooltip"},
                    ].map(data => (
                        <Col className="border-right">
                            <Row>
                                <Col><span>{data.title}</span></Col>
                                <Col className="col-2">
                                    <OverlayTrigger overlay={<Tooltip>{data.content}</Tooltip>}>
                                        <i className="fas fa-info-circle"></i>
                                    </OverlayTrigger>
                                </Col>
                            </Row>
                        </Col>
                    ))}
                    
                </Row>
            </Col>
        </Row>
    )
}

export default InfoContainer