import React from "react";
import "../Sections/Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="navContainer">
        <img className="logoSVG" src="logo.png"></img>

        <div className="div-nav">
          <ul className="ul-nav">
            <li>Home</li>
            <li>About us</li>
            <li>Career</li>
          </ul>
        </div>
        <div className="navItems">
          <p className="navButton">Login</p>
          <button className="navButton">Register</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
