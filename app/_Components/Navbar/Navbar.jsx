"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Link } from "react-scroll";
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

    handleResize();
    window.addEventListener("resize", handleResize);
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
              className={`hamburger hamburger--slider ${isMenuOpen ? "is-active" : ""}`}
              type="button"
            >
              <span className="hamburger-box icon">
                <span className="hamburger-inner"></span>
              </span>
            </button>
            <ul className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
              <li><Link to="hero" smooth={true} duration={500}>Home</Link></li>
              <li><Link to="abouthackoff" smooth={true} duration={500}>About</Link></li>
              <li><Link to="team" smooth={true} duration={500}>Team</Link></li>
              <li><Link to="sponsors" smooth={true} duration={500}>Sponsors</Link></li>
              <li><Link to="faqs" smooth={true} duration={500}>FAQs</Link></li>
              <li><Link to="contact" smooth={true} duration={500}>Contact Us</Link></li>
            </ul>
          </li>
        ) : (
          <>
            <li><Link to="hero" smooth={true} duration={500}>Home</Link></li>
            <li><Link to="abouthackoff" smooth={true} duration={500}>About</Link></li>
            <li><Link to="about" smooth={true} duration={500}>Team</Link></li>
            <li><Link to="sponsors" smooth={true} duration={500}>Sponsors</Link></li>
            <li><Link to="faqs" smooth={true} duration={500}>FAQs</Link></li>
            <li><Link to="contact" smooth={true} duration={500}>Contact Us</Link></li>
            <li className="devfolio">
              <DevfolioButton />
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
