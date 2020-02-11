import React, { Component } from 'react'
import GraafiContainer from "./GraafiContainer"
import InfoContainer from "./InfoContainer"
import { getArrivalsData, getAccommodationData, mergeDataArrays } from "../rudolf/rudolf"

let infoContainerData = [
   { title: "Yöpymiset", content: "Vuoden yöpymiset yhteensä (lkm).", rudolf: 71400, airdna: 70200, all: 71000, change: 29 },
   { title: "Yöpymishinta", content: "Vuoden keskimääräinen yöpymishinta.", rudolf: 84, airdna: 64, all: 64.50, change: 4 },
   { title: "Viipymisaika", content: "Vuoden keskimääräinen viipymisaika.", rudolf: 2, airdna: 3, all: 2.5, change: 12 },
   { title: "Käyttöaste", content: "Vuoden keskimääräinen käyttöaste.", rudolf: 71400, airdna: 70200, all: 71000, change: 5 },
   { title: "Yöpymiset maittain", content: "Yöpymiset maittain tooltip" },
]

export default class DashboardPage extends Component {

   state = {
      arrivalsQuery: ["turku", "yhteensä", ["2019M01", "2019M02", "2019M03", "2019M04", "2019M05", "2019M06", "2019M07", "2019M08", "2019M09", "2019M10", "2019M11", "2019M12"], "yöpymiset lkm"],
      arrivalsData: [],
      accommodationQuery: ["turku", ["2019M01", "2019M02", "2019M03", "2019M04", "2019M05", "2019M06", "2019M07", "2019M08", "2019M09", "2019M10", "2019M11", "2019M12"], "majoitusmyynti eur"],
      accommodationData: [],
      data: []
   }

   componentDidMount = async () => {
      let mergedData = mergeDataArrays(await getArrivalsData(...this.state.arrivalsQuery), await getAccommodationData(...this.state.accommodationQuery))
      this.setState({
         data: mergedData
         // accommodationData: await getAccommodationData(...this.state.accommodationQuery),
      })
   }

   render() {
      return (
         <>
            <GraafiContainer data={this.state.data} />
            <InfoContainer infoContainerData={infoContainerData} />
         </>
      )
   }
}
