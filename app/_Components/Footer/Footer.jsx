"use client";
import React, { useRef, useEffect } from "react";
import "./Footer.css";
import lottie from "lottie-web";

const Footer = () => {
  const lottieRef = useRef(null);

  useEffect(() => {
    // Load '4.0' Lottie animation
    let lottieAnimation;
    if (lottieRef.current) {
      lottieAnimation = lottie.loadAnimation({
        container: lottieRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "https://raw.githubusercontent.com/GokulAnithaNandakumar/lottie-host/main/4.0.json",
      });
    }

    // Cleanup function to prevent duplicate animations
    return () => {
      if (lottieAnimation) {
        lottieAnimation.destroy();
      }
    };
  }, []);

  return (
    <div id="footer">
      <div className="foot">
        <div className="cont1">
          <div className="con1">
            <div className="title-container">
              <h1>HACKOFF</h1>
              <div ref={lottieRef} className="lottie-animation-4-0"></div>
            </div>
          </div>
        </div>
        <div className="cont2">
          <div className="con2">
            <div className="f1">
              <div className="sec1">
                <div className="text1">
                  <p>A FLAGSHIP HACKATHON BY:</p>
                </div>
                <div className="img1">
                  <img src="./images/iet-logo.png" height="100rem" alt="IET Logo" />
                </div>
              </div>
              <a href="https://www.ietvit.co/" target="_blank" rel="noopener noreferrer">
                <div className="link">
                  <h6>GO TO WEBSITE</h6>
                  <div className="imgBox">
                    <svg width="24" height="35" viewBox="0 0 24 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.48828 22.6963L6.61767 23.8257L17.9116 12.5318L16.7822 11.4023L5.48828 22.6963Z" fill="#0C0C0C" />
                      <path d="M16.3711 11.3389V23.3179H17.9683V11.3389H16.3711Z" fill="#0C0C0C" />
                      <path d="M5.99023 11.3398V12.937H17.9693V11.3398H5.99023Z" fill="#0C0C0C" />
                    </svg>
                  </div>
                </div>
              </a>
            </div>
            <div className="f2">
              <div className="menu">
                <p style={{ color: "#C6F806" }}>[MENU]</p>
                <h3 className="h3Footer">ABOUT SECTION</h3>
                <h3 className="h3Footer">TIMELINE</h3>
                <h3 className="h3Footer">TRACKS</h3>
                <h3 className="h3Footer">SPEAKER</h3>
                <h3 className="h3Footer">SPONSORS</h3>
                <h3 className="h3Footer">FAQ</h3>
              </div>
            </div>
            <div className="f3">
              <div className="contact">
                <p style={{ color: "#C6F806" }}>[CONTACT]</p>
                <h3 className="h3Footer">EMAIL</h3>
                <h3 className="h3Footer">LINKEDIN</h3>
                <h3 className="h3Footer">INSTAGRAM</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="cont3">
          <div className="left">
            <p>The Institution of Engineering and Technology</p>
          </div>
          <div className="right">
            <div className="a">
              <p>Vellore Institute of Technology</p>
            </div>
            <div className="b">
              <p>IET-VIT</p>
              <img src="./images/dot.svg" alt="dot" />
              <p>2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
