import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Hero from "./components/hero";
import Navbar from "./components/NavBar"; // Ensure Navbar is imported
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="App">
       <Header />
      <Navbar />
     <Hero />
      </div>
  
  );
}

export default App;
