import React, { useState } from "react";
import "./Resume.css";

const tabs = ["Education", "Experience", "Skills", "Awards"];

const educationData = [
  {
    title: "BHMS (Bachelor of Homeopathic Medicine and Surgery)",
    place: "University of Cambrize, 2008",
    text: "Lorem ipsum dolor sit amet consecte adipiscing elit. Pellentesque non or dapibus, vulputate nulla aliquet, maximus ante pselluc hendrerit.",
  },
  {
    title: "MD (Homeopathy) - Materia Medica",
    place: "University of Cambrize, 2012",
    text: "Lorem ipsum dolor sit amet consecte adipiscing elit. Pellentesque non or dapibus, vulputate nulla aliquet, maximus ante pselluc hendrerit.",
  },
  {
    title: "Higher Secondary Education",
    place: "University of Adobe, 2004",
    text: "Lorem ipsum dolor sit amet consecte adipiscing elit. Pellentesque non or dapibus, vulputate nulla aliquet, maximus ante pselluc hendrerit.",
  },
  {
    title: "Secondary Education",
    place: "University of Cambrize, 2002",
    text: "Lorem ipsum dolor sit amet consecte adipiscing elit. Pellentesque non or dapibus, vulputate nulla aliquet, maximus ante pselluc hendrerit.",
  },
];

const experienceData = [
  {
    title: "Senior Homeopathic Consultant",
    place: "Wellness Homeo Clinic, 2018 - Present",
    text: "Lorem ipsum dolor sit amet consecte adipiscing elit. Pellentesque non or dapibus, vulputate nulla aliquet, maximus ante pselluc hendrerit.",
  },
  {
    title: "Resident Physician",
    place: "City Homeopathic Hospital, 2014 - 2018",
    text: "Lorem ipsum dolor sit amet consecte adipiscing elit. Pellentesque non or dapibus, vulputate nulla aliquet, maximus ante pselluc hendrerit.",
  },
  {
    title: "Junior Consultant",
    place: "Family Care Homeo Center, 2012 - 2014",
    text: "Lorem ipsum dolor sit amet consecte adipiscing elit. Pellentesque non or dapibus, vulputate nulla aliquet, maximus ante pselluc hendrerit.",
  },
  {
    title: "Internship",
    place: "Government Homeopathic Medical College, 2011 - 2012",
    text: "Lorem ipsum dolor sit amet consecte adipiscing elit. Pellentesque non or dapibus, vulputate nulla aliquet, maximus ante pselluc hendrerit.",
  },
];

const skillsData = [
  { name: "Classical Homeopathy", percent: 95 },
  { name: "Case Taking & Analysis", percent: 90 },
  { name: "Chronic Disease Management", percent: 88 },
  { name: "Pediatric Care", percent: 85 },
  { name: "Patient Counselling", percent: 92 },
];

const awardsData = [
  {
    title: "Excellence in Homeopathic Practice",
    place: "State Homeopathic Association, 2022",
    text: "Recognized for outstanding contribution to patient care and community wellness programs.",
  },
  {
    title: "Best Clinic Award",
    place: "City Health Council, 2020",
    text: "Awarded for maintaining the highest standards of hygiene, patient satisfaction, and ethical practice.",
  },
  {
    title: "Research Publication Award",
    place: "National Homeopathy Journal, 2017",
    text: "Published research on chronic disease management through classical homeopathic methods.",
  },
  {
    title: "Community Health Recognition",
    place: "Local Health Camp Council, 2015",
    text: "Honored for organizing free homeopathic health camps for underserved communities.",
  },
];

const Resume = () => {
  const [activeTab, setActiveTab] = useState("Education");

  const renderTimelineCards = (data) => (
    <div className="resume-grid">
      {data.map((item, index) => (
        <div className="resume-card" key={index}>
          <div className="resume-card-bar"></div>
          <div className="resume-card-content">
            <h3>{item.title}</h3>
            <p className="resume-card-place">{item.place}</p>
            <p className="resume-card-text">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );

  const renderSkills = () => (
    <div className="resume-skills">
      {skillsData.map((skill, index) => (
        <div className="skill-row" key={index}>
          <div className="skill-label">
            <span>{skill.name}</span>
            <span>{skill.percent}%</span>
          </div>
          <div className="skill-bar-track">
            <div
              className="skill-bar-fill"
              style={{ width: `${skill.percent}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderContent = () => {
    if (activeTab === "Education") return renderTimelineCards(educationData);
    if (activeTab === "Experience") return renderTimelineCards(experienceData);
    if (activeTab === "Skills") return renderSkills();
    if (activeTab === "Awards") return renderTimelineCards(awardsData);
    return null;
  };

  return (
    <section className="resume" id="resume">
      <div className="resume-container">
        <div className="resume-header">
          <div>
            <h2>My Resume</h2>
            <div className="resume-underline"></div>
          </div>

          <div className="resume-tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`resume-tab-btn ${
                  activeTab === tab ? "resume-tab-active" : ""
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {renderContent()}
      </div>
    </section>
  );
};

export default Resume;