import React, { Component } from 'react'
import GraafiContainer from "./GraafiContainer"
import InfoContainer from "./InfoContainer"
import { Form, FormControl, Button, Row } from 'react-bootstrap';
import { getArrivalsData, getAccommodationData, mergeDataArrays, getCodesArray } from "../rudolf/rudolf";
import Autosuggest from 'react-autosuggest';

// Get rudolf areas
const areas = getCodesArray("alue")

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
   const inputValue = value.trim().toLowerCase();
   const inputLength = inputValue.length;

   return inputLength === 0 ? [] : areas.filter(area =>
      area.toLowerCase().slice(0, inputLength) === inputValue
   );
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
   <div>
      {suggestion}
   </div>
);


let infoContainerData = [
   { title: "Yöpymiset", content: "Vuoden yöpymiset yhteensä (lkm).", rudolf: 71400, airdna: 70200, all: 71000, change: 29 },
   { title: "Yöpymishinta", content: "Vuoden keskimääräinen yöpymishinta.", rudolf: 84, airdna: 64, all: 64.50, change: 4 },
   { title: "Viipymisaika", content: "Vuoden keskimääräinen viipymisaika.", rudolf: 2, airdna: 3, all: 2.5, change: 12 },
   { title: "Käyttöaste", content: "Vuoden keskimääräinen käyttöaste.", rudolf: 71400, airdna: 70200, all: 71000, change: 5 },
   { title: "Yöpymiset maittain", content: "Yöpymiset maittain" },
]

export default class DashboardPage extends Component {

   state = {
      isLoading: false,
      currentYear: 2019,
      currentCity: "turku",
      currentArrivalsCountry: "yhteensä",
      currentArrivalsData: "yöpymiset lkm",
      currentAccommodationData: "majoitusmyynti eur",
      // Rudolf query-strings
      arrivalsQuery: ["turku", "yhteensä", 2019, "yöpymiset lkm"],
      accommodationQuery: ["turku", 2019, "majoitusmyynti eur"],
      // For Recharts
      data: [],
      // For VictoryCharts
      // data1: [],
      // data2: [],
      value: '',
      suggestions: []
   }

   componentDidMount = async () => {
      let mergedData = mergeDataArrays(await getArrivalsData(...this.state.arrivalsQuery), await getAccommodationData(...this.state.accommodationQuery))
      // let arrivalsData = await getArrivalsData(...this.state.arrivalsQuery);
      // let accommodationData = await getAccommodationData(...this.state.accommodationQuery)
      this.setState({
         // For Rehcharts
         data: mergedData,
         // For VictoryCharts
         // data1: arrivalsData,
         // data2: accommodationData,
      })
   }

   componentDidUpdate = async (prevProps, prevState) => {
      if (prevState.arrivalsQuery !== this.state.arrivalsQuery || prevState.accommodationQuery !== this.state.accommodationQuery) {
         // let arrivalsData = await getArrivalsData(...this.state.arrivalsQuery);
         // let accommodationData = await getAccommodationData(...this.state.accommodationQuery)
         this.setState({
            isLoading: true
         })
         let mergedData = mergeDataArrays(await getArrivalsData(...this.state.arrivalsQuery), await getAccommodationData(...this.state.accommodationQuery))
         this.setState({
            // For Rehcharts
            data: mergedData,
            // For VictoryChart
            // data1: arrivalsData,
            // data2: accommodationData,
            isLoading: false
         })
      }
   }

   onSuggestionChange = (event, { newValue }) => {
      this.setState({
         value: newValue,
      });
   };

   // Autosuggest will call this function every time you need to update suggestions.
   // You already implemented this logic above, so just use it.
   onSuggestionsFetchRequested = ({ value }) => {
      this.setState({
         suggestions: getSuggestions(value)
      });
   };

   // Autosuggest will call this function every time you need to clear suggestions.
   onSuggestionsClearRequested = () => {
      this.setState({
         suggestions: [],
         currentCity: this.state.value,
         arrivalsQuery: [this.state.value, this.state.currentArrivalsCountry, this.state.currentYear, this.state.currentArrivalsData],
         accommodationQuery: [this.state.value, this.state.currentYear, this.state.currentAccommodationData],
      });
   };

   onYearChange = (newYear) => {
      if (newYear >= 1995 && newYear <= new Date().getFullYear()) {
         this.setState({
            currentYear: newYear,
            arrivalsQuery: [this.state.currentCity, this.state.currentArrivalsCountry, newYear, this.state.currentArrivalsData],
            accommodationQuery: ["turku", newYear, this.state.currentAccommodationData],
            isLoading: true
         })
      }
   }

   onArrivalsDataChange = (data) => {
      this.setState({
         arrivalsQuery: [this.state.currentCity, this.state.currentArrivalsCountry, this.state.currentYear, data],
      })
   }

   render() {

      const { value, suggestions } = this.state;

      // Autosuggest will pass through all these props to the input.
      const inputProps = {
         placeholder: 'Hae kaupunki',
         value,
         onChange: this.onSuggestionChange
      };

      return (
         <>
            <Row className="my-2">
               <Autosuggest
                  suggestions={suggestions}
                  onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                  onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                  getSuggestionValue={getSuggestionValue}
                  renderSuggestion={renderSuggestion}
                  inputProps={inputProps}
               />
            </Row>
            <GraafiContainer
               currentYear={this.state.currentYear}
               currentCity={this.state.currentCity}
               currentArrivalsData={this.state.currentArrivalsData}
               onArrivalsDataChange={this.onArrivalsDataChange}
               isLoading={this.state.isLoading}
               // For Recharts
               data={this.state.data}
            // For VictoryChart
            // data1={this.state.data1}
            // data2={this.state.data2}
            />
            <InfoContainer
               infoContainerData={infoContainerData}
               currentYear={this.state.currentYear}
               onYearChange={this.onYearChange}
            />
         </>
      )
   }
}
