
import React, { useEffect, useRef, useState } from "react";
import "./Sampadaka.css";
import secretaryImage from "../assets/image/Surendra.png";
import { secretary, commitments } from "./sampadakaData";

/* Fires once when the section scrolls into view */
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
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return [ref, inView];
};

const Sampadaka = () => {
  const [sectionRef, inView] = useInView();
  const [lead, ...rest] = secretary.paragraphs;

  return (
    <section
      className={`sp${inView ? " is-in" : ""}`}
      id="secretary"
      ref={sectionRef}
      aria-labelledby="sp-title"
    >
      <div className="sp__inner">
        <h2 id="sp-title" className="sp__title">
          {secretary.title}
        </h2>

        <div className="sp__grid">
          {/* Portrait panel: stays in view while the letter scrolls */}
          <aside className="sp__portrait">
            <img src={secretaryImage} alt={secretary.nameEn} />
            <div className="sp__caption">
              <p className="sp__name">{secretary.name}</p>
              <p className="sp__role">{secretary.role}</p>
              <p className="sp__school">{secretary.school}</p>
            </div>
          </aside>

          {/* The letter */}
          <article className="sp__letter">
            <blockquote className="sp__quote">{secretary.quoteCard}</blockquote>

            <p className="sp__lead">{lead}</p>

            {rest.map((p, i) => (
              <p key={i} className="sp__text">
                {p}
              </p>
            ))}

            <div className="sp__sign">
              <svg
                className="sp__signSvg"
                viewBox="0 0 200 60"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M6 42c9-26 15-33 21-32 6 1 3 20-3 30-5 9-12 6-8-5C21 22 32 10 42 10c6 0 7 7 3 16-4 7-9 12-6 16 3 3 10 1 15-5 5-6 11-16 17-16 5 0 5 7 2 12-3 5-7 8-5 11 3 3 9 0 15-6 7-7 12-16 19-16 5 0 6 6 3 11-3 5-7 8-4 11 3 3 11 0 19-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="sp__signName">{secretary.name}</p>
              {secretary.meta && (
                <p className="sp__signMeta">{secretary.meta}</p>
              )}
            </div>
          </article>
        </div>

        {/* Commitments */}
        <ul className="sp__commits">
          {commitments.map((c) => (
            <li key={c.id} className="sp__commit">
              <h3 className="sp__commitLabel">{c.label}</h3>
              <p className="sp__commitText">{c.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Sampadaka;