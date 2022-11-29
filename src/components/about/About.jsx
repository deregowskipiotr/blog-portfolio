import React from 'react';
import './About.css';
import Image1 from '../props/pic1.jpg';
import Image2 from "../props/pic2.jpg";
import Image3 from "../props/pic3.jpg";
import Image4 from "../props/pic4.jpg";
import Image5 from "../props/pic5.jpg";
import Image6 from "../props/pic6.jpg";
import Image7 from "../props/image2.jpg";
import Image8 from "../props/moet1.png";


function About () {
  
 

    return (
      <div id="about" className="container about-container">
        <span className="about-title">Nasze prace</span>

        <div className="second">
          <div className="box">
            <span className="span" style={{ "--i": 1 }}>
              <img src={Image1} alt="" />
            </span>
            <span className="span" style={{ "--i": 2 }}>
              <img src={Image2} alt="" />
            </span>
            <span className="span" style={{ "--i": 3 }}>
              <img src={Image3} alt="" />
            </span>
            <span className="span" style={{ "--i": 4 }}>
              <img src={Image4} alt="" />
            </span>
            <span className="span" style={{ "--i": 5 }}>
              <img src={Image5} alt="" />
            </span>
            <span className="span" style={{ "--i": 6 }}>
              <img src={Image6} alt="" />
            </span>
            <span className="span" style={{ "--i": 7 }}>
              <img src={Image7} alt="" />
            </span>
            <span className="span" style={{ "--i": 8 }}>
              <img src={Image8} alt="" />
            </span>
          </div>
        </div>
      </div>
    );
  
}

export default About;