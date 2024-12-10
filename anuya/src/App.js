import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Hero from "./components/hero";
import Navbar from "./components/NavBar"; // Ensure Navbar is imported
import "bootstrap/dist/css/bootstrap.min.css";
import Gallery from "./components/gallery";
import Original from "./components/original";
import PrintStudio from "./components/printstudio";
import NFT from "./components/nft";
import HomeDecor from "./components/interior";
import SoldArt from "./components/soldart";
import Exhib from "./components/exhib";
import MakeArt from "./components/makeart";
import ClassOnline from "./components/classonline";
import ClassIRL from "./components/classirl";
import More from "./components/more";
import About from "./components/about";
import FAQ from "./components/faq";
import Contact from "./components/contact";
import NotFound from "./components/404"; // Renamed 404 for clarity

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/original" element={<Original />} />
          <Route path="/printstudio" element={<PrintStudio />} />
          <Route path="/nft" element={<NFT />} />
          <Route path="/homedecor" element={<HomeDecor />} />
          <Route path="/soldart" element={<SoldArt />} />
          <Route path="/exhib" element={<Exhib />} />
          <Route path="/makeart" element={<MakeArt />} />
          <Route path="/classonline" element={<ClassOnline />} />
          <Route path="/classirl" element={<ClassIRL />} />
          <Route path="/more" element={<More />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Hero />
      </div>
    </Router>
  );
}

export default App;
