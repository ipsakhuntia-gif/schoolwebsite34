import React from "react";
import { differentData } from "./differentData";
import "./DifferentSection.css";





const DifferentSection = () => {
  return (
    <section className="different-section">
      <h2 className="title">What makes us different</h2>
      <div className="different-row">
        {differentData.map((item, index) => (
          <div
            key={index}
            className="different-card"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="overlay">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DifferentSection;