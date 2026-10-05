// import React from "react";
// import { Link } from "react-router-dom";
// import "./PlaySchool.css";
// import playImage from "../assets/image/play.jpg";

// const PlaySchool = () => {
//   return (
//     <section className="playschool-section">
//       <div className="playschool-container">
//         {/* Left Image Section */}
//         <div className="playschool-image" data-aos="fade-right">
//           <img src={playImage} alt="Play School" />
//         </div>

//         {/* Right Content Section */}
//         <div className="playschool-content" data-aos="fade-left">
//           <h2 className="ptitle">
//             Early Childhood Care and Education Made Easy
//           </h2>

//           <p className="description">
//             Our School provides a joyful and nurturing environment where every
//             child begins their first steps toward lifelong learning. Through a
//             Multi-Sensory Approach, we help children explore the world around
//             them using all their senses — seeing, hearing, touching, and
//             experiencing.
//             <br />
//             <br />
//             We focus on developing curiosity, confidence, and creativity,
//             ensuring that learning feels like play and play becomes a powerful
//             learning tool. Each child is encouraged to express themselves,
//             communicate freely, and build essential social and emotional skills
//             in a caring atmosphere.
//             <br />
//             <br />
//             With well-designed classrooms, engaging activities, music, art, and
//             storytelling sessions, our play school becomes a second home for
//             every child — a place where they laugh, learn, and grow together.
//           </p>

//           <Link
//             to="/sishuprabesha"
//             className="explore-btn"
//             data-aos="zoom-in"
//             data-aos-delay="200"
//           >
//             <span>Explore More</span>
//             <span className="arrow">→</span>
//           </Link>
//         </div>
//       </div>

//       {/* Monkey animation (decorative) */}
//       <div className="monkey" data-aos="zoom-in">
//         🐒
//       </div>
//     </section>
//   );
// };

// export default PlaySchool;


























import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./PlaySchool.css";
import playImage from "../assets/image/play.jpg";
import { senses, highlights } from "./playSchoolData";

/* Fires once when the section scrolls into view — drives the entrance sequence. */
const useInView = () => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return [ref, inView];
};

const PlaySchool = () => {
  const [sectionRef, inView] = useInView();
  const [active, setActive] = useState(0);
  const sense = senses[active];

  return (
    <section
      className={`ps${inView ? " is-in" : ""}`}
      ref={sectionRef}
      aria-labelledby="ps-title"
    >
      <span className="ps__blob ps__blob--a" aria-hidden="true" />
      <span className="ps__blob ps__blob--b" aria-hidden="true" />

      <div className="ps__inner">
        {/* ---------- Header ---------- */}
        <header className="ps__head">
          <div className="ps__headLeft">
            <p className="ps__eyebrow" style={{ "--d": "0ms" }}>
              <span className="ps__rule" />
              Play School &middot; Ages 2 to 5
            </p>
            <h2 id="ps-title" className="ps__title">
              <span className="ps__line" style={{ "--d": "90ms" }}>
                Early childhood care,
              </span>
              <span className="ps__line" style={{ "--d": "180ms" }}>
                made <mark className="ps__mark">joyful</mark>.
              </span>
            </h2>
          </div>
          <p className="ps__lede" style={{ "--d": "280ms" }}>
            A child&rsquo;s first classroom should feel like a second home. Every
            day here is built around what a child can see, hear, touch, move and
            make &mdash; so learning arrives as play, not as work.
          </p>
        </header>

        {/* ---------- Photo + approach ---------- */}
        <div className="ps__grid">
          <figure className="ps__figure" style={{ "--d": "360ms" }}>
            <span className="ps__frame" aria-hidden="true" />
            <div className="ps__photo">
              <img
                src={playImage}
                alt="Children learning at Sikhya Mandir play school"
              />
              <span
                className="ps__wash"
                style={{ background: sense.wash }}
                aria-hidden="true"
              />
            </div>
            <figcaption className="ps__chip" key={sense.id}>
              <span className="ps__chipDot" style={{ background: sense.dot }} />
              {sense.caption}
            </figcaption>
          </figure>

          <div className="ps__panel" style={{ "--d": "440ms" }}>
            <p className="ps__panelLabel">Our learning approach</p>

            <ul className="ps__list">
              {senses.map((s, i) => {
                const open = i === active;
                return (
                  <li
                    key={s.id}
                    className={`ps__item${open ? " is-open" : ""}`}
                    style={{ "--bar": s.dot, "--d": `${520 + i * 70}ms` }}
                  >
                    <h3 className="ps__itemHead">
                      <button
                        type="button"
                        className="ps__itemBtn"
                        aria-expanded={open}
                        aria-controls={`ps-body-${s.id}`}
                        onClick={() => setActive(i)}
                      >
                        <span className="ps__bar" aria-hidden="true" />
                        <span className="ps__itemLabel">{s.label}</span>
                        <span className="ps__itemTitle">{s.title}</span>
                        <span className="ps__plus" aria-hidden="true" />
                      </button>
                    </h3>
                    <div className="ps__itemBody" id={`ps-body-${s.id}`}>
                      <div className="ps__itemBodyInner">
                        <p className="ps__itemText">{s.text}</p>
                        <p className="ps__itemMeta">{s.meta}</p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>

            <Link to="/sishuprabesha" className="ps__cta">
              <span>Explore play school</span>
              <span className="ps__ctaArrow" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path
                    d="M4 12h15M13 6l6 6-6 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>

        {/* ---------- Highlights ---------- */}
        <ul className="ps__highlights">
          {highlights.map((h, i) => (
            <li
              key={h.label}
              className="ps__highlight"
              style={{ "--d": `${880 + i * 80}ms` }}
            >
              <span className="ps__highlightValue">{h.value}</span>
              <span className="ps__highlightLabel">{h.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PlaySchool;