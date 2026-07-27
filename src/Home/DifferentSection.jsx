import React from "react";
// import { differentData } from "./differentData";
import "./DifferentSection.css";
// differentData.js
export const differentData = [
  {
    title: "INTERDISCIPLINARY AND THEME BASED LEARNING",
    description:
      "Integration of reading, math, music, movement, and interpersonal relations into a theme based curriculum.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600",
  },
  {
    title: "OVER ALL DEVELOPMENT OF THE CHILD'S PERSONA",
    description:
      "Besides the academics, physical education, study trips, cultural activities. Martial Art and Science and Technology are also given equal priority for all round development of the student.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600",
  },
  {
    title: "EFFICIENT FACULTY",
    description:
      "Regular training sessions and workshops by CBSE accredited resource persons are organised to improve their skills in the latest pedagogies.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600",
  },
  {
    title: "CLASSROOMS WITH THE SMART CLASS",
    description:
      "Digital classrooms with smart boards and e-learning modules make concepts easy and fun for students.",
    image: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?w=600",
  },
  {
    title: "SAFE & SECURE TRANSPORT",
    description:
      "A fleet of buses with GPS tracking and trained staff ensures safe commuting for students from home to school.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600",
  },
  {
    title: "CO-CURRICULAR ACTIVITIES",
    description:
      "Music, dance, drama, art, and sports are promoted to encourage holistic growth of every child.",
    image: "https://images.unsplash.com/photo-1508780709619-79562169bc64?w=600",
  },
];

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