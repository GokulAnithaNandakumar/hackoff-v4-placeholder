import React from "react";
import "./Hero.css";
import Navbar from "../Navbar/Navbar";
import logo from "../../../public/images/logo-big.png";
import MobileMenu from "../Mobile/MobileMenu";
import { useState } from "react";

const Hero = () => {
  const svg = `<svg width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M35.9661 18.6362H2.26113M18.956 2.42896L19.2712 34.8434M9.37494 28.0904L28.8523 9.18196M29.0361 28.0904L9.19105 9.18196" stroke="#0C0C0C" stroke-width="4.04763" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
const [isMenuOpen, setIsMenuOpen] = useState(false);
  const svgString = Array(50)
    .fill(`HACKEMUP ${svg} HACKTHEFUTURE ${svg}  HACKBYTEBYBYTE ${svg}  `)
    .join("");
if(!isMenuOpen){
  document.body.style.overflow = "auto";
  document.body.style.overflowX = "hidden";
}
  return (
    <div className="hero-main">

      <div className="sticknav">
        <Navbar isMenuOpen={isMenuOpen} click={setIsMenuOpen}/>
      </div>
      <div className="menu-overlay">
      {isMenuOpen && <MobileMenu click={setIsMenuOpen} isMenuOpen={isMenuOpen}/>}
      </div>
       <div className="hero-container">
    
        <div className="hero-logo">
          <img src="images/IMG_7616-removebg.png" alt="" />
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
              <h4>11th-12th November</h4>
            </div>
          </div>
          <div className="socials-container">
           <a href="https://discord.gg/yVNGzx94nK" target="_blank"> <button className="social" key="facebook">
              <img src="images/facebook.svg" alt=""></img>
            </button></a>

          <a href="https://x.com/theietvit?lang=en" target="_blank"> <button className="social" key="twitter">
              <img src="images/x.svg" alt=""></img>
            </button></a> 

            <a href="https://www.linkedin.com/company/ietvit/?originalSubdomain=in" target="_blank"> <button className="social" key="linkedin">
              <img src="images/linkedin.svg" alt=""></img>
            </button></a>

           <a href="https://www.instagram.com/ietvit/" target="_blank"> <button className="social" key="instagram">
              <img src="images/instagram.svg" alt=""></img>
            </button></a>

           <a href="https://mail.google.com/mail/?view=cm&to=iet@vit.ac.in" target="_blank" > <button className="social" key="mail">
              <img src="images/mail.svg" alt=""></img>
            </button></a>
          </div>
        </div>
      </div>

      <div className="coming-soon-container">
        <div className="coming-soon">
          <div
            className="coming-soon-text"
            dangerouslySetInnerHTML={{ __html: svgString }}
          ></div>
          <div className="coming-soon-text"  dangerouslySetInnerHTML={{ __html: svgString }}>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
