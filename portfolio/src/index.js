import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Route} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import Admin from "./components/admin"
import Dashboard from "./components/dashboard"




ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter>
     <Route exact path="/" component={App} />
     <Route exact path="/ahmedkanoun55016312admindashboard14771525" component={Admin} />
     <Route exact path="/admin/dashboard/Pok546jjf748e5f9lp89v78vs23sv25lm2az3d6glp6975d2541c2365dszft8978nuuej56489" component={Dashboard} />
   </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
