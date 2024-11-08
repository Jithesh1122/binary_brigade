// ContactUs.js
import Github from "./images/github.png";  // Assuming this is a general GitHub logo
import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div id="contact-us">
      <section className="contact">
        <h2>Contact Us</h2>
        <div className="contact-links">
          <div className="contact-item">
            <img src={Github} alt="GitHub Icon" title="Jithesh's GitHub" />
            <a href="https://github.com/Jithesh1122" target="_blank" rel="noopener noreferrer">Jithesh</a>
          </div>
          <div className="contact-item">
            <img src={Github} alt="GitHub Icon" title="Vinish's GitHub" />
            <a href="https://github.com/vinishdas" target="_blank" rel="noopener noreferrer">Vinish</a>
          </div>
          <div className="contact-item">
            <img src={Github} alt="GitHub Icon" title="Aditi's GitHub" />
            <a href="https://github.com/Aditi-T27" target="_blank" rel="noopener noreferrer">Aditi</a>
          </div>
          <div className="contact-item">
            <img src={Github} alt="GitHub Icon" title="Akshaya's GitHub" />
            <a href="https://github.com/Akshaya-Priya" target="_blank" rel="noopener noreferrer">Akshaya</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
