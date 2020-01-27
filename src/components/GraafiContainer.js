import React, {useState, useEffect} from 'react'
import { Col, Row, Popover, OverlayTrigger } from 'react-bootstrap'
import LineGraph from './LineGraph'
import axios from 'axios'

const GraafiContainer = () => {
      // Kuukausittaiset yöpymiset ja saapuneet asuinmaittain muuttujina Maa, Alue, Tiedot ja Kuukausi
   // Hakee alkuun kaikki alueet, kaiken maalaiset, yöpymiset lkm sekä kuukaudet vuosilta 1995 - 2019
   const [query, setQuery] = useState({
      "query": [
         { "code": "Alue", "selection": { "filter": "item", "values": ["*_**_***_***"] } },
         {"code": "Maa", "selection": { "filter": "item", "values": ["SS"] }},
         {
            "code": "Tiedot", "selection": {
               "filter": "item", 
               "values": [
                  "yot",
                  "yop_mupro",
                  "saap",
                  "saap_mupro",
                  "viipyma"
               ]
            }
         }
      ],
      "response": { "format": "json" }
   })
   const [metaData, setMetaData] = useState({})
   const [data, setData] = useState([])
   const [filteredData, setFilteredData] = useState([])
   const [filter, setFilters] = useState(["*_**_***_***", "Koko Maa"])

   const handleDataChange = (data, filtersArr) => {
      let filteredData = [];
      let filters = filtersArr[0];
      // loop through fetched data
      data.forEach(dataObj => {
         let obj = {};
         if (dataObj.key.includes(filters)) {
            // convert date strings
            obj.key = new Date(dataObj.key[2].replace("M", "-") + "-1");
            obj.value = isNaN(parseInt(dataObj.values[0])) ? 0 : parseInt(dataObj.values[0]);
            filteredData.push(obj)
         }
      });
      console.log("Filtered data:\n", filteredData)
      setFilteredData(filteredData);
      setFilters(filtersArr)
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
         {filteredData.length > 0 &&
         <LineGraph data={filteredData} /> 
         }
        </Row>
   )
}

export default GraafiContainer