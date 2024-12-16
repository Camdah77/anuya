import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Hero from "./components/hero";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="App">
       <Header />
       <Hero />
      </div>
  
  );
}

export default App;
