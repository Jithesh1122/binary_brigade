// Footer.js
import Github from  "./images/github.png"
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="links">
        <img  src={Github} alt="Jithesh" title='Jithesh'/>
        <a href="https://github.com/Jithesh1122" target="_blank" rel="noopener noreferrer">Jithesh</a>
        <a href="https://github.com/vinishdas" target="_blank" rel="noopener noreferrer">Vinish</a>
        <a href="https://github.com/Aditi-T27" target="_blank" rel="noopener noreferrer">Adithi</a>
        <a href="https://github.com/Akshaya-Priya" target="_blank" rel="noopener noreferrer">Akshaya</a>
      </div>
      <p className="copyright">
        © 2024 Your Company. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
