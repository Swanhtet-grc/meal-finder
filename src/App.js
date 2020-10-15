import React from 'react';
import './App.css';
import Navbar from "./Container/Navbar";
import Container from './Container/Container';
import DetailCon from "./Container/DetailCon.js";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Switch } from "react-router-dom";
import MyContext from './Container/MyProvider'
import MyProvider from './Container/MyProvider'
import SearchResult from './Container/SearchResult';

const App = () => {
  let currentUrl = window.location.href;
  let mealName = currentUrl.split("/")[4]
  let currentPath = `/detail/${mealName}`
  return (
    <MyProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Container} />
          <Route path={currentPath} component={DetailCon} />
          <Route path="/search/result" component={SearchResult} />
        </Switch>
      </Router>
    </MyProvider>
  );
}

export default App;



