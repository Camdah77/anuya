import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/logo/newtest.png";
import '../App.css';

function Header() {
    return (
        <header className="sticky-header">
  <div className="container-fluid">
    <div className="row align-items-center">
      <div className="logo col-sm-4">
        <Link to="/">
          <img src={logo} className="logotype" alt="logo Art by Anuya" />
        </Link>
      </div>
      <div className="navbar col-sm-8">
        {/* Navbar content */}
      </div>
    </div>
  </div>
</header>

    );
}

export default Header;
