import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          © {currentYear} Vishesh Pal. Crafted with passion and neon dreams.
        </p>
      </div>
    </footer>
  );
};

export default Footer;