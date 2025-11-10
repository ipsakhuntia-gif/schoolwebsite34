import React from "react";
import { useNavigate } from "react-router-dom";
import "./PlaySchool.css";
import playImage from "../assets/image/play.jpg"; // replace with your actual image

const PlaySchool = () => {
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
        </div>
      </div>

      {/* Monkey animation (optional decorative element) */}
      <div className="monkey" data-aos="zoom-in">
        🐒
      </div>
    </section>
  );
};

export default PlaySchool;
