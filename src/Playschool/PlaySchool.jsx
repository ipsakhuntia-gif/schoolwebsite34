<<<<<<< HEAD

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
=======
import React from "react";
import { useNavigate } from "react-router-dom";
>>>>>>> 5fdb13813ccad783bfd96ba761c834d35010c12e
import "./PlaySchool.css";
import playImage from "../assets/image/play.jpg"; // replace with your actual image

const PlaySchool = () => {
<<<<<<< HEAD
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false); // track when image finishes loading

  // Handle navigation
  const handleEnquireClick = () => {
    navigate("/sishuprabesha");
  };

  // Preload image + initialize AOS
  useEffect(() => {
    const img = new Image();
    img.src = playImage;
    img.onload = () => setLoaded(true);

    AOS.init({
      duration: 800,
      offset: 50,
      once: true,
      delay: 0, // start immediately
    });
  }, []);

  return (
    <section className="playschool-section">
      <div className="playschool-container">
        {/* Left Image */}
        <div className="playschool-image" data-aos="fade-right">
          <img
            src={playImage}
            alt="Play School"
            className={`fade-image ${loaded ? "show" : ""}`}
          />
        </div>

        {/* Right Content */}
=======
  const navigate = useNavigate(); // for navigation

  // Function to handle image click
  const handleImageClick = () => {
    navigate("/sishuprabesha"); // navigates to your SishuPrabesha.jsx page
  };

  return (
    <section className="playschool-section">
      <div className="playschool-container">
        {/* Left Image Section */}
        <div
          className="playschool-image"
          data-aos="fade-right"
          onClick={handleImageClick}
          style={{ cursor: "pointer" }} // add cursor pointer
        >
          <img src={playImage} alt="Play School" />
        </div>

        {/* Right Content Section */}
>>>>>>> 5fdb13813ccad783bfd96ba761c834d35010c12e
        <div className="playschool-content" data-aos="fade-left">
          <h2 className="ptitle">
            Early Childhood Care and Education Made Easy
          </h2>
          <p className="description">
            Our School provides a joyful and nurturing environment where every
            child begins their first steps toward lifelong learning. Through a
            Multi-Sensory Approach, we help children explore the world around
            them using all their senses — seeing, hearing, touching, and
            experiencing.
            <br />
            <br />
            We focus on developing curiosity, confidence, and creativity,
            ensuring that learning feels like play and play becomes a powerful
            learning tool. Each child is encouraged to express themselves,
            communicate freely, and build essential social and emotional skills
            in a caring atmosphere.
            <br />
            <br />
            With well-designed classrooms, engaging activities, music, art, and
            storytelling sessions, our play school becomes a second home for
            every child — a place where they laugh, learn, and grow together.
          </p>
<<<<<<< HEAD

          {/* Enquire Now Button */}
          <button className="enquire-btn" onClick={handleEnquireClick}>
            Explore More
          </button>
        </div>
      </div>

      {/* Monkey Emoji Animation */}
=======
        </div>
      </div>

      {/* Monkey animation (optional decorative element) */}
>>>>>>> 5fdb13813ccad783bfd96ba761c834d35010c12e
      <div className="monkey" data-aos="zoom-in">
        🐒
      </div>
    </section>
  );
};

export default PlaySchool;
