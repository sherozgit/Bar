import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2025 Exclusive.Bar</p>
        <nav className="footer-nav">
          <Link to ="/about">About Us</Link>
          <HashLink smooth to="/about#contact-us">Contact</HashLink>
          <Link to ="/privacy">Privacy Policy</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
