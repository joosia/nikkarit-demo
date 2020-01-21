import React from 'react';
//import Layout from './containers/Layout/Layout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from "./components/Header"
import DashboardPage from './components/DashboardPage';
import TapahtumatPage from './components/TapahtumatPage';
import ErrorPage from './components/ErrorPage';
import { Container } from "react-bootstrap"

function App() {
   return (
      <BrowserRouter>
         <Header />
         <Container>
            <Switch>
               <Route path="/" component={DashboardPage} exact={true} />
               <Route path="/tapahtumat" component={TapahtumatPage} />
               <Route component={ErrorPage} />
            </Switch>
         </Container>
      </BrowserRouter>
   );
}

export default App;
