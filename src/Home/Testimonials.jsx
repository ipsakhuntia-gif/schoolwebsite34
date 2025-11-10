import React, { useState, useEffect } from "react";

const Testimonials = () => {
  const feedbacks = [
    {
      name: "Mr. Sharma",
      role: "Parent of Class 6 Student",
      text: "The school has transformed my child’s confidence and learning habits. Very caring teachers!",
      img: "https://via.placeholder.com/100", // parent photo
    },
    {
      name: "Ananya Gupta",
      role: "Student, Class 10",
      text: "I love the way our teachers make learning fun. The extracurricular activities are amazing!",
      img: "https://via.placeholder.com/100", // student photo
    },
    {
      name: "Rahul Verma",
      role: "Alumni, Batch 2018",
      text: "This school laid the foundation for my success. The discipline and values I learnt are priceless.",
      img: "https://via.placeholder.com/100", // alumni photo
    },
  ];

  const [current, setCurrent] = useState(0);

  // Auto change testimonial every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % feedbacks.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [feedbacks.length]);

  const styles = {
    section: {
      padding: "50px 20px",
      background: "linear-gradient(135deg, #f0f4ff, #e6f7ff)",
      textAlign: "center",
    },
    heading: {
      fontSize: "32px",
      marginBottom: "30px",
      color: "#2c3e50",
    },
    card: {
      maxWidth: "600px",
      margin: "0 auto",
      background: "#fff",
      padding: "30px",
      borderRadius: "15px",
      boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
      transition: "all 0.5s ease-in-out",
    },
    img: {
      width: "80px",
      height: "80px",
      borderRadius: "50%",
      objectFit: "cover",
      border: "3px solid #3498db",
      marginBottom: "15px",
    },
    text: {
      fontSize: "18px",
      fontStyle: "italic",
      color: "#555",
      marginBottom: "20px",
    },
    name: {
      fontWeight: "bold",
      fontSize: "20px",
      color: "#2c3e50",
    },
    role: {
      fontSize: "14px",
      color: "#888",
    },
    dots: {
      display: "flex",
      justifyContent: "center",
      marginTop: "15px",
    },
    dot: (isActive) => ({
      height: "12px",
      width: "12px",
      margin: "0 5px",
      borderRadius: "50%",
      backgroundColor: isActive ? "#3498db" : "#bbb",
      cursor: "pointer",
      transition: "0.5s",
    }),
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>What Our Parents, Students & Alumni Say</h2>
      <div style={styles.card}>
        <img
          src={feedbacks[current].img}
          alt={feedbacks[current].name}
          style={styles.img}
        />
        <p style={styles.text}>“{feedbacks[current].text}”</p>
        <div style={styles.name}>{feedbacks[current].name}</div>
        <div style={styles.role}>{feedbacks[current].role}</div>
      </div>

      {/* Dots for navigation */}
      <div style={styles.dots}>
        {feedbacks.map((_, index) => (
          <div
            key={index}
            style={styles.dot(current === index)}
            onClick={() => setCurrent(index)}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
