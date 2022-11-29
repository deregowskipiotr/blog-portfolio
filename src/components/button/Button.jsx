import React from 'react';
import './Button.css';

function Buttons() {
  return (
    <div className='container button-container'>
      <a href="#about" className="btn pri">
        Nasze prace
      </a>
      <a href="#contact" className="btn sec">
        Kontakt
      </a>
    </div>
  );
}

export default Buttons;