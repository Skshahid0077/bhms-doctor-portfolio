import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaVimeoV,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <span className="logo-icon">▲</span>
          <span className="logo-text">MTN</span>
        </div>

        <p className="footer-copyright">
          Copyright © Dr. Jane Doe {new Date().getFullYear()}. All rights reserved.
        </p>

        <div className="footer-socials">
          <a href="#" aria-label="Facebook"><FaFacebookF /></a>
          <a href="#" aria-label="Twitter"><FaTwitter /></a>
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
          <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
          <a href="#" aria-label="Vimeo"><FaVimeoV /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;