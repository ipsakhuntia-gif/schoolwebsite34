import React, { useEffect } from "react";
import "./MusicAndArtsRoom.css";

const MusicAndArtsRoom = () => {
  // Scroll animation effect
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".mar-fade-in");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add("mar-visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="mar-section">
      {/* Hero Section */}
      <div className="mar-hero">
        <div className="mar-hero-overlay">
          <h1 className="mar-hero-title">Music & Arts Room</h1>
          <p className="mar-hero-subtitle">
            A creative space for rhythm, melody, and imagination.
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="mar-about mar-fade-in">
        <div className="mar-container">
          <div className="mar-text">
            <h2 className="mar-heading">About the Room</h2>
            <p className="mar-description">
              The Music & Arts Room is designed to inspire creativity and
              self-expression among students. It’s equipped with musical
              instruments, art supplies, and digital tools that help students
              explore both traditional and modern forms of art.
            </p>
          </div>
          <div className="mar-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=900&q=60"
              alt="Music and Arts Room"
              className="mar-image"
            />
          </div>
        </div>
      </div>

      {/* Activities Section */}
      <div className="mar-activities mar-fade-in">
        <h2 className="mar-heading center">Our Activities</h2>
        <div className="mar-grid">
          <div className="mar-card">
            <img
              src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=600&q=60"
              alt="Music Class"
            />
            <h3>Music Sessions</h3>
            <p>Learn classical and contemporary music with hands-on practice.</p>
          </div>
          <div className="mar-card">
            <img
              src="https://images.unsplash.com/photo-1529101091764-c3526daf38fe?auto=format&fit=crop&w=600&q=60"
              alt="Art Workshop"
            />
            <h3>Art Workshops</h3>
            <p>
              Explore painting, sculpture, and creative design guided by
              professionals.
            </p>
          </div>
          <div className="mar-card">
            <img
              src="https://images.unsplash.com/photo-1497032205916-ac775f0649ae?auto=format&fit=crop&w=600&q=60"
              alt="Dance Practice"
            />
            <h3>Dance & Drama</h3>
            <p>Express emotions through movement and storytelling performances.</p>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="mar-gallery mar-fade-in">
        <h2 className="mar-heading center">Gallery</h2>
        <div className="mar-gallery-grid">
          {[
            "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
            "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3",
            "https://images.unsplash.com/photo-1487180144351-b8472da7d491",
            "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620",
          ].map((url, i) => (
            <img key={i} src={`${url}?auto=format&fit=crop&w=800&q=60`} alt={`Art ${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MusicAndArtsRoom;
