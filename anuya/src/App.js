import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header"; // Default export
import Footer from "./components/footer"; // Default export

import Home from "./components/home";
import Camilla from "./components/camilla";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} /> {/* Landing Page */}
        <Route path="/camilla" element={<Camilla />} /> {/* Camilla Page */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
