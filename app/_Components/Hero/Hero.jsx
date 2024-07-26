import React from "react";
import "./Hero.css";
import Navbar from "../Navbar/Navbar";
import logo from "../../../public/images/logo-big.png";

const Hero = () => {
  return (
    <div className="hero-main">
      <div className="sticknav">
      <Navbar />
      </div>
      <div className="hero-container">
        <div className="hero-logo">
          <img src="images/GamePad.png" alt="" />
        </div>
        <div className="hero-text-container">
          <h1>One of</h1>
          <h1> India's Biggest</h1>
          <h1 id="hack">Hackathons</h1>
          <div className="b-container">
            <div className="btn">
              <img src="./images/dot.svg" />
              <p>VIT Vellore</p>
            </div>
            <div className="date">
              <h4>4th-5th October 2024</h4>
            </div>
          </div>
          <div className="socials-container">
            <button className="social" key="facebook">
              <img src="images/facebook.svg" alt=""></img>
            </button>
            <button className="social" key="twitter">
              <img src="images/x.svg" alt=""></img>
            </button>
            <button className="social" key="linkedin">
              <img src="images/linkedin.svg" alt=""></img>
            </button>
            <button className="social" key="instagram">
              <img src="images/instagram.svg" alt=""></img>
            </button>
            <button className="social" key="mail">
              <img src="images/mail.svg" alt=""></img>
            </button>
          </div>

        </div>
      </div>

      <div className="coming-soon-container">
        <div className="coming-soon">
          <div className="coming-soon-text">
            {Array(50)
              .fill("HACKEMUP * HACKTHEFUTURE * HACKBYTEBYBYTE * ")
              .join("")}
          </div>
          <div className="coming-soon-text">
            {Array(50)
              .fill("HACKEMUP * HACKTHEFUTURE * HACKBYTEBYBYTE * ")
              .join("")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
