// src/components/Gallery/Gallery.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import galleryImages from "./GalleryData";
import "./Gallery.css";

const Gallery = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="gallery-section">
      <div className="gallery-header" data-aos="fade-up">
        <h2>Our School Gallery</h2>
        <p>Moments that make learning joyful and memorable</p>
      </div>

      <div className="gallery-grid">
        {galleryImages.map((item) => (
          <div key={item.id} className="gallery-item" data-aos="zoom-in">
            <img src={item.src} alt={item.title} />
            <div className="overlay">
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
