import React from "react";
import "./Navbar.css";
import logo from "./assets/logo-small.png";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li className="navbar-logo-container">
          <img src={logo} alt="" />
        </li>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
