import React, { useState } from 'react'
import { Col, Row, Popover, OverlayTrigger, Button, ButtonGroup, Spinner } from 'react-bootstrap'
// import LineGraph from './LineGraph'
import LineGraphRecharts from './LineGraphRecharts'

const GraafiContainer = ({ data, data1, data2, isLoading, currentCity, currentYear, onArrivalsDataChange }) => {
   // Capitalize strings
   let city = currentCity.charAt(0).toUpperCase() + currentCity.slice(1);

   const [dataTitle, setDataTitle] = useState("Yöpymiset")
 
   const handleClick = () => {
      if (dataTitle === "Yöpymiset") {
         setDataTitle("Saapuneet")
         onArrivalsDataChange("saapuneet")
      } else {
         setDataTitle("Yöpymiset")
         onArrivalsDataChange("yöpymiset lkm")
      }
   }

   return (
      <Row className="shadow-sm bg-white py-2 mb-3">
         <Col>
            <Row className="my-4">
               <Col className="align-items-center">
                  <span className="mr-1 h4 font-weight-bold">{city} {currentYear} – </span>
                  <i onClick={handleClick} className="fas fa-chevron-left"></i>
                  <span className="mr-1 h4 font-weight-bold"> {dataTitle} </span>
                  <i onClick={handleClick} className="fas fa-chevron-right"></i>
               </Col>
               <Col className="col-1 text-right">
                  <OverlayTrigger overlay={
                     <Popover>
                        <Popover.Content>
                           Kuukausikohtaiset yöpymiset/saapumiset ja majoitusmyynti
                        </Popover.Content>
                     </Popover>
                  }>
                     <i className="fas fa-info-circle bislenz-blue"></i>
                  </OverlayTrigger>
               </Col>
            </Row>
            {/* <Row className="my-1">
               <Col>
                  <ButtonGroup aria-label="Basic example">
                     <Button className="rounded-0 bg-bislenz-blue text-white">Yhteensä</Button>
                     <Button className="rounded-0">Julkiset</Button>
                     <Button className="rounded-0">Yksityiset</Button>
                  </ButtonGroup>
               </Col>
            </Row> */}
            <Row>
               <Col className="text-center">
                  {isLoading && <div className="position-absolute w-100 d-flex justify-content-center"><Spinner animation="border" /></div>}
                  {/* Recharts */}
                  {data.length === 0
                     ? <Spinner animation="border" />
                     : <LineGraphRecharts dataTitle={dataTitle} data={data} />
                  }
                  {/* VictoryCharts */}
                  {/* {data1.length === 0
                     ? ""
                     : <LineGraph arrivalsData={data1} accommodationData={data2} />
                  } */}
               </Col>
            </Row>
         </Col>
      </Row >
   )
}

export default GraafiContainer