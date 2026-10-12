// import React from "react";

// const Achievements = () => {
//   const achievements = [
//     "Gold Medal in Science Olympiad",
//     "First Prize in State-level Debate",
//     "National Level Sports Champion",
//   ];

//   // Internal CSS using style objects
//   const sectionStyle = {
//     padding: "40px",
//     backgroundColor: "#f9f9f9",
//     textAlign: "center",
//     borderRadius: "10px",
//     margin: "20px auto",
//     width: "80%",
//     boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
//   };

//   const headingStyle = {
//     fontSize: "28px",
//     fontWeight: "bold",
//     marginBottom: "20px",
//     color: "#2c3e50",
//   };

//   const listStyle = {
//     listStyle: "none",
//     padding: 0,
//     fontSize: "18px",
//     lineHeight: "2",
//     color: "#34495e",
//   };

//   const listItemStyle = {
//     backgroundColor: "#ffffff",
//     margin: "10px auto",
//     padding: "10px 20px",
//     borderRadius: "8px",
//     boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
//     width: "60%",
//     textAlign: "left",
//   };

//   return (
//     <section style={sectionStyle}>
//       <h2 style={headingStyle}>Our Achievements</h2>
//       <ul style={listStyle}>
//         {achievements.map((a, i) => (
//           <li key={i} style={listItemStyle}>
//             🏆 {a}
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// };

// export default Achievements;



















import React, { useState } from "react";
import "./Achievements.css";

// ---------------------------------------------------------------
// Edit this data. Replace images with your own, e.g.:
//   import trophy from "./assets/image/trophy.jpeg";  ->  image: trophy
// ---------------------------------------------------------------
export const achievementsData = [
  {
    id: 1,
    category: "Academics",
    year: "2025",
    title: "100% CBSE Board Results",
    description:
      "All Class X and XII students passed with distinction, with 28 students scoring above 90%.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600",
  },
  {
    id: 2,
    category: "Sports",
    year: "2025",
    title: "Inter-School Football Champions",
    description:
      "Our under-17 team won the district-level football championship for the second year in a row.",
    image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600",
  },
  {
    id: 3,
    category: "Science",
    year: "2024",
    title: "State Science Exhibition Winners",
    description:
      "Students won first prize with a working model on solar-powered water purification.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600",
  },
  {
    id: 4,
    category: "Arts & Culture",
    year: "2024",
    title: "Best Performance at Cultural Fest",
    description:
      "Our dance and drama troupe received the best performance award at the regional cultural festival.",
    image: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=600",
  },
  {
    id: 5,
    category: "Sports",
    year: "2024",
    title: "Karate Medals at State Level",
    description:
      "Five students won gold and silver medals at the state karate championship.",
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=600",
  },
  {
    id: 6,
    category: "Academics",
    year: "2023",
    title: "National Olympiad Rankers",
    description:
      "Twelve students secured national ranks in the Maths and Science Olympiads.",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600",
  },
];

const statsData = [
  { number: "100%", label: "Board Results" },
  { number: "50+", label: "Awards Won" },
  { number: "25+", label: "Medals in Sports" },
  { number: "15+", label: "Years of Excellence" },
];

const categories = ["All", ...new Set(achievementsData.map((a) => a.category))];

const AchievementsPage = () => {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? achievementsData
      : achievementsData.filter((a) => a.category === active);

  return (
    <div className="achievements-page">
      {/* Hero */}
      <header className="ach-hero">
        <h1>Our Achievements</h1>
        <p>Celebrating the hard work, talent and spirit of our students.</p>
      </header>

      {/* Stats */}
      <section className="ach-stats">
        {statsData.map((s) => (
          <div className="ach-stat" key={s.label}>
            <span className="ach-stat-number">{s.number}</span>
            <span className="ach-stat-label">{s.label}</span>
          </div>
        ))}
      </section>

      {/* Filters */}
      <section className="ach-section">
        <div className="ach-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`ach-filter-btn ${active === cat ? "active" : ""}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="ach-grid">
          {filtered.map((item) => (
            <article className="ach-card" key={item.id}>
              <div
                className="ach-card-image"
                style={{ backgroundImage: `url("${item.image}")` }}
              >
                <span className="ach-badge">{item.year}</span>
              </div>
              <div className="ach-card-body">
                <span className="ach-category">{item.category}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="ach-empty">No achievements in this category yet.</p>
        )}
      </section>
    </div>
  );
};

export default AchievementsPage;