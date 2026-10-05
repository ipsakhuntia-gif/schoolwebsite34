import React from "react";
import { Link } from "react-router-dom";
import "./PlayLearn.css";
import playimage from "../assets/image/play.jpg";

const activities = [
  { icon: "🧩", title: "Puzzle Time", desc: "Sharpen problem-solving and logical thinking." },
  { icon: "🎶", title: "Music & Dance", desc: "Learn rhythm, coordination, and self-expression." },
  { icon: "🎨", title: "Art & Imagination", desc: "Express creativity through colors and shapes." },
  { icon: "📚", title: "Story Circle", desc: "Build vocabulary and emotional connection through tales." },
  { icon: "🏃", title: "Outdoor Play", desc: "Enhance fitness, balance, and team bonding." },
  { icon: "🤝", title: "Group Games", desc: "Develop social skills and cooperative spirit." },
];

const stats = [
  { value: "6+", label: "Activity Zones" },
  { value: "3-6", label: "Age Group" },
  { value: "1:8", label: "Teacher Ratio" },
];

const PlayLearn = () => {
  const scrollToActivities = () => {
    document
      .getElementById("pl-activities")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="pl-main">
      {/* ---------- HERO ---------- */}
      <section className="pl-hero">
        {/* decorative floating shapes */}
        <span className="pl-shape pl-shape-1" />
        <span className="pl-shape pl-shape-2" />
        <span className="pl-shape pl-shape-3" />

        <div className="pl-hero-inner">
          <div className="pl-text" data-aos="fade-right">
            <span className="pl-eyebrow">Sishu Prabesha</span>
            <h1>
              <span className="pl-gradient">Play &amp; Learn</span>
              <br />
              Growing with Joy
            </h1>
            <p>
              Children learn best when they play. Every activity here is designed
              to encourage curiosity, teamwork, and imagination — helping little
              ones build real life skills while having fun each day.
            </p>

            <div className="pl-actions">
              <button className="pl-btn" type="button" onClick={scrollToActivities}>
                <span>Explore Activities</span>
                <span className="pl-arrow">↓</span>
              </button>
              <Link to="/admission" className="pl-btn-ghost">
                Admission Info
              </Link>
            </div>

            <ul className="pl-stats">
              {stats.map((s) => (
                <li key={s.label}>
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pl-image" data-aos="fade-left">
            <div className="pl-image-blob">
              <img src={playimage} alt="Children playing and learning" />
            </div>
            <div className="pl-badge">
              <span className="pl-badge-icon">🌟</span>
              <div>
                <strong>Learning</strong>
                <small>through play</small>
              </div>
            </div>
          </div>
        </div>

        {/* wave divider */}
        <svg className="pl-wave" viewBox="0 0 1440 90" preserveAspectRatio="none">
          <path d="M0,40 C240,90 480,0 720,30 C960,60 1200,10 1440,45 L1440,90 L0,90 Z" />
        </svg>
      </section>

      {/* ---------- ACTIVITIES ---------- */}
      <section className="pl-activities" id="pl-activities">
        <h2 data-aos="fade-up">Interactive Learning Experiences</h2>
        <p className="pl-subtext" data-aos="fade-up">
          Each activity helps children grow emotionally, socially, and
          intellectually while keeping learning fun and engaging.
        </p>

        <div className="pl-grid">
          {activities.map((item, index) => (
            <article
              className="pl-card"
              key={item.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="pl-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <span className="pl-card-line" />
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default PlayLearn;