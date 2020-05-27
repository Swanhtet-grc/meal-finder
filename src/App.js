import React from 'react';
import './App.css';
import Navbar from "./Container/Navbar";
import Container from './Container/Container';
import DetailCon from "./Container/DetailCon.js";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Switch } from "react-router-dom";


const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Container} />
        <Route path="/detail" component={DetailCon} />
      </Switch>
    </Router>
  );
}

export default App;



