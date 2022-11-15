import React from "react";
import { AiOutlineHome, AiOutlineUser, AiOutlinePicture } from 'react-icons/ai';
import { BiMessageRoundedDots } from 'react-icons/bi';
import { BsArrowDownCircle } from 'react-icons/bs';
import './Nav.css';


function Navbar() {
  
 let Icons = document.querySelectorAll('.navigation .icon');

 Icons.forEach((icon) => {
  icon.addEventListener('click', () => {
    changeActive();
    icon.classList.add('active-nav');
  });
 });
 
 function changeActive() {
  Icons.forEach(icon => {
    icon.classList.remove('active-nav');
  });
 };
  return (
    <div className="navigation">
      <a href="#home">
        <AiOutlineHome className="icon"/>
      </a>
      <a href="#about">
        <AiOutlineUser className="icon" />
      </a>
      <a href="#members">
        <AiOutlinePicture className="icon" />
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
