// src/Components/Facilities.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Facilities.css";
import classroom from "../assets/image/classroom.jpg";

const facilitiesData = [
  {
    title: "Smart Classrooms",
    description:
      "Equipped with digital boards and interactive learning tools to enhance classroom engagement.",
    img: classroom,
    link: "/facilities/smart-classrooms",
  },
  {
    title: "Science Laboratories",
    description:
      "Modern physics, chemistry, and biology labs to promote hands-on learning and experimentation.",
    img: "/images/science-lab.jpg",
    link: "/facilities/science-lab",
  },
  {
    title: "Library & Reading Hall",
    description:
      "A peaceful and resourceful environment with books, journals, and digital access to global knowledge.",
    img: "/images/library.jpg",
    link: "/facilities/library",
  },
  {
    title: "Sports & Fitness Zone",
    description:
      "Facilities for indoor and outdoor sports including football, basketball, and yoga sessions.",
    img: "/images/sports.jpg",
    link: "/facilities/sports",
  },
  {
    title: "Music & Arts Room",
    description:
      "Encouraging creativity with instruments, art supplies, and performance spaces for students.",
    img: "/images/music-room.jpg",
    link: "/facilities/musicAndArtsRoom",
  },
  {
    title: "Transportation",
    description:
      "Safe and reliable school buses with GPS tracking for the convenience of parents and students.",
    img: "/images/transport.jpg",
    link: "/facilities/transportation",
  },
];

export default function Facilities() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="facilities-section" id="facilities">
      <h2 className="facilities-title">Our Facilities</h2>
      <div className="facilities-grid">
        {facilitiesData.map((facility, index) => (
          <div
            className="facility-card"
            key={index}
            data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
            onClick={() => navigate(facility.link)}
          >
            <div className="facility-image">
              <img src={facility.img} alt={facility.title} />
            </div>
            <div className="facility-content">
              <h3>{facility.title}</h3>
              <p>{facility.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
