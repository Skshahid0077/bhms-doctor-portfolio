import React from "react";
import "./Hero.css";
import heroImage from "../assets/Sadiya-doctor.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="hero"
      id="home"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=80')",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-container">
        <div className="hero-content">
          <h1>Dreams of life remains till the heart beats</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing duis dignissim
            ex quis tempus sagittis.
          </p>
          <button className="hero-btn" onClick={scrollToContact}>
            Make Appointment
          </button>
        </div>

        <div className="hero-image">
          <img src={heroImage} alt="BHMS Doctor" />
        </div>
      </div>
    </section>
  );
};

export default Hero;