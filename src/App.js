import React from 'react';
//import Layout from './containers/Layout/Layout';
import GraafiContainer from "./components/GraafiContainer"
import InfoContainer from "./components/InfoContainer"
import { Container } from "react-bootstrap"

function App() {
  return (
    <>
      <Container>
        <GraafiContainer />
        <InfoContainer />
      </Container>
    </>
  );
}

export default App;
