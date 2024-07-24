"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "./Navbar.css";
import "./Hamburger.css";

const DevfolioButton = dynamic(() => import("../DevfolioBtn/DevfolioBtn"), { ssr: false });

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Set initial value on client side
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav>
      <ul className={`${isMobile ? "mobile" : ""}`}>
        <div className="navbar-logo-container">
          <img src="images/logo-small.png" alt="Logo" />
        </div>
        {isMobile ? (
          <li onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <button
              className={`hamburger hamburger--slider ${
                isMenuOpen ? "is-active" : ""
              }`}
              type="button"
            >
              <span className="hamburger-box icon">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </li>
        ) : (
          <>
            <div className="navigation">
              <li>Home</li>
              <li>About</li>
              <li>Timeline</li>
              <li>Sponsers</li>
              <li>FAQ's</li>
              <li>Contacts</li>
            </div>
            <DevfolioButton />
          </>
        )}
      </ul>
      {isMobile && isMenuOpen && (
        <ul className="navbar-menu">
          <li>Home</li>
          <li>About</li>
          <li>Timeline</li>
          <li>Sponsers</li>
          <li>FAQ's</li>
          <li>Contacts</li>
          <DevfolioButton />
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
