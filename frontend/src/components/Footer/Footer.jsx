import React from 'react';
import './Footer.css';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        <p className="footer-text">
          © {currentYear} Vishesh Pal. Crafted with passion and neon dreams.
        </p>

        <p className="footer-subtext">
          Built with React, Framer Motion & modern CSS 🚀
        </p>

        <button className="back-to-top" onClick={scrollToTop}>
          <ArrowUp size={16} /> Back to Top
        </button>

      </div>
    </footer>
  );
};

export default Footer;
