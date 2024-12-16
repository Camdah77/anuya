import React from 'react';
import { NavLink } from 'react-router-dom';
import Popup from 'reactjs-popup';
import "../styles/navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'reactjs-popup/dist/index.css'; // Ensure the popup styles are imported

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          {/* Popup for Gallery */}
          <Popup
            trigger={<button className="popup-trigger">Gallery</button>}
            position="bottom right" // Appear below and to the right
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

        <li>
        {/* Popup for Make Art */}
        <Popup
            trigger={<button className="popup-trigger">Make Art</button>}
            position="bottom right" // Appear below and to the right
            closeOnDocumentClick
          >
            <div className="popup-content">
              <NavLink to="/classonline">Online Class</NavLink>
              <NavLink to="/classirl">Live Class</NavLink>
             </div>
          </Popup>
        </li>

        <li>
        {/* Popup for More Info */}
        <Popup
            trigger={<button className="popup-trigger">Read more</button>}
            position="bottom right" // Appear below and to the right
            closeOnDocumentClick
          >
            <div className="popup-content">
              <NavLink to="/camilla">About Camilla </NavLink>
              <NavLink to="/exhib">Exhibitions</NavLink>
              <NavLink to="/faq">F.A.Q</NavLink>
             </div>
          </Popup>
        </li>
        <li>
          <NavLink to="/readmore">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
