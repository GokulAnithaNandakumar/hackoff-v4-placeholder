"use client"

import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <nav>
      <ul className={`${isMobile ? "mobile" : ""}`}>
        <div className="navbar-logo-container">
          <img src="images/logo-small.png" alt="" />
        </div>
        {isMobile ? (
          <li onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <img src="images/cross.png" alt="x" />
            ) : (
              <img src="images/hamburger.png" alt="=" />
            )}
          </li>
        ) : (
          <>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </>
        )}
      </ul>
      {isMobile && isMenuOpen && (
        <ul className="navbar-menu">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
