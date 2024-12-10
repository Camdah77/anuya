import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/logo/newtest.png";
import NavBar from '../components/NavBar'; // Path and naming should match
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

        // Cleanup on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className="header" id="stickyheader">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="logo col-sm-4">
                        <Link to="/">
                            <img src={logo} className="logotype" alt="logo Art by Anuya" />
                        </Link>
                    </div>
                    <div className="navbar col-sm-8">
            <NavBar /> {/* Correctly rendered as a React component */}
            </div>
                                </div>
            </div>
        </header>
    );
}

export default Header;
