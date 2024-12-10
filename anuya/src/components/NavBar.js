import React from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import "../App.css";

const Navbar = () => {
  return (
    <nav className="nav__container">
      <div className="nav__menu" id="nav-menu">
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink to="/" className="nav__link">Home</NavLink>
          </li>
          <li className="nav__item dropdown">
            <span className="nav__link">Gallery</span>
            <ul className="dropdown__menu">
              <li><NavLink to="/gallery" className="dropdown__link">Art for Sale</NavLink></li>
              <li><NavLink to="/original" className="dropdown__link">Originals</NavLink></li>
              <li><NavLink to="/printstudio" className="dropdown__link">Fine Art Prints</NavLink></li>
              <li><NavLink to="/nft" className="dropdown__link">Digital Art</NavLink></li>
              <li><NavLink to="/homedecor" className="dropdown__link">Interior</NavLink></li>
              <li><NavLink to="/soldart" className="dropdown__link">Sold Art</NavLink></li>
            </ul>
          </li>
          <li className="nav__item dropdown">
            <span className="nav__link">Make Art</span>
            <ul className="dropdown__menu">
              <li><NavLink to="/classonline" className="dropdown__link">Online Class</NavLink></li>
              <li><NavLink to="/classirl" className="dropdown__link">Make Art IRL</NavLink></li>
            </ul>
          </li>
          <li className="nav__item dropdown">
            <span className="nav__link">Read More</span>
            <ul className="dropdown__menu">
              <li><NavLink to="/about" className="dropdown__link">Camilla</NavLink></li>
              <li><NavLink to="/faq" className="dropdown__link">FAQ</NavLink></li>
              <li><NavLink to="/exhib" className="dropdown__link">Exhibitions</NavLink></li>
            </ul>
          </li>
          <li className="nav__item">
            <NavLink to="/contact" className="nav__link">Contact</NavLink>
          </li>
        </ul>
        <div className="nav__close" id="nav-close">
          <IoClose />
        </div>
      </div>
      <div className="nav__toggle" id="nav-toggle">
        <IoMenu />
      </div>
    </nav>
  );
};

export default Navbar;
