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
                src="./images/devfoliobrandlogo.png"
                alt="DEVFOLIO LOGO"
              />
            </div>
            <div className="partner2"></div>
            <div className="partner2"></div>
          </div>
          <div className="space1"></div>
        </div>
      </div>

      <div className="sponsors">
        <h2> SPONSORS</h2>
        <div className="spons">
          <div className="space"></div>
          <div className="sponsor">
            <div className="sponsor1">
              <img src="./images/polygon.png" alt="POLYGON LOGO" />
            </div>
            <div className="sponsor2">
              <img src="./images/ethindia.png" alt="ETHINDIA LOGO" />
            </div>
            <div className="sponsor3">
              <img src="./images/fold.png" alt="FOLD LOGO" />
            </div>
            <div className="sponsor4"></div>
          </div>
          <div className="space2"></div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
