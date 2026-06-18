import React from "react";
import {
  FaPills,
  FaVial,
  FaShieldAlt,
  FaLeaf,
  FaHandHoldingMedical,
  FaUserMd,
} from "react-icons/fa";
import "./Services.css";

const services = [
  {
    icon: <FaPills />,
    title: "Homeopathic Medicine",
    filled: true,
  },
  {
    icon: <FaVial />,
    title: "Constitutional Treatment",
    filled: false,
  },
  {
    icon: <FaShieldAlt />,
    title: "Immunity Boosting",
    filled: false,
  },
  {
    icon: <FaLeaf />,
    title: "Chronic Disease Care",
    filled: false,
  },
  {
    icon: <FaHandHoldingMedical />,
    title: "Skin & Allergy Care",
    filled: false,
  },
  {
    icon: <FaUserMd />,
    title: "Child & Family Wellness",
    filled: false,
  },
];

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="services-container">
        <h2 className="services-heading">
          Special Services For
          <br />
          My Patients
        </h2>
        <div className="services-underline"></div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div
                className={`service-icon ${
                  service.filled ? "service-icon-filled" : ""
                }`}
              >
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <a href="#services" className="service-link">
                FIND SERVICE
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;