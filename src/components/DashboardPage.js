// import React, { Component } from "react";
// import GraafiContainer from "./GraafiContainer"
// import InfoContainer from "./InfoContainer"
// import PropTypes from "prop-types";
// import { Form, FormControl, Button } from 'react-bootstrap';

// export default class DashboardPage extends Component {
//   static propTypes = {
//     suggestions: PropTypes.instanceOf(Array)
//   };

//   static defaultProps = {
//     suggestions: ["KOKO MAA",
//     "SA PÄÄKAUPUNKISEUTU",
//     "AL Uusimaa 1 (vain Pääkaupunkiseutu)",
//     "....049 Espoo",
//     "....091 Helsinki",
//     "....092 Vantaa",
//     "SA RANNIKKO JA SAARISTO",
//     "AL Uusimaa 2 (ei Pääkaupunkiseutua)",
//     "....444 Lohja",
//     "....718 Raasepori",
//     "....078 Hanko",
//     "..SK Porvoon seutu",
//     "....638 Porvoo",
//     "AL Varsinais-Suomi",
//     "....734 Salo",
//     "....853 Turku",
//     "..SK Turunmaa",
//     "..SK Vakka-Suomi",
//     "AL Satakunta",
//     "..SK Rauman seutu",
//     "....684 Rauma",
//     "..SK Porin seutu",
//     "....609 Pori",
//     "..SK Pohjois-Satakunta",
//     "AL Kymenlaakso",
//     "....286 Kouvola",
//     "....285 Kotka",
//     "AL Etelä-Pohjanmaa",
//     "..SK Seinäjoen seutu",
//     "....233 Kauhava",
//     "....743 Seinäjoki",
//     "..SK Kuusiokunnat",
//     "AL Pohjanmaa",
//     "..SK Vaasan seutu",
//     "....905 Vaasa",
//     "....598 Pietarsaari",
//     "AL Keski-Pohjanmaa",
//     "..SK Kaustisen seutu",
//     "..SK Kokkolan seutu",
//     "AL Pohjois-Pohjanmaa (ei Kuusamoa)",
//     "..SK Oulun seutu",
//     "....564 Oulu",
//     "..SK Oulunkaari",
//     "....615 Pudasjärvi (Syöte)",
//     "..SK Raahen seutu",
//     "..SK Nivala-Haapajärvi",
//     "..SK Ylivieskan seutu",
//     "....208 Kalajoki",
//     "AL Ahvenanmaa",
//     "..SK Maarianhaminan seutu",
//     "....478 Maarianhamina",
//     "SA JÄRVI-SUOMI",
//     "AL Kanta-Häme",
//     "..SK Hämeenlinnan seutu",
//     "....109 Hämeenlinna",
//     "..SK Riihimäen seutu",
//     "..SK Forssan seutu",
//     "AL Pirkanmaa",
//     "..SK Tampereen seutu",
//     "....837 Tampere",
//     "..SK Ylä-Pirkanmaa",
//     "AL Päijät-Häme",
//     "..SK Lahden seutu",
//     "....111 Heinola",
//     "....398 Lahti",
//     "AL Etelä-Karjala",
//     "..SK Lappeenrannan seutu",
//     "....405 Lappeenranta",
//     "..SK Imatran seutu",
//     "....153 Imatra",
//     "AL Etelä-Savo",
//     "..SK Mikkelin seutu",
//     "....491 Mikkeli",
//     "....507 Mäntyharju",
//     "..SK Savonlinnan seutu",
//     "....740 Savonlinna",
//     "..SK Pieksämäen seutu",
//     "AL Pohjois-Savo",
//     "..SK Ylä-Savo",
//     "....140 Iisalmi",
//     "..SK Kuopion seutu",
//     "....297 Kuopio",
//     "....749 Siilinjärvi",
//     "..SK Varkauden seutu",
//     "AL Pohjois-Karjala",
//     "..SK Joensuun seutu",
//     "....167 Joensuu",
//     "..SK Pielisen Karjala",
//     "....422 Lieksa",
//     "AL Keski-Suomi",
//     "..SK Jyväskylän seutu",
//     "....179 Jyväskylä",
//     "....182 Jämsä",
//     "..SK Äänekosken seutu",
//     "..SK Saarijärvi-Viitasaari",
//     "AL Kainuu",
//     "..SK Kehys-Kainuu",
//     "..SK Kajaanin seutu",
//     "....205 Kajaani",
//     "....765 Sotkamo",
//     "SA LAPPI JA KUUSAMO",
//     "AL Kuusamo",
//     "....305 Kuusamo",
//     "AL Lappi",
//     "....698 Rovaniemi",
//     "..SK Kemi-Tornio",
//     "....240 Kemi",
//     "....851 Tornio",
//     "..SK Torniolaakso",
//     "..SK Itä-Lappi",
//     "....583 Pelkosenniemi",
//     "....732 Salla",
//     "..SK Tunturi-Lappi",
//     "....047 Enontekiö",
//     "....261 Kittilä (Levi)",
//     "....273 Kolari (Ylläs)",
//     "....498 Muonio",
//     "..SK Pohjois-Lappi",
//     "....148 Inari (Saariselkä)",
//     "....758 Sodankylä",
//     "Uusimaa (koko maakunta)",
//     "Pohjois-Pohjanmaa (koko maakunta)"]
//   };

//   constructor(props) {
//     super(props);

//     this.state = {
//       // The active selection's index
//       activeSuggestion: 0,
//       // The suggestions that match the user's input
//       filteredSuggestions: [],
//       // Whether or not the suggestion list is shown
//       showSuggestions: false,
//       // What the user has entered
//       userInput: ""
//     };
//   }

//   onChange = e => {
//     const { suggestions } = this.props;
//     const userInput = e.currentTarget.value;

//     // Filter our suggestions that don't contain the user's input
//     const filteredSuggestions = suggestions.filter(
//       suggestion =>
//         suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
//     );

//     this.setState({
//       activeSuggestion: 0,
//       filteredSuggestions,
//       showSuggestions: true,
//       userInput: e.currentTarget.value
//     });
//   };

//   onClick = e => {
//     this.setState({
//       activeSuggestion: 0,
//       filteredSuggestions: [],
//       showSuggestions: false,
//       userInput: e.currentTarget.innerText
//     });
//   };

//   onKeyDown = e => {

//     const { activeSuggestion, filteredSuggestions } = this.state;

//     // User pressed the enter key
//     if (e.keyCode === 13) {
//       e.preventDefault()
//       this.setState({
//         activeSuggestion: 0,
//         showSuggestions: false,
//         userInput: filteredSuggestions[activeSuggestion]
//       });
//     }
//     // User pressed the up arrow
//     else if (e.keyCode === 38) {
//       if (activeSuggestion === 0) {
//         return;
//       }

//       this.setState({ activeSuggestion: activeSuggestion - 1 });
//     }
//     // User pressed the down arrow
//     else if (e.keyCode === 40) {
//       if (activeSuggestion - 1 === filteredSuggestions.length) {
//         return;
//       }

//       this.setState({ activeSuggestion: activeSuggestion + 1 });
//     }
//   };

//   render() {
//    let infoContainerData = [
//       { title: "Yöpymiset", content: "Yöpymiset tooltip", rudolf: 71400, airdna: 70200, all: 71000, change: 29},
//       { title: "Yöpymishinta", content: "Yöpymishinta tooltip", rudolf: 71400, airdna: 70200, all: 71000, change: 29 },
//       { title: "Viipymisaika", content: "Viipymisaika tooltip", rudolf: 71400, airdna: 70200, all: 71000, change: 29 },
//       { title: "Käyttöaste", content: "Käyttöaste tooltip", rudolf: 71400, airdna: 70200, all: 71000, change: 29 },
//       { title: "Yöpymiset maittain", content: "Yöpymiset maittain tooltip" },
//   ]
//     const {
//       onChange,
//       onClick,
//       onKeyDown,
//       state: {
//         activeSuggestion,
//         filteredSuggestions,
//         showSuggestions,
//         userInput
//       }
//     } = this;

//     let suggestionsListComponent;

//     if (showSuggestions && userInput) {
//       if (filteredSuggestions.length) {
//         suggestionsListComponent = (
//           <ul className="suggestions">
//             {filteredSuggestions.map((suggestion, index) => {
//               let className;

//               // Flag the active suggestion with a class
//               if (index === activeSuggestion) {
//                 className = "suggestion-active";
//               }

//               return (
//                 <li className={className} key={suggestion} onClick={onClick}>
//                   {suggestion}
//                 </li>
//               );
//             })}
//           </ul>
//         );
//       } else {
//         suggestionsListComponent = (
//           <div className="no-suggestions">
//             <em>Etsimälläsi hakusanalla ei löydy tuloksia</em>
//           </div>
//         );
//       }
//     }

//     return (
//       <>

//          <Form inline>
//                      <FormControl variant="light" type="text" placeholder="Etsi kaupunki" className="mr-2" onChange={onChange}
//           onKeyDown={onKeyDown}
//           value={userInput}/>
//                      <Button variant="light" bg="light"><i className="fas fa-search"></i></Button>
//                   </Form>
//         {suggestionsListComponent}
//         <GraafiContainer />
//          <InfoContainer infoContainerData={infoContainerData} />
//       </>
//     );
//   }

//     let suggestionsListComponent;

//     if (showSuggestions && userInput) {
//       if (filteredSuggestions.length) {
//         suggestionsListComponent = (
//           <ul className="suggestions">
//             {filteredSuggestions.map((suggestion, index) => {
//               let className;

//               // Flag the active suggestion with a class
//               if (index === activeSuggestion) {
//                 className = "suggestion-active";
//               }

//               return (
//                 <li className={className} key={suggestion} onClick={onClick}>
//                   {suggestion}
//                 </li>
//               );
//             })}
//           </ul>
//         );
//       } else {
//         suggestionsListComponent = (
//           <div className="no-suggestions">
//             <em>Etsimälläsi hakusanalla ei löydy tuloksia</em>
//           </div>
//         );
//       }
//     }

import React, { Component } from 'react'
import GraafiContainer from "./GraafiContainer"
import InfoContainer from "./InfoContainer"
import { Form, FormControl, Button, Row } from 'react-bootstrap';
import { getArrivalsData, getAccommodationData, mergeDataArrays } from "../rudolf/rudolf"

let infoContainerData = [
   { title: "Yöpymiset", content: "Vuoden yöpymiset yhteensä (lkm).", rudolf: 71400, airdna: 70200, all: 71000, change: 29 },
   { title: "Yöpymishinta", content: "Vuoden keskimääräinen yöpymishinta.", rudolf: 84, airdna: 64, all: 64.50, change: 4 },
   { title: "Viipymisaika", content: "Vuoden keskimääräinen viipymisaika.", rudolf: 2, airdna: 3, all: 2.5, change: 12 },
   { title: "Käyttöaste", content: "Vuoden keskimääräinen käyttöaste.", rudolf: 71400, airdna: 70200, all: 71000, change: 5 },
   { title: "Yöpymiset maittain", content: "Yöpymiset maittain tooltip" },
]

export default class DashboardPage extends Component {

   static defaultProps = {
      suggestions: ["KOKO MAA",
         "SA PÄÄKAUPUNKISEUTU",
         "AL Uusimaa 1 (vain Pääkaupunkiseutu)",
         "....049 Espoo",
         "....091 Helsinki",
         "....092 Vantaa",
         "SA RANNIKKO JA SAARISTO",
         "AL Uusimaa 2 (ei Pääkaupunkiseutua)",
         "....444 Lohja",
         "....718 Raasepori",
         "....078 Hanko",
         "..SK Porvoon seutu",
         "....638 Porvoo",
         "AL Varsinais-Suomi",
         "....734 Salo",
         "....853 Turku",
         "..SK Turunmaa",
         "..SK Vakka-Suomi",
         "AL Satakunta",
         "..SK Rauman seutu",
         "....684 Rauma",
         "..SK Porin seutu",
         "....609 Pori",
         "..SK Pohjois-Satakunta",
         "AL Kymenlaakso",
         "....286 Kouvola",
         "....285 Kotka",
         "AL Etelä-Pohjanmaa",
         "..SK Seinäjoen seutu",
         "....233 Kauhava",
         "....743 Seinäjoki",
         "..SK Kuusiokunnat",
         "AL Pohjanmaa",
         "..SK Vaasan seutu",
         "....905 Vaasa",
         "....598 Pietarsaari",
         "AL Keski-Pohjanmaa",
         "..SK Kaustisen seutu",
         "..SK Kokkolan seutu",
         "AL Pohjois-Pohjanmaa (ei Kuusamoa)",
         "..SK Oulun seutu",
         "....564 Oulu",
         "..SK Oulunkaari",
         "....615 Pudasjärvi (Syöte)",
         "..SK Raahen seutu",
         "..SK Nivala-Haapajärvi",
         "..SK Ylivieskan seutu",
         "....208 Kalajoki",
         "AL Ahvenanmaa",
         "..SK Maarianhaminan seutu",
         "....478 Maarianhamina",
         "SA JÄRVI-SUOMI",
         "AL Kanta-Häme",
         "..SK Hämeenlinnan seutu",
         "....109 Hämeenlinna",
         "..SK Riihimäen seutu",
         "..SK Forssan seutu",
         "AL Pirkanmaa",
         "..SK Tampereen seutu",
         "....837 Tampere",
         "..SK Ylä-Pirkanmaa",
         "AL Päijät-Häme",
         "..SK Lahden seutu",
         "....111 Heinola",
         "....398 Lahti",
         "AL Etelä-Karjala",
         "..SK Lappeenrannan seutu",
         "....405 Lappeenranta",
         "..SK Imatran seutu",
         "....153 Imatra",
         "AL Etelä-Savo",
         "..SK Mikkelin seutu",
         "....491 Mikkeli",
         "....507 Mäntyharju",
         "..SK Savonlinnan seutu",
         "....740 Savonlinna",
         "..SK Pieksämäen seutu",
         "AL Pohjois-Savo",
         "..SK Ylä-Savo",
         "....140 Iisalmi",
         "..SK Kuopion seutu",
         "....297 Kuopio",
         "....749 Siilinjärvi",
         "..SK Varkauden seutu",
         "AL Pohjois-Karjala",
         "..SK Joensuun seutu",
         "....167 Joensuu",
         "..SK Pielisen Karjala",
         "....422 Lieksa",
         "AL Keski-Suomi",
         "..SK Jyväskylän seutu",
         "....179 Jyväskylä",
         "....182 Jämsä",
         "..SK Äänekosken seutu",
         "..SK Saarijärvi-Viitasaari",
         "AL Kainuu",
         "..SK Kehys-Kainuu",
         "..SK Kajaanin seutu",
         "....205 Kajaani",
         "....765 Sotkamo",
         "SA LAPPI JA KUUSAMO",
         "AL Kuusamo",
         "....305 Kuusamo",
         "AL Lappi",
         "....698 Rovaniemi",
         "..SK Kemi-Tornio",
         "....240 Kemi",
         "....851 Tornio",
         "..SK Torniolaakso",
         "..SK Itä-Lappi",
         "....583 Pelkosenniemi",
         "....732 Salla",
         "..SK Tunturi-Lappi",
         "....047 Enontekiö",
         "....261 Kittilä (Levi)",
         "....273 Kolari (Ylläs)",
         "....498 Muonio",
         "..SK Pohjois-Lappi",
         "....148 Inari (Saariselkä)",
         "....758 Sodankylä",
         "Uusimaa (koko maakunta)",
         "Pohjois-Pohjanmaa (koko maakunta)"]
   };

   state = {
      // Rudolf query-strings
      arrivalsQuery: ["turku", "yhteensä", ["2019M01", "2019M02", "2019M03", "2019M04", "2019M05", "2019M06", "2019M07", "2019M08", "2019M09", "2019M10", "2019M11", "2019M12"], "yöpymiset lkm"],
      accommodationQuery: ["turku", ["2019M01", "2019M02", "2019M03", "2019M04", "2019M05", "2019M06", "2019M07", "2019M08", "2019M09", "2019M10", "2019M11", "2019M12"], "majoitusmyynti eur"],
      // Variable for rudolfData
      data: [],
      data1: [],
      data2: [],
      // The active selection's index
      activeSuggestion: 0,
      // The suggestions that match the user's input
      filteredSuggestions: [],
      // Whether or not the suggestion list is shown
      showSuggestions: false,
      // What the user has entered
      userInput: ""
   }

   componentDidMount = async () => {
      let mergedData = mergeDataArrays(await getArrivalsData(...this.state.arrivalsQuery), await getAccommodationData(...this.state.accommodationQuery))
      let testdata1 = await getArrivalsData(...this.state.arrivalsQuery);
      let testdata2 = await getAccommodationData(...this.state.accommodationQuery)
      this.setState({
         data: mergedData,
         data1: testdata1,
         data2: testdata2,
      })
   }

   // componentDidUpdate = async () => {
   //    let mergedData = mergeDataArrays(await getArrivalsData(...this.state.arrivalsQuery), await getAccommodationData(...this.state.accommodationQuery))
   //    this.setState({
   //       data: mergedData
   //    })
   // }

   onClick = e => {
      this.setState({
         activeSuggestion: 0,
         filteredSuggestions: [],
         showSuggestions: false,
         userInput: e.currentTarget.innerText
      });
   };

   onKeyDown = e => {
      console.log("jee")
      const { activeSuggestion, filteredSuggestions } = this.state;

      // User pressed the enter key
      if (e.keyCode === 13) {
         e.preventDefault()
         this.setState({
            activeSuggestion: 0,
            showSuggestions: false,
            userInput: filteredSuggestions[activeSuggestion]
         });
      }
      // User pressed the up arrow
      else if (e.keyCode === 38) {
         if (activeSuggestion === 0) {
            return;
         }

         this.setState({ activeSuggestion: activeSuggestion - 1 });
      }
      // User pressed the down arrow
      else if (e.keyCode === 40) {
         if (activeSuggestion - 1 === filteredSuggestions.length) {
            return;
         }

         this.setState({ activeSuggestion: activeSuggestion + 1 });
      }
   };

   render() {

      return (
         <>
            <Row></Row>
            <Form inline>
               <FormControl variant="light" type="text" placeholder="Etsi kaupunki" className="mr-2" onChange={this.onChange}
                  onKeyDown={this.onKeyDown}
                  value={this.userInput} />
               <Button variant="light" bg="light"><i className="fas fa-search"></i></Button>
            </Form>
            {this.suggestionsListComponent}
            <GraafiContainer data={this.state.data} data1={this.state.data1} data2={this.state.data2} />
            <InfoContainer infoContainerData={infoContainerData} />
         </>
      )
   }
}
