import React, { useEffect } from 'react';
import './aboutto.css';
import lottie from 'lottie-web';

const Aboutto = () => {
  useEffect(() => {
    console.log("Initializing Lottie Animation...");
    const animation = lottie.loadAnimation({
      container: document.getElementById('aboutto-lottie-animation'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      // Use the raw GitHub link to fetch the JSON file
      path: 'https://raw.githubusercontent.com/GokulAnithaNandakumar/lottie-host/main/Illustration.json',
    });

    if (animation) {
      console.log("Lottie animation loaded successfully.");
    } else {
      console.error("Failed to load Lottie animation.");
    }

    return () => {
      animation.destroy();
    };
  }, []);

  return (
    <div className="aboutto-container">
      <h1 className="aboutto-title">ABOUT HACKOFF</h1>
      <div className="aboutto-grid">
        <div className="aboutto-spacer-left"></div> {/* Left empty space */}
        <div className="aboutto-content">
          <p>
            Hackoff is a global 48-hour hackathon where participants build innovative projects in areas like Data Science, AI, Robotics, IoT, AR/VR, and Blockchain.<br/><br/>
            Having had over 3,500 participants from 15+ countries, expert mentors, workshops, and exciting prizes, Hackoff is an unmissable event for tech enthusiasts.<br/><br/>
            Collaborated with leading organizations to deliver a world-class hackathon experience in previous editions.<br/><br/>
            Engage in non-stop learning, ideating, problem-solving, and building with our expert tech team. Innovate in Data Science, AI, Robotics, IoT, AR/VR, Blockchain, and more.<br/><br/>
            Win fantastic prizes and goodies.<br/><br/>
            Be part of an unforgettable hacking journey!
          </p>
        </div>
        <div className="aboutto-animation">
          <div id="aboutto-lottie-animation"></div>
        </div>
        <div className="aboutto-spacer-right"></div> {/* Right empty space */}
      </div>
    </div>
  );
};

export default Aboutto;
