import React from "react";
import "./Tracks.css";

const Tracks = () => {
  return (
    <div className="tracks-container">
      <h1 className="tracks-title">TRACKS</h1>
      <p className="tracks-descr">
        Discover the perfect track to showcase your skills and creativity during
        hackathon.
      </p>
      <div className="tracks-grid">
        <div className="empty-space"></div> {/* Left empty space */}
        <div className="tracks-item-container">
          <div className="track-item t1">
            <img
              src="./images/Pasted Graphic 1.png"
              alt="App Dev"
              className="track-image"
            />
            <h2 className="track-title">App Dev</h2>
            <p className="track-description">
              Design and build creative mobile or desktop applications, enhancing user experience with intuitive interfaces.
            </p>
          </div>
          <div className="track-item t2">
            <img
              src="./images/Pasted Graphic 2.png"
              alt="AI/ML"
              className="track-image"
            />
            <h2 className="track-title">AI/ML</h2>
            <p className="track-description">
              Develop intelligent systems that learn, predict, and automate tasks using advanced algorithms and data analysis.
            </p>
          </div>
          <div className="track-item t3">
            <img
              src="./images/Pasted Graphic 3.png"
              alt="AR/VR & Game Dev"
              className="track-image"
            />
            <h2 className="track-title">AR/VR & Game Dev</h2>
            <p className="track-description">
              Create immersive experiences or games that blend reality and virtual worlds with innovative storytelling.
            </p>
          </div>
          <div className="track-item t4">
            <img
              src="./images/Pasted Graphic 4.png"
              alt="Web3 & Blockchain"
              className="track-image"
            />
            <h2 className="track-title">Web3 & Blockchain</h2>
            <p className="track-description">
              Explore decentralized apps, smart contracts, or secure, transparent systems using blockchain and Web3 technologies.
            </p>
          </div>
          <div className="track-item t5">
            <img
              src="./images/Pasted Graphic 5.png"
              alt="IOT"
              className="track-image"
            />
            <h2 className="track-title">IOT</h2>
            <p className="track-description">
              Connect and control devices, creating smart environments through innovative Internet of Things solutions.
            </p>
          </div>
          <div className="track-item t6">
            <img
              src="./images/Pasted Graphic 6.png"
              alt="Open Innovation"
              className="track-image"
            />
            <h2 className="track-title">Open Innovation</h2>
            <p className="track-description">
              Unleash creativity to solve any challenge, pushing boundaries and exploring new ideas without limits.
            </p>
          </div>
        </div>
        <div className="empty-space2"></div> {/* Right empty space */}
      </div>
    </div>
  );
};

export default Tracks;
