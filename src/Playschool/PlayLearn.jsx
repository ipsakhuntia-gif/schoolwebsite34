import React, { useEffect } from "react";
import "./PlayLearn.css";
import AOS from "aos";
import "aos/dist/aos.css";
import playimage from "../assets/image/play.jpg"; // replace with your actual image

const PlayLearn = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section className="pl-main">
      {/* ---------- HERO SECTION ---------- */}
      <div className="pl-hero">
        <div className="pl-text" data-aos="fade-right">
          <h1>
            <span className="highlight">Play & Learn</span> — Growing with Joy
          </h1>
          <p>
            Children learn best when they play. At our Play & Learn Center,
            every activity is designed to encourage curiosity, teamwork, and
            imagination. Through interactive games, storytelling, and creative
            exploration, we help children learn important life skills while
            having fun every day.
          </p>
          <button
            className="pl-btn"
            onClick={() => window.scrollTo({ top: 800, behavior: "smooth" })}
          >
            Explore Activities
          </button>
        </div>

        <div className="pl-image" data-aos="fade-left">
          <img src={playimage} alt="Play and Learn" />
        </div>
      </div>

      {/* ---------- ACTIVITIES SECTION ---------- */}
      <div className="pl-activities">
        <h2 data-aos="fade-up">Interactive Learning Experiences</h2>
        <p className="pl-subtext" data-aos="fade-up">
          Each activity helps children grow emotionally, socially, and
          intellectually while keeping learning fun and engaging.
        </p>

        <div className="pl-grid">
          {[
            { icon: "🧩", title: "Puzzle Time", desc: "Sharpen problem-solving and logical thinking." },
            { icon: "🎶", title: "Music & Dance", desc: "Learn rhythm, coordination, and self-expression." },
            { icon: "🎨", title: "Art & Imagination", desc: "Express creativity through colors and shapes." },
            { icon: "📚", title: "Story Circle", desc: "Build vocabulary and emotional connection through tales." },
            { icon: "🏃‍♂️", title: "Outdoor Play", desc: "Enhance fitness, balance, and team bonding." },
            { icon: "🤝", title: "Group Games", desc: "Develop social skills and cooperative spirit." },
          ].map((item, index) => (
            <div
              className="pl-card"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 150}
            >
              <div className="pl-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlayLearn;
