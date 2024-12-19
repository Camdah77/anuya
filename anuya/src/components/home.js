import React from "react";
import Hero from "./hero";
import ContactForm from "./contact";
import "../styles/header.css";

function Home() {
  return (
    <div className="start">
      <Hero />
      <div className="section-spacing"></div>
      <div className="app-heading">Welcome to a colorful world!</div>
      <div className="app-heading">Get in contact!</div>
      <ContactForm />
    </div>
  );
}

export default Home;
