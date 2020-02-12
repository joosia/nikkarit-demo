import React from 'react'
import { Col, Row, Popover, OverlayTrigger, Button, ButtonGroup, Spinner } from 'react-bootstrap'
import LineGraph from './LineGraph'
import LineGraphRecharts from './LineGraphRecharts'

const GraafiContainer = ({ data, data1, data2 }) => {

   return (
      <Row className="shadow-sm bg-white py-2 mb-3">
         <Col>
            <Row>
               <Col className="align-items-center">
                  <span className="mr-1 h4 font-weight-bold">Yöpymiset</span>
                  <i className="fas fa-chevron-down"></i>
               </Col>
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
            </Row>
            <Row className="my-1">
               <Col>
                  <ButtonGroup aria-label="Basic example">
                     <Button className="rounded-0 bg-bislenz-blue text-white">Yhteensä</Button>
                     <Button className="rounded-0">Julkiset</Button>
                     <Button className="rounded-0">Yksityiset</Button>
                  </ButtonGroup>
               </Col>
            </Row>
            <Row>
               <Col className="text-center">
                  {data.length === 0
                     ? <Spinner animation="border" />
                     : <LineGraphRecharts data={data} />
                  }
                  {data.length === 0
                     ? <Spinner animation="border" />
                     : <LineGraph arrivalsData={data1} accommodationData={data2} />
                  }
               </Col>
            </Row>
         </Col>
      </Row >
   )
}

export default GraafiContainer