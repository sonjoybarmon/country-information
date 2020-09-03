import React from 'react';
import './App.css';
import Country from './conporents/Country/Country';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './conporents/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Details from './conporents/Details/Details';
import Home from './conporents/Home/Home';
import NotFound from './conporents/NotFound/NotFound';

function App() {
  return (
    
      <Router>
          <Switch>
              <Route path="/home">
                  <Home> </Home>
              </Route>
              <Route path="/details/:countryDetails">
                  <Header> </Header>
                  <Details> </Details>
              </Route>
              <Route path="/country">
                    <Home> </Home>
              </Route>
              <Route exact path="/">
                  <Home></Home>
              </Route>
              <Route path="*">
                  <Header> </Header>
                  <NotFound/>
              </Route>
          </Switch>
          
      </Router>

    
  );
}

export default App;
