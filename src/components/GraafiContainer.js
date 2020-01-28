import React, { useState, useEffect } from 'react'
import { Col, Row, Popover, OverlayTrigger, Button, ButtonGroup, Spinner } from 'react-bootstrap'
import LineGraph from './LineGraph'
import axios from 'axios'

const GraafiContainer = () => {
   // Kuukausittaiset yöpymiset ja saapuneet asuinmaittain muuttujina Maa, Alue, Tiedot ja Kuukausi
   // Hakee alkuun kaikki alueet, kaiken maalaiset, yöpymiset lkm sekä kuukaudet vuosilta 1995 - 2019
   const [query, setQuery] = useState({
      query: [
         { code: "Alue", selection: { filter: "item", values: ["2_02_023_853"] } },
         { code: "Maa", selection: { filter: "item", values: ["SS"] } },
         { code: "Tiedot", selection: { filter: "item", values: ["yot",] } }
      ],
      response: { format: "json" }
   })
   const [metaData, setMetaData] = useState({})
   const [data, setData] = useState([])
   const [filteredData, setFilteredData] = useState([])
   const [startDate, setStartDate] = useState({ x: new Date() })
   const [endDate, setEndDate] = useState({ x: new Date() })
   const [filter, setFilters] = useState(["2_02_023_853", "Turku"])

   const handleDataChange = (data, filtersArr) => {
      let filteredData = [];
      let filters = filtersArr[0];
      // loop through fetched data
      data.forEach(dataObj => {
         let obj = {};
         if (dataObj.key.includes(filters)) {
            // convert date strings
            obj.x = new Date(dataObj.key[2].replace("M", "-") + "-1");
            obj.y = isNaN(parseInt(dataObj.values[0])) ? 0 : parseInt(dataObj.values[0]);
            filteredData.push(obj)
         }
      });
      console.log("Filtered data:\n", filteredData)
      setFilteredData(filteredData)
      setFilters(filtersArr)
      setStartDate(filteredData[filteredData.length - 13])
      setEndDate(filteredData[filteredData.length - 1]);
   }

   useEffect(() => {
      const getTableMetaData = (metaData) => {
         let meta = {};
         metaData.variables.forEach(variable => {
            // convert filter name to lower case 
            let code = variable.code.toLowerCase()
            meta[code] = [];
            for (let i = 0; i < variable.values.length; i++) {
               meta[code].push([variable.values[i], variable.valueTexts[i]])
            }
         });
         console.log("Table metadata:\n", meta)
         setMetaData(meta);
      }
      const getData = async () => {
         console.log("Sending query\n", query)
         let baseURL = "http://visitfinland.stat.fi/pxweb/api/v1/fi/VisitFinland";
         let statisctic = "Majoitustilastot/visitfinland_matk_pxt_116n.px";
         try {
            // GET-method returns metadata
            let tableMetaPromise = axios(`${baseURL}/${statisctic}`)
            // POST-method returns values
            let tablePromise = axios({
               method: 'post',
               url: `${baseURL}/${statisctic}`,
               data: query
            })
            let tableMeta = await tableMetaPromise;
            let table = await tablePromise;
            console.log("Fetched data:\n", table.data.data)
            setData(table.data.data)
            getTableMetaData(tableMeta.data)
            handleDataChange(table.data.data, filter)
         } catch (e) {
            console.log("Something went wrong\n", e)
         }
      }
      getData()

   }, [query]) // Fetch again only if query variable changes


   return (
      <Row className="shadow-sm bg-white py-2 mb-3">
         <Col>
            <Row>
               <Col className="align-items-center"><span className="mr-1 h4 font-weight-bold">Yöpymiset</span><i className="fas fa-chevron-down"></i></Col>
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
            <Row className="justify-content-center">
               {filteredData.length === 0 ?
                  <Spinner animation="border" />
                  :
                  <LineGraph data={filteredData} startDate={startDate} endDate={endDate} />
               }
            </Row>
         </Col>
      </Row>
   )
}

export default GraafiContainer