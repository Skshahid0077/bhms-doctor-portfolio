import React from "react";
import { FaRegClock, FaCheck } from "react-icons/fa";
import "./Stats.css";

const Stats = () => {
  return (
    <section className="stats">
      <div className="stats-container">
        <div className="stats-text">
          <h2>12 Years of Experience with 5000+ Patients Treated!</h2>
          <button
            className="stats-btn"
            onClick={() => {
              const section = document.getElementById("contact");
              if (section) section.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Needs Help
          </button>
        </div>

        <div className="stats-schedule-card">
          <div className="stats-schedule-header">
            <FaRegClock />
            <span>Time for Meet</span>
          </div>

          <div className="stats-schedule-row">
            <FaCheck className="stats-check" />
            <div>
              <p className="stats-day">Monday - Saturday</p>
              <p className="stats-time">9:00 AM - 8:00 PM</p>
            </div>
          </div>

          <div className="stats-schedule-row">
            <FaCheck className="stats-check" />
            <div>
              <p className="stats-day">Sunday</p>
              <p className="stats-time">10:00 AM - 1:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;