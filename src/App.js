import React from 'react';
import './App.css';
import Navbar from "./Container/Navbar";
import Container from './Container/Container';
import DetailCon from "./Container/DetailCon.js";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Switch } from "react-router-dom";
import MyProvider from './Container/MyProvider'

const App = () => {
  let currentUrl = window.location.href;
  let mealName = currentUrl.substring(29, currentUrl.length)
  let currentPath = `/detail/${mealName}`
  return (
    <MyProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Container} />
          <Route path={currentPath} component={DetailCon} />
        </Switch>
      </Router>
    </MyProvider>
  );
}

export default App;



