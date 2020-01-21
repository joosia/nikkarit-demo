import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Tapahtumat from './Tapahtumat';
import Error from './Error';
import Navi from './components/Navi';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


ReactDOM.render(
    <BrowserRouter>
        <Navi />
        <Switch>
            <Route path="/" component={App} exact={true} />
            <Route path="/tapahtumat" component={Tapahtumat} />
            <Route component={Error} />

        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
