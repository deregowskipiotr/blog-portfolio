import React, { useState, useEffect } from "react";
import { AiOutlineHome, AiOutlineShopping, AiOutlinePicture } from 'react-icons/ai';
import { BiMessageRoundedDots } from 'react-icons/bi';
import { BsArrowDownCircle } from 'react-icons/bs';

import './Nav.css';


 function Navbar() {

  const[icon, setIcon] = useState(false);
  
  useEffect(() => {
    setIcon()
  }, [icon]);

  let Icons = document.querySelectorAll('.navigation .icon');

  Icons.forEach((icon) => {
    icon.addEventListener("click", () => {
      changeActive();
      icon.classList.add("active-nav");
    });
  });

  function changeActive() {
    Icons.forEach((icon) => {
      icon.classList.remove("active-nav");
    });
  }
  
 


  return (
    <div className="navigation">
      <a href="#home" >
        <AiOutlineHome className="icon active-nav" />
      </a>
      <a href="#about">
        <AiOutlinePicture className="icon" />
      </a>
      <a href="#members">
        <AiOutlineShopping className="icon" />
      </a>
      <a href="#contact">
        <BiMessageRoundedDots className="icon" />
      </a>
      <a href="#footer">
        <BsArrowDownCircle className="icon" />
      </a>
    </div>
  );
}




export default Navbar;
