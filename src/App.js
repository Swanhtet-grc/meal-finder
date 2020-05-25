import React from 'react';
import './App.css';
import Navbar from "./Container/Navbar";
import Container from './Container/Container';
import Details from "./Container/Details";
import Data from "./Container/Data"
import { BrowserRouter, Link } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

function App() {
  var num = "/";
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path={num} component={Container} />
        <Route path="/details/beef" component={Details} />
      </Switch>
      <Data />
    </BrowserRouter>
  );
}

export default App;
