import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header"; // Default export
import Footer from "./components/footer"; // Default export

import Home from "./components/home";
import Camilla from "./components/camilla";
import Gallery from "./components/gallery";
import Exhib from "./components/exhib";


function App() {
  return (
    <>
      <Header />
      <main>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/camilla" element={<Camilla />} />
    <Route path="/gallery" element={<Gallery />} />
    <Route path="/exhib" element={<Exhib />} />
  </Routes>
</main>
      <Footer />
    </>
  );
}

export default App;
