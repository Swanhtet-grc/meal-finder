import React from 'react';
import './App.css';
import Navbar from "./Container/Navbar"
import Container from './Container/Container';
import Data from "./Container/Data";
import { BrowserRouter, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Container />
      <Data />
    </BrowserRouter>
  );
}

export default App;
