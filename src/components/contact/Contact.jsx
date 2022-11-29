import React from 'react';
import './Contact.css';
import { AiOutlinePhone } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs'

function Contact() {
  return (
    <div id="contact" className="container contact-container">
      <span className="contact-title">Bądźmy w kontakcie</span>

      <div className="contact-links">
        <a href="web.whatsapp.com" className="contact whatsapp">
          <AiOutlinePhone className='c-icon' />
          <h2>
            Jola <span> kom: xxx xxx xxx</span>
          </h2>
        </a>

        <a href="www.facebook.pl" className="contact facebbok">
          <BsFacebook className='c-icon' />
          <h2>
            Facebook <span> Odwiedź nas...</span>
          </h2>
        </a>

        <a href="web.whatsapp.com" className="contact whatsapp">
          <AiOutlinePhone className='c-icon' />
          <h2>
            Małgosia <span> kom: xxx xxx xxx</span>
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Contact;