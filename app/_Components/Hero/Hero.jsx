import React from "react";
import "./Hero.css";
import Navbar from "../Navbar/Navbar";
import {logo} from "./assets/logo-big.png";
import Marquee from "react-fast-marquee";

const Hero = () => {
  return (
    <div className="hero-main">
      <Navbar />
      <div className="hero-logo">
        <img src={logo} alt="" className="hero-logo-img" />
      </div>
      <div className="coming-soon-container">
        <div className="coming-soon">
          <Marquee autoFill={true} pauseOnHover={true} direction="right">
            <pre>
              COMING SOON * COMING SOON * COMING SOON * COMING SOON * COMING SOON * COMING SOON * COMING SOON * COMING SOON *{" "}
            </pre>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Hero;
