import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/logo/newtest.png";
import NavBar from '../components/NavBar';
import '../App.css';

function Header() {
  useEffect(() => {
    const header = document.getElementById("stickyheader");
    const sticky = header.offsetTop;

    const handleScroll = () => {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header" id="stickyheader">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-4 d-flex align-items-center">
            <Link to="/" className="d-flex align-items-center">
              <img src={logo} className="logotype" alt="logo Art by Anuya" />
            </Link>
          </div>
          <div className="col-8 text-end">
            <NavBar /> {/* Include the NavBar component */}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
