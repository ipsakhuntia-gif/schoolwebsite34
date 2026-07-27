import React from "react";

const Achievements = () => {
  const achievements = [
    "Gold Medal in Science Olympiad",
    "First Prize in State-level Debate",
    "National Level Sports Champion",
  ];

  // Internal CSS using style objects
  const sectionStyle = {
    padding: "40px",
    backgroundColor: "#f9f9f9",
    textAlign: "center",
    borderRadius: "10px",
    margin: "20px auto",
    width: "80%",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  };

  const headingStyle = {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#2c3e50",
  };

  const listStyle = {
    listStyle: "none",
    padding: 0,
    fontSize: "18px",
    lineHeight: "2",
    color: "#34495e",
  };

  const listItemStyle = {
    backgroundColor: "#ffffff",
    margin: "10px auto",
    padding: "10px 20px",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    width: "60%",
    textAlign: "left",
  };

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>Our Achievements</h2>
      <ul style={listStyle}>
        {achievements.map((a, i) => (
          <li key={i} style={listItemStyle}>
            🏆 {a}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Achievements;
