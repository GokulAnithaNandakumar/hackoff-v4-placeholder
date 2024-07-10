import React from "react";
import "./Hero.css";
import Navbar from "../Navbar/Navbar";
import Marquee from "react-fast-marquee";
import { FaStarOfLife } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="hero-main">
      <Navbar />
      <div className="hero-logo">
        <img src="images/logo-big.png" alt="" className="hero-logo-img" />
      </div>
      <div className="coming-soon-container">
        <div className="coming-soon">
          <Marquee autoFill={true} pauseOnHover={true} direction="right">
            <pre className="scroll-text">
              <FaStarOfLife className="star" /> COMING SOON <FaStarOfLife className="star" /> COMING SOON <FaStarOfLife className="star" /> COMING SOON <FaStarOfLife className="star" /> COMING SOON <FaStarOfLife className="star" /> COMING SOON <FaStarOfLife className="star" /> COMING SOON {""}
            </pre>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Hero;
