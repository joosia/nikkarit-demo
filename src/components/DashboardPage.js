import React from 'react'
import GraafiContainer from "./GraafiContainer"
import InfoContainer from "./InfoContainer"

const Header = () => {

   let infoContainerData = [
      { title: "Yöpymiset", content: "Vuoden yöpymiset yhteensä (lkm).", rudolf: 71400, airdna: 70200, all: 71000, change: 29},
      { title: "Yöpymishinta", content: "Vuoden keskimääräinen yöpymishinta.", rudolf: 84, airdna: 64, all: 64.50, change: 4 },
      { title: "Viipymisaika", content: "Vuoden keskimääräinen viipymisaika.", rudolf: 2, airdna: 3, all: 2.5, change: 12 },
      { title: "Käyttöaste", content: "Vuoden keskimääräinen käyttöaste.", rudolf: 71400, airdna: 70200, all: 71000, change: 5 },
      { title: "Yöpymiset maittain", content: "Yöpymiset maittain tooltip" },
  ]

   return (
      <>
         <GraafiContainer />
         <InfoContainer infoContainerData={infoContainerData} />
      </>
   )
}

export default Header;