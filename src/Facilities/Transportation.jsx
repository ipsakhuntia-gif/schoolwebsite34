// src/Components/Facilities/Transportation.jsx
import React from "react";
import { motion } from "framer-motion";
import "./Transportation.css";


const Transportation = () => {
  return (
    <section className="transportation-section">
      {/* Hero Section */}
      <motion.div
        className="transportation-hero"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-content">
          <h1 className="hero-title">Safe & Reliable School Transportation</h1>
          <p className="hero-subtitle">
            We ensure a comfortable and secure journey for every student.
          </p>
        </div>
      </motion.div>

      {/* Info Section */}
      <motion.div
        className="transportation-info"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="info-text">
          <h2>Our Transport Network</h2>
          <p>
            Our school provides well-maintained buses covering various routes
            across the city. Each bus is equipped with GPS tracking, first-aid
            kits, and a trained driver with an assistant to ensure the safety of
            every student. Parents can stay updated with real-time bus
            locations.
          </p>
          <ul>
            <li>✅ GPS Enabled Buses</li>
            <li>✅ Trained Drivers & Attendants</li>
            <li>✅ Real-time Tracking for Parents</li>
            <li>✅ Regular Maintenance & Cleanliness</li>
          </ul>
        </div>

        <motion.div
          className="info-image"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="https://img.freepik.com/free-photo/school-bus-parked-campus_23-2149661377.jpg"
            alt="School Transportation"
          />
        </motion.div>
      </motion.div>

      {/* Route Highlights */}
      <motion.div
        className="transportation-routes"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>Bus Route Highlights</h2>
        <div className="route-cards">
          {[
            {
              title: "Urban Zone",
              desc: "Covers major city areas including Downtown, Central Park, and Hill Road.",
            },
            {
              title: "Suburban Route",
              desc: "Serving residential zones with doorstep student pickup service.",
            },
            {
              title: "Eco Route",
              desc: "Using eco-friendly buses with reduced emissions and clean energy.",
            },
          ].map((route, i) => (
            <motion.div
              className="route-card"
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <h3>{route.title}</h3>
              <p>{route.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Transportation;
