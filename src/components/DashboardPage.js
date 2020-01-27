import React from 'react'
import GraafiContainer from "./GraafiContainer"
import InfoContainer from "./InfoContainer"

const Header = () => {

   let infoContainerData = [
      { title: "Yöpymiset", content: "Yöpymiset tooltip", rudolf: 71400, airdna: 70200, all: 71000, change: 29},
      { title: "Yöpymishinta", content: "Yöpymishinta tooltip", rudolf: 71400, airdna: 70200, all: 71000, change: 29 },
      { title: "Viipymisaika", content: "Viipymisaika tooltip", rudolf: 71400, airdna: 70200, all: 71000, change: 29 },
      { title: "Käyttöaste", content: "Käyttöaste tooltip", rudolf: 71400, airdna: 70200, all: 71000, change: 29 },
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