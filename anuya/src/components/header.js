import React from 'react';
import Popup from 'reactjs-popup';
import logo from "../images/logo/Anuyalogo.png";
import  {NavLink} from 'react-router-dom';
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

          {/* Originals Popup */}
          <li>
            <Popup
              trigger={<button className="popup-trigger">Original Artwork</button>}
              position="bottom right"
              closeOnDocumentClick
            >
              <div className="popup-content">
                <NavLink to="/original">All original Artwork</NavLink>
                <NavLink to="/forsale">Available Originals</NavLink>
                <NavLink to="/soldart">Sold Art</NavLink>
                <NavLink to="/exhib">Exhibistions</NavLink>  
              </div>
            </Popup>
          </li>

         {/* Fine Art Prints */}
          <li>
            <Popup
              trigger={<button className="popup-trigger">Fine Art Prints</button>}
              position="bottom right"
              closeOnDocumentClick
            >
         <div className="popup-content">
          <NavLink to="/printstudio">Printstudio</NavLink>
                <NavLink to="/nft">Available Fine Art Prints</NavLink>
                </div>
            </Popup>
          </li>

  {/* Home Popup */}
  <li>
            <Popup
              trigger={<button className="popup-trigger">Home decor</button>}
              position="bottom right"
              closeOnDocumentClick
            >
              <div className="popup-content">
                <NavLink to="/interior">Coaster & Pillows</NavLink>
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
                <NavLink to="/shipping">Shipping</NavLink>
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
