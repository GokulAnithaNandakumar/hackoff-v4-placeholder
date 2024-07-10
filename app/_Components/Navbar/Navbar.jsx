import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <div className="navbar-logo-container">
          <img src="images/logo-small.png" alt="" />
        </div>
        <li><a>Home</a></li>
        <li><a>About</a></li>
        <li><a>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
