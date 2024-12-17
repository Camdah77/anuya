import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/home";
import Camilla from "./components/camilla"; 

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Landing Page */}
        <Route path="/camilla" element={<Camilla />} /> {/* Camilla Page */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
