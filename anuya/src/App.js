import React from "react";
import "./App.css";
import Header from "./components/header";
import Hero from "./components/hero";
import Flipcard from "./components/flipcards";

import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="App">
       <Header />
       <Hero />
       <Flipcard />
      </div>
  
  );
}

export default App;
