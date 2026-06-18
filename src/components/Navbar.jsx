import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/Portfolio-Logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "About Me", id: "about" },
    { label: "Services", id: "services" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Blog", id: "resume" },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => scrollToSection("home")}>
          <img src={logo} alt="Logo" className="navbar-logo-img" />
        </div>

        <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <button onClick={() => scrollToSection(link.id)}>
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          className="navbar-contact-btn"
          onClick={() => scrollToSection("contact")}
        >
          Contact Me
        </button>

        <div
          className={`navbar-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;