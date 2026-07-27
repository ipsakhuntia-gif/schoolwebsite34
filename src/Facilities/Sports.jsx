import React from "react";
import { motion } from "framer-motion";

const Sports = () => {
  const styles = {
    section: {
      padding: "60px 20px",
      fontFamily: "'Poppins', sans-serif",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    hero: {
      background: "url('https://images.unsplash.com/photo-1521412644187-c49fa049e84d') center/cover",
      color: "#fff",
      textAlign: "center",
      padding: "100px 20px",
      borderRadius: "20px",
      boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
      marginBottom: "50px",
    },
    title: {
      fontSize: "2.8rem",
      fontWeight: "700",
      marginBottom: "10px",
    },
    subtitle: {
      fontSize: "1.2rem",
      fontWeight: "400",
      maxWidth: "700px",
      margin: "0 auto",
      color: "#f1f1f1",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "25px",
      marginTop: "40px",
    },
    card: {
      background: "#fff",
      borderRadius: "16px",
      overflow: "hidden",
      boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    img: {
      width: "100%",
      height: "200px",
      objectFit: "cover",
    },
    content: {
      padding: "20px",
    },
    heading: {
      fontSize: "1.5rem",
      color: "#333",
      marginBottom: "10px",
    },
    text: {
      color: "#666",
      fontSize: "0.95rem",
      lineHeight: "1.6",
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  const sportsData = [
    {
      title: "Indoor Games",
      image: "https://images.unsplash.com/photo-1551958219-acbc608c6377",
      description:
        "Our school offers a variety of indoor games like chess, table tennis, and carrom to develop strategic thinking and coordination.",
    },
    {
      title: "Outdoor Sports",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      description:
        "We encourage outdoor games like football, cricket, basketball, and athletics to build teamwork and physical fitness.",
    },
    {
      title: "Annual Sports Meet",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b",
      description:
        "Every year, our Annual Sports Meet celebrates sportsmanship and talent with inter-house competitions and awards.",
    },
    {
      title: "Achievements",
      image: "https://images.unsplash.com/photo-1584467735871-0b3a2b38fc25",
      description:
        "Our students have brought laurels at district and state levels in various sports, inspiring future athletes.",
    },
  ];

  return (
    <div style={styles.section}>
      {/* HERO SECTION */}
      <motion.div
        style={styles.hero}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 style={styles.title}>Sports & Physical Education</h1>
        <p style={styles.subtitle}>
          Encouraging students to stay active, healthy, and disciplined through sports and teamwork.
        </p>
      </motion.div>

      {/* GRID SECTION */}
      <div style={styles.grid}>
        {sportsData.map((sport, index) => (
          <motion.div
            key={index}
            style={styles.card}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
            whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(0,0,0,0.2)" }}
          >
            <img src={sport.image} alt={sport.title} style={styles.img} />
            <div style={styles.content}>
              <h3 style={styles.heading}>{sport.title}</h3>
              <p style={styles.text}>{sport.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Sports;
