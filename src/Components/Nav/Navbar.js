import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from '../../Assets/Logo.png'
import "../../Style/Navbar.css";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  // Assigning Location
  const location = useLocation();
  
  const { pathname } = location

  const splitLocation = pathname.split("/");
  return (
    <header>
      <nav className="navbar">
        <div>
          <img src={logo} className="logo"/>
        </div>
        <ul className={isMobile ? "nav-links-mobile" : "links"} onClick={() => setIsMobile(false)}>
        <li className={splitLocation[1] === "" ? "active" : ""}>
          <NavLink to="/"  className="home">Home</NavLink>
          </li>
          <li className={splitLocation[1] === "about" ? "active" : ""}>
          <NavLink to="/about"  className="about">About</NavLink>
          </li>
          <li className={splitLocation[1] === "menu" ? "active" : ""}>
          <NavLink to="/menu"  className="menu">Menu</NavLink>
          </li>
          <li className={splitLocation[1] === "contact" ? "active" : ""}>
          <NavLink to="/contact"  className="contact">Contact</NavLink>
          </li>
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
