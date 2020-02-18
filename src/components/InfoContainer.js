import React from 'react'
import { Col, Row, OverlayTrigger, Popover } from 'react-bootstrap'

const InfoContainer = ({ infoContainerData, currentYear, onYearChange }) => {
   return (
      <Row className="shadow-sm py-2 my-3 bg-white">

         <Col>
            <Row className="my-2">
               <Col className="InfoContainer-currentYear">
                  <i onClick={() => onYearChange(currentYear - 1)} className="fas fa-chevron-left"></i>
                  <span className="mx-1 h4 font-weight-bold">{currentYear}</span>
                  <i onClick={() => onYearChange(currentYear + 1)} className="fas fa-chevron-right"></i>
               </Col>
               <Col className="text-right">
                  <i className="fas fa-square-full mx-2 blue"></i>Julkiset
                  <i className="fas fa-square-full mx-2 pink"></i>Yksityiset
               </Col>
            </Row>
            <Row>
               {infoContainerData.map(data => (
                  <Col key={data.title} className="border-right">
                     <Row>
                        <Col><span>{data.title}</span></Col>
                        <Col className="col-2  ">
                           <OverlayTrigger overlay={
                              <Popover>
                                 <Popover.Content>
                                    {data.content}
                                 </Popover.Content>
                              </Popover>
                           }>
                              <i className="fas fa-info-circle bislenz-blue"></i>
                           </OverlayTrigger>
                        </Col>
                     </Row>
                     <Row>
                        <Col className="orange text-center">{data.all}</Col>
                     </Row>
                     <Row>
                        <Col className="blue text-right">{data.rudolf}</Col>
                        <Col className="pink text-left">{data.airdna}</Col>
                     </Row>
                     <Row>
                        <Col className="text-center"><i className="fas fa-chevron-up green"></i> {data.change} %</Col>
                     </Row>
                  </Col>
               ))}

            </Row>
         </Col>
      </Row>
   )
}

export default InfoContainer