import React from 'react';
import Popup from 'reactjs-popup';
import { NavLink } from 'react-router-dom';  // Use NavLink for routing
import logo from "../images/logo/Anuyalogo.png";
import 'reactjs-popup/dist/index.css'; // Ensure the popup styles are imported
import "../styles/header.css";

const Header = () => {
  return (
    <header className="header">
      {/* Logo Section */}
      <div className="logo_container">
        <NavLink to="/" className="logo">
          <img src={logo} alt="logo Art by Anuya" />
        </NavLink>
      </div>

      {/* Navigation Section with Popups */}
      <nav className="navbar">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          {/* Gallery Popup */}
          <li>
            <Popup
              trigger={<button className="popup-trigger">Gallery</button>}
              position="bottom right"
              closeOnDocumentClick
            >
              <div className="popup-content">
                <NavLink to="/original">Original Art</NavLink>
                <NavLink to="/printstudio">Printstudio</NavLink>
                <NavLink to="/nft">Digital Art</NavLink>
                <NavLink to="/interior">Interior</NavLink>
                <NavLink to="/soldart">Sold Art</NavLink>
              </div>
            </Popup>
          </li>

          {/* Make Art Popup */}
          <li>
            <Popup
              trigger={<button className="popup-trigger">Make Art</button>}
              position="bottom right"
              closeOnDocumentClick
            >
              <div className="popup-content">
                <NavLink to="/classonline">Online Class</NavLink>
                <NavLink to="/classirl">Live Class</NavLink>
              </div>
            </Popup>
          </li>

          {/* More Info Popup */}
          <li>
            <Popup
              trigger={<button className="popup-trigger">Read more</button>}
              position="bottom right"
              closeOnDocumentClick
            >
              <div className="popup-content">
                <NavLink to="/camilla">About Camilla</NavLink>
                <NavLink to="/exhib">Exhibitions</NavLink>
                <NavLink to="/faq">F.A.Q</NavLink>
              </div>
            </Popup>
          </li>

          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
