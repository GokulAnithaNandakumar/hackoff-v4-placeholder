"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Link } from "react-scroll";
import "./Navbar.css";
import "./Hamburger.css";

const DevfolioButton = dynamic(() => import("../DevfolioBtn/DevfolioBtn"), { ssr: false });

const Navbar = (props) => {
  const { isMenuOpen, click} = props;
  const [isMobile, setIsMobile] = useState(false);
 

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsMobile(window.innerWidth <= 961);
    };
    if(window.innerWidth <= 768){
      document.body.style.overflowX= "hidden";
    }

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
          <li onClick={() =>click(!isMenuOpen)}>
            <button
              className={`hamburger hamburger--slider ${isMenuOpen ? "is-active" : ""}`}
              type="button"
            >
              <span className="hamburger-box icon">
                <span className="hamburger-inner"></span>
              </span>
            </button>
           
          </li>
        ) : (
          <>
            <li><Link to="hero" smooth={true} duration={500}>Home</Link></li>
            <li><Link to="abouthackoff" smooth={true} duration={500}>About</Link></li>
            <li><Link to="tracks" smooth={true} duration={500}>Tracks</Link></li>
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
