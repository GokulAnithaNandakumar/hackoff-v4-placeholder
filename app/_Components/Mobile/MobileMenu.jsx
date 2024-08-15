// MobileMenu.js
"use client";
import React from "react";
import { Link } from "react-scroll";
import "./mobile.css";
import DevfolioButton from "../DevfolioBtn/DevfolioBtn";

const MobileMenu = (props) => {
  const { isMenuOpen, click } = props;
  const handleMenuItemClick = () => {
    click(!isMenuOpen);
  };
  if(isMenuOpen){
    document.body.style.overflowX = "hidden";
    document.body.style.overflowY = "hidden";
  }
  
  return (
    <div className="mobile-container" >
      <div className="sub-container" >
        
        <ul className="mobile-items" >
          <li>
            <Link to="hero" smooth={true} duration={500} onClick={handleMenuItemClick}>
              Home
            </Link>
          </li>
          <li >
            <Link to="abouthackoff" smooth={true} duration={500} onClick={handleMenuItemClick}>
              About
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} onClick={handleMenuItemClick}>
              Team
            </Link>
          </li>
          <li >
            <Link to="sponsors" smooth={true} duration={500}onClick={handleMenuItemClick}>
              Sponsors
            </Link>
          </li>
          <li >
            <Link to="faqs" smooth={true} duration={500} onClick={handleMenuItemClick}>
              FAQs
            </Link>
          </li>
          <li onClick={() => click(!isMenuOpen)}>
            <Link to="contact" smooth={true} duration={500} onClick={handleMenuItemClick}>
              Contact Us
            </Link>
          </li>
          <li>
            <DevfolioButton />
          </li>
        </ul>
      </div>
    </div>
   
  );
};

export default MobileMenu;
