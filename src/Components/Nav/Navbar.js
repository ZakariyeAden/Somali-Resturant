import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../Assets/Logo.png'
import "../../Style/Navbar.css";
function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <header>
      <nav className="navbar">
        <div className="align">
          <img src={logo} className="logo"/>
        </div>
        <ul className={isMobile ? "nav-links-mobile" : "links"} onClick={() => setIsMobile(false)}>
          <Link to="/" className="home">Home</Link>
          <Link to="/about" className="about">About</Link>
          <Link to="/menu" className="menu">Menu</Link>
          <Link to="/contact" className="contact">Contact</Link>
        </ul>
        <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
