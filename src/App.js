import React from 'react';
import './App.css';
import Navbar from "./Container/Navbar";
import Container from './Container/Container';
import Details from "./Container/Details";
import Data from "./Container/Data"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Switch } from "react-router-dom";

function App() {
  var num = "/";
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path={num} component={Container} />
        <Route path="/detail" component={Details} />
      </Switch>
    </Router>
  );
}

export default App;
