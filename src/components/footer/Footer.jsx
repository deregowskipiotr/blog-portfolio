import React from 'react';
import { BsMouse } from 'react-icons/bs';
import './Footer.css';



const Footer = () => {
  return (
    <div id="footer" className="container footer-container">
      <span className="footer-title">Dziękujemy za odwiedziny !!</span>

      <a href="#home" className="scroll-up">
        <hr />
        <h5>scroll up</h5>
        <BsMouse className="scroll-icon-up" />
        <hr />
      </a>
    </div>
  );
}

export default Footer;