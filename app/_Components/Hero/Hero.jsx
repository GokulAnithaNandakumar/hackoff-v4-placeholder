import React from "react";
import "./Hero.css";
import Navbar from "../Navbar/Navbar";
import logo from "../../../public/images/logo-big.png";


const Hero = () => {
  return (
    <div className="hero-main">
      <Navbar />
      <div className="hero-logo">
        <img src="images/logo-big.png" alt="" className="hero-logo-img" />
      </div>
      <div className="coming-soon-container">
        <div className="coming-soon">
          <div className="coming-soon-text">
            {Array(50).fill("HACKEMUP * HACKTHEFUTURE * HACKBYTEBYBYTE * ").join("")}
          </div>
          <div className="coming-soon-text">
            {Array(50).fill("HACKEMUP * HACKTHEFUTURE * HACKBYTEBYBYTE * ").join("")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
