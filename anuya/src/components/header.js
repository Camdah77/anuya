import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/logo/Anuyalogo.png";
import NavBar from '../components/NavBar';
import '../App.css';

function Header() {
  return (
    <header className="header">
      {/* Logo Section */}
      <div className="logo_container">
        <Link to="/" className="logo">
          <img src={logo} alt="logo Art by Anuya" />
        </Link>
      </div>

      {/* Navigation Bar */}
      <NavBar />
    </header>
  );
}

export default Header;
