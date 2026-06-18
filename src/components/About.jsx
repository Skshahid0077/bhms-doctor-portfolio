import React from "react";
import { FaPlay, FaArrowRight } from "react-icons/fa";
import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-image-wrap">
          <img
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=700&q=80"
            alt="Dr. Jane Doe"
          />
          <button className="about-play-btn" aria-label="Play introduction video">
            <FaPlay />
          </button>
        </div>

        <div className="about-content">
          <h2>Dr. Jane Doe</h2>
          <p className="about-specialty">BHMS, CLASSICAL HOMEOPATH</p>
          <p className="about-credentials">BHMS, MD (Homeopathy)</p>

          <p className="about-text">
            Lorem ipsum dolor site amete nilher, consectetured adipiscing elit
            Nullam feugiat faucibus nibh gravida convallis massa sed fringilla.
            Pellentesque habitant dolor morbi tristique senectus etal netus et
            malesuada fames ac turpis egestas.
          </p>

          <p className="about-text">
            Phasellus et finibus orci. Nunce dolauctor, maurive feugiat
            ultricies locus ligula aliquet nunc gravida convallis tristique
            senectus.
          </p>

          <a href="#resume" className="about-learn-more">
            Learn More <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;