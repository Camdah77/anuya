import React from "react";
import Hero from "./hero";
import Flipcard from "./flipcards";
import ContactForm from "./contact";

function Home() {
  return (
    <div className="start">
      <Hero />
      <div className="app-heading">Welcome to a colorful world!</div>
      <Flipcard />
      <div className="app-heading">Get in contact!</div>
      <ContactForm />
    </div>
  );
}

export default Home;
