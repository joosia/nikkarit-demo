// Kuukausittaiset yöpymiset ja saapuneet asuinmaittain muuttujina Alue, Maa, Kuukausi ja Tiedot
// http://visitfinland.stat.fi/PXWeb/api/v1/fi/VisitFinland/Majoitustilastot/visitfinland_matk_pxt_116n.px
//
// Majoitusliikkeiden kuukausittainen kapasiteetti ja sen käyttö muuttujina Alue, Kuukausi ja Tiedot
// http://visitfinland.stat.fi/PXWeb/api/v1/fi/VisitFinland/Majoitustilastot/visitfinland_matk_pxt_116x.px
// const axios = require("axios"); // For HTTP-requests
// const fs = require("fs"); // For writing files
import axios from "axios";
import fs from "fs";
const codes = require("./rudolfCodes.json");

// GET metadata from arrivals and accommodation tables
const getRudolfMetaData = async () => {

   const baseURL = "http://visitfinland.stat.fi/pxweb/api/v1/fi/VisitFinland";
   const arrivalsURL = "Majoitustilastot/visitfinland_matk_pxt_116n.px";
   const accommodationURL = "Majoitustilastot/visitfinland_matk_pxt_116x.px";

   try {
      // GET-method returns metadata
      let [arrivalsPromise, accommodationPromise] = await Promise.all([
         axios(`${baseURL}/${arrivalsURL}`),
         axios(`${baseURL}/${accommodationURL}`)
      ]);
      const dataArray = [arrivalsPromise.data, accommodationPromise.data];
      //console.log("Metadata fetched\n")
      // Parse fetched data
      let meta = {};
      dataArray.forEach(table => {
         table.variables.forEach(variable => {
            let code = variable.code.toLowerCase()
            // Create new object if meta[code] doesn't already exist
            if (!meta[code]) { meta[code] = {} }
            for (let i = 0; i < variable.values.length; i++) {
               let key = variable.values[i];
               let val;
               /* Format values */
               switch (code) {
                  case "alue":
                     val = variable.valueTexts[i]
                        .replace(/[`~!@#$%^&*()_|+=?;:'",.<>0-9]/gi, '')
                        .toLowerCase()
                        .trim()
                     break;
                  case "kuukausi":
                     val = variable.valueTexts[i].replace(/[*]/gi, '')
                     break;
                  case "tiedot":
                     val = variable.valueTexts[i]
                        .replace(/[`~!@#$^&*()_|+=?;:'",.<>0-9]/gi, '')
                        .toLowerCase()
                     break;
                  case "maa":
                     val = variable.valueTexts[i]
                        .replace(/[`~!@#$%^&*()_|+=?;:'",.<>0-9]/gi, '')
                        .toLowerCase()
                     break;
                  default:
                     break;
               }
               meta[code][val] = key
            }
         });
      })
      return meta;
   } catch (e) {
      console.log("Something went wrong\n", e)
   }
}

const getArrivalsData = async (area, country, monthsArray, data) => {

   const baseURL = "http://visitfinland.stat.fi/pxweb/api/v1/fi/VisitFinland";
   const arrivalsURL = "Majoitustilastot/visitfinland_matk_pxt_116n.px";
   const query = {
      "query": [
         { "code": "Alue", "selection": { "filter": "item", "values": [codes["alue"][area]] } },
         { "code": "Maa", "selection": { "filter": "item", "values": [codes["maa"][country]] } },
         { "code": "Kuukausi", "selection": { "filter": "item", "values": [...monthsArray] } },
         { "code": "Tiedot", "selection": { "filter": "item", "values": [codes["tiedot"][data]] } },
      ],
      "response": { "format": "json" }
   }
   const parsedData = [];
   try {
      const promise = axios({
         method: 'post',
         url: `${baseURL}/${arrivalsURL}`,
         data: query
      })
      const response = await promise;
      // loop through fetched data
      // console.log(response.data.data)
      response.data.data.forEach(dataObj => {
         let obj = {};
         // convert date strings
         obj.x = new Date(dataObj.key[2].replace("M", "-") + "-1").toLocaleString('fi-FI', { month: 'short' });
         obj.yArrivals = isNaN(parseInt(dataObj.values[0])) ? 0 : parseInt(dataObj.values[0]);
         obj.amount = Math.floor(Math.random() * 5);
         parsedData.push(obj)
      });
      //console.log(parsedData)
      return parsedData
   } catch (e) {
      console.log("Something went wrong\n", e)
   }
}

const getAccommodationData = async (area, monthsArray, data) => {

   const baseURL = "http://visitfinland.stat.fi/pxweb/api/v1/fi/VisitFinland";
   const accommodationURL = "Majoitustilastot/visitfinland_matk_pxt_116x.px";
   const query = {
      "query": [
         { "code": "Alue", "selection": { "filter": "item", "values": [codes["alue"][area]] } },
         { "code": "Kuukausi", "selection": { "filter": "item", "values": [...monthsArray] } },
         { "code": "Tiedot", "selection": { "filter": "item", "values": [codes["tiedot"][data]] } },
      ],
      "response": { "format": "json" }
   }
   const parsedData = [];
   try {
      const promise = axios({
         method: 'post',
         url: `${baseURL}/${accommodationURL}`,
         data: query
      })
      const response = await promise
      //console.log(response.data.data)
      //loop through fetched data
      response.data.data.forEach(dataObj => {
         let obj = {};
         // convert date strings
         obj.x = new Date(dataObj.key[1].replace("M", "-") + "-1").toLocaleString('fi-FI', { month: 'short' });
         obj.yAccommodation = isNaN(parseInt(dataObj.values[0])) ? 0 : parseInt(dataObj.values[0]);
         obj.amount = Math.floor(Math.random() * 5);
         parsedData.push(obj)
      });
      //console.log(parsedData)
      return parsedData
   } catch (e) {
      console.log("Something went wrong\n", e)
   }
}

// getRudolfMetaData()
//    .then(result => {
//       const rudolfMetaData = JSON.stringify(result, null, 4);
//       fs.writeFile("./rudolfCodes.json", rudolfMetaData, (err) => {
//          if (err) {
//             console.error(err);
//             return;
//          };
//          console.log("File has been created");
//       });
//    })


// getArrivalsData("turku", "yhteensä", ["2019M01", "2019M02", "2019M03", "2019M04", "2019M05", "2019M06", "2019M07", "2019M08", "2019M09", "2019M10", "2019M11", "2019M12"], "yöpymiset lkm")

// getAccommodationData("turku", ["2019M01", "2019M02", "2019M03", "2019M04", "2019M05", "2019M06", "2019M07", "2019M08", "2019M09", "2019M10", "2019M11", "2019M12"], "majoitusmyynti eur")

const mergeDataArrays = (arr1, arr2) => {
   return arr1.map((item, i) => {
      if (item.id === arr2[i].id) {
         //merging two objects
         return Object.assign({}, item, arr2[i])
      }
   })
}

export { getArrivalsData, getAccommodationData, mergeDataArrays }