import React from "react";
import "./Home.css"; // optional CSS file

const Home = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Our School</h1>
        <p>Building bright futures through quality education</p>
      </section>

      {/* Playschool Section */}
      <section className="playschool-section">
        <h2>Playschool Admission Open 🎉</h2>
        <p>
          Our playschool provides a safe and joyful environment for your little
          ones. With engaging activities, fun learning, and caring teachers, we
          ensure kids grow happily.
        </p>
        <button className="admission-btn">Apply Now</button>
      </section>

      {/* Other homepage sections can follow here */}
    </div>
  );
};

export default Home;
