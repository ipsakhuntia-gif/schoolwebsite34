
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Library = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const styles = {
    section: {
      padding: "40px 20px",
      fontFamily: "Arial, sans-serif",
    },
    heroContainer: {
      position: "relative",
      borderRadius: "10px",
      overflow: "hidden",
      marginBottom: "40px",
    },
    hero: {
      backgroundImage:
        "url('https://i.pinimg.com/1200x/45/35/18/45351888ccceca31e9c5ae5d138c2832.jpg')",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      color: "#fff",
      textAlign: "center",
      padding: "120px 20px",
      borderRadius: "10px",
      position: "relative",
      zIndex: 1,
    },
    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.4)",
      zIndex: 0,
    },
    heading: { fontSize: "42px", marginBottom: "10px", fontWeight: "bold" },
    subheading: { fontSize: "22px", fontStyle: "italic" },
    about: { margin: "40px auto", maxWidth: "800px", textAlign: "center" },
    rules: {
      background: "#f9f9f9",
      padding: "25px",
      borderRadius: "10px",
      margin: "40px auto",
      maxWidth: "600px",
    },
    categories: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
      gap: "20px",
      marginTop: "30px",
    },
    card: {
      background: "#fff",
      padding: "15px",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      textAlign: "center",
      transition: "transform 0.3s ease",
    },
  };

  const categories = [
    "Fiction",
    "Non-Fiction",
    "Science & Technology",
    "History",
    "Magazines & Journals",
    "Digital Resources",
  ];

  return (
    <div style={styles.section}>
      {/* ✅ Hero Section with AOS */}
      <div style={styles.heroContainer} data-aos="fade-in">
        <div style={styles.overlay}></div>
        <div style={styles.hero}>
          <h1 style={styles.heading}>Our School Library</h1>
          <p style={styles.subheading}>A Gateway to Knowledge and Imagination</p>
        </div>
      </div>

      {/* ✅ About Section */}
      <div style={styles.about} data-aos="fade-up">
        <h2>About the Library</h2>
        <p>
          Our library houses over 10,000 books, journals, and digital resources.
          It is designed to provide a peaceful environment for reading and
          research, helping students develop knowledge, creativity, and a love
          for lifelong learning.
        </p>
      </div>

      {/* ✅ Rules Section */}
      <div style={styles.rules} data-aos="zoom-in">
        <h3>Library Rules</h3>
        <ul>
          <li>Maintain silence inside the library.</li>
          <li>Return borrowed books within 15 days.</li>
          <li>Library timing: 8:00 AM – 5:00 PM.</li>
        </ul>
      </div>

      {/* ✅ Categories Section */}
      <h2 style={{ textAlign: "center" }} data-aos="fade-up">
        Book Categories
      </h2>
      <div style={styles.categories}>
        {categories.map((cat, i) => (
          <div
            key={i}
            style={styles.card}
            data-aos="flip-left"
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-6px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            📖 {cat}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;
