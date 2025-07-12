import React from 'react';
import './Footer.css';
// The image doesn't explicitly show specific social icons,
// but if you want to keep them, ensure react-icons/fa is installed.
// For the exact image, we'll use simple text links for now,
// or you can add image icons if you have them.
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from 'react-icons/fa'; // Keeping these just in case you want to use them for socials

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Column 1: Logo, Description & Socials */}
        <div className="footer-col footer-col-logo">
          <div className="footer-logo-wrapper">
            {/* The image shows a bowl icon and "Bistro Bliss" text */}
            <img src="/logoF.png" alt="Logo" className="logo-img" />
           
          </div>
          <p className="footer-description">
           In the new era of technology we look a in the future with certainty and pride to for our company and.
          </p>
          <div className="footer-socials">
            {/* These social links match the image's design with round buttons */}
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            {/* GitHub icon in the image is a placeholder for a general 'more' or 'other' link */}
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Column 2: Pages */}
        <div className="footer-col footer-col-pages">
          <h4>Pages</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#delivery">Delivery</a></li> {/* Added Delivery as per image */}
          </ul>
        </div>

        {/* Column 3: Utility Pages */}
        <div className="footer-col footer-col-utility">
          <h4>Utility Pages</h4>
          <ul>
            <li><a href="#start-here">Start Here</a></li>
            <li><a href="#styleguide">Styleguide</a></li>
            <li><a href="#password-protected">Password Protected</a></li>
            <li><a href="#404">404 Not Found</a></li>
            <li><a href="#licenses">Licenses</a></li>
            <li><a href="#changelog">Changelog</a></li>
            <li><a href="#view-more">View More</a></li>
          </ul>
        </div>

        {/* Column 4: Follow Us On Instagram */}
        <div className="footer-col footer-col-instagram">
          <h4>Follow Us On Instagram</h4>
          <div className="instagram-grid">
            {/* These are placeholder images. You need to replace them with your actual Instagram image paths. */}
            <img src="/fin1.png" alt="Instagram Post 1" />
            <img src="/fin2.png" alt="Instagram Post 2" />
            <img src="/fin3.png" alt="Instagram Post 3" />
            <img src="/fin4.png" alt="Instagram Post 4" />
          </div>
        </div>

      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>Copyright © 2023 Hashtag Developer. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;