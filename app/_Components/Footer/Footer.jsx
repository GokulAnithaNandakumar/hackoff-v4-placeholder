import React from "react";
import "./Footer.css";
// import iet from "../../assets/ietlogo.png"
// import arrow from "../../assets/arrow.png"
// import dot from "../../assets/dot.svg"
// import iet from "../../../public/images/ietlogo.png"

const Footer = () => {
  return <div id="footer">
    <div className="foot">
      <div className="cont1">
        <div className="con1">
          <h1>HACKOFF</h1>
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
                <img src="./images/iet-logo.png" height="100rem" />
              </div>
            </div>
            <div className="link">
              <h6>GO TO WEBSITE</h6>
              <img src="./images/arrow.png"/>
            </div>
          </div>
          <div className="f2">
            <div className="menu">
              <p style={{color:"#C6F806"}}>[MENU]</p>
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
            <p style={{color:"#C6F806"}}>[CONTACT]</p>
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
          <div className="a"><p>Vellore Institute of Technology</p></div>
          <div className="b">
            <p>IET-VIT</p>
            <img src="./images/dot.svg" />
            <p>2024</p>
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default Footer;