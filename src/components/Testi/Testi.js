// import React, { useState } from 'react';
// import axios from 'axios';
// import { VictoryLine, VictoryChart } from 'victory';
// // import Spinner from './Spinner/Spinner';

// const Testi = props => {

//     const [cityInput, setCityInput] = useState('');
//     const [values, setValues] = useState([]);
//     const [cityCode, setCityCode] = useState('');
//     const [years, setYears] = useState([]);

//     // eslint-disable-next-line
//     String.prototype.capitalize = function() {
//         return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
//     }

//     const inputChangedHandler = (event) => {
//         setCityInput(event.target.value);
//     };

//     const getData = () => {
//         console.log("Lähetetään uusi pyyntö");
//         setValues([]);
//         setYears([]);
//         const capitalizedCityInput = cityInput.capitalize();
//         setCityInput(capitalizedCityInput);
//         // Hankitaan "kaupunkikoodi"
//         // Tässä voidaan hakea muutakin tietoa taulukon rakenteesta, esim. tallentaa taulukon vuosiluvut arrayksi
//         // Tässä hankittu data sijoitetaan JSON-queryyn
//         // setLoading(true);
//         axios.get('http://visitfinland.stat.fi/PXWeb/api/v1/fi/VisitFinland/Majoitustilastot/visitfinland_matk_pxt_116t.px')
//         .then(response => {
//             // Kaupungin koodi
//             for (var i = 0; i < response.data.variables[0].valueTexts.length; i++) {
//                 console.log(response.data.variables[0].valueTexts[i]);
//                 if (response.data.variables[0].valueTexts[i].includes(cityInput)) { // Käyttäjän syöttämä kaupunki
//                     console.log("Mätsi löytyi");
//                     setCityCode(response.data.variables[0].values[i]);

//                     for (let i = 0; i < response.data.variables[2].values.length; i++) {
//                         setYears(oldYears => [...oldYears, response.data.variables[2].values[i]]);
//                     }

//                     break;
//                 }
//             }
//         }).then(response => {
//             console.log("Koodi kaupungille " + cityInput + ": " + cityCode);
//             const params = {
//                 "query": [
//                 {
//                 "code": "Alue",
//                 "selection": {
//                     "filter": "key",
//                     "values": [
//                     cityCode
//                     ]
//                 }
//                 },
//                 {
//                 "code": "Maa",
//                 "selection": {
//                     "filter": "item",
//                     "values": [
//                     "SS"
//                     ]
//                 }
//                 },
//                 {
//                 "code": "Vuosi",
//                 "selection": {
//                     "filter": "item",
//                     "values": years
//                 }
//                 },
//                 {
//                 "code": "Tiedot",
//                 "selection": {
//                     "filter": "item",
//                     "values": [
//                     "yot"
//                     ]
//                 }
//                 }
//             ],
//             "response": {
//                 "format": "json-stat"
//             }
//         }
            
//         axios.post('http://visitfinland.stat.fi/PXWeb/api/v1/fi/VisitFinland/Majoitustilastot/visitfinland_matk_pxt_116t.px', params)
//         .then(response => {
//             for (let i = 0; i < response.data.dataset.value.length; i++) {
//                 setValues(oldValues => [...oldValues, {year: years[i], data: response.data.dataset.value[i]}]);
//             }
//             })
//         })
//     }

//         // const asd = values !== null ? values.map(val => {
//         //     return <li key={val.year}>{val.year}: {val.data}</li>
//         // }) : null;

//         return (
//             <div>
//                 <form onSubmit={(event) => {
//                     event.preventDefault();
//                 }
//                 }>
//                     <input type="text" value={cityInput} onChange={inputChangedHandler}/>
//                     <button onClick={getData}>Get data</button>
//                 </form>
//                 {/* {asd} */}
//                 <VictoryChart>
//                     <VictoryLine data={values} x="year" y="data"/>
//                 </VictoryChart>
//             </div>
//         );
// }

// export default Testi;