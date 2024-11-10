import React from "react";
import "./Sponsors.css";
const Sponsors = () => {
  return (
    <div className="spons-container">
      <h1>SPONSORS</h1>
      <div className="partners">
        <h2>PARTNERS</h2>
        <div className="part">
          <div className="space"></div>
          <div className="partner">
            <div className="partner1">
              <img
                className="devsponsor"
                src="./images/asglogo.png"
                alt="ASG LOGO"
              />
            </div>
            <div className="partner2">
               <img
                className="devsponsor2"
                src="./images/emtlogo.png"
                alt="ASG LOGO"
              />
            </div>
            <div className="partner3">
            <img
                className="devsponsor3"
                src="./images/quillaudits.png"
                alt="ASG LOGO"
              />
            </div>
          </div>
          <div className="space1"></div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
