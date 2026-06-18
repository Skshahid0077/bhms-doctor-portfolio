import React, { useState } from "react";
import "./Portfolio.css";

const categories = ["All Work", "Skin", "Chronic Care", "Children", "Wellness"];

const portfolioItems = [
  {
    id: 1,
    category: "Skin",
    img: "https://images.unsplash.com/photo-1556228720-da4e85b97a7a?w=500&q=80",
    tall: false,
  },
  {
    id: 2,
    category: "Wellness",
    img: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=500&q=80",
    tall: true,
  },
  {
    id: 3,
    category: "Children",
    img: "https://images.unsplash.com/photo-1576765608866-5b51046452be?w=500&q=80",
    tall: false,
  },
  {
    id: 4,
    category: "Chronic Care",
    img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=500&q=80",
    tall: true,
  },
  {
    id: 5,
    category: "Wellness",
    img: "https://images.unsplash.com/photo-1540206395-68808572332f?w=500&q=80",
    tall: false,
  },
  {
    id: 6,
    category: "Skin",
    img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=500&q=80",
    tall: true,
  },
  {
    id: 7,
    category: "Children",
    img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=500&q=80",
    tall: false,
  },
  {
    id: 8,
    category: "Chronic Care",
    img: "https://images.unsplash.com/photo-1583912267550-d6c2ac3196c0?w=500&q=80",
    tall: false,
  },
  {
    id: 9,
    category: "Wellness",
    img: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=500&q=80",
    tall: true,
  },
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All Work");

  const filteredItems =
    activeFilter === "All Work"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-container">
        <div className="portfolio-header">
          <div>
            <h2>My Portfolio</h2>
            <div className="portfolio-underline"></div>
          </div>

          <div className="portfolio-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${
                  activeFilter === cat ? "filter-btn-active" : ""
                }`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="portfolio-grid">
          {filteredItems.map((item) => (
            <div
              className={`portfolio-item ${item.tall ? "portfolio-item-tall" : ""}`}
              key={item.id}
            >
              <img src={item.img} alt={item.category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;