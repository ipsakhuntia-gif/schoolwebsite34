
import React, { useState, useEffect, useRef } from "react";
import "../Academics/academic.css";
import { academicsData } from "../Academics/academicsData";
import Typewriter from "typewriter-effect";

const Academics = () => {
  const [visibleSection, setVisibleSection] = useState(false);
  const [typedIds, setTypedIds] = useState([]); 
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setVisibleSection(true);
          setTypedIds([]); 
        } else {
          setVisibleSection(false);
        }
      },
      { threshold: 0.4 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section className="academics-section" ref={sectionRef}>
      <h2 className="academics-title">What Is Good at Our Academy ?</h2>
      <p className="academics-subtitle">
        It is providing predominance in higher studies with amidst world class infrastructure.
      </p>

      <div className="academics-container">
        {academicsData.map((item) => (
          <div key={item.id} className="academics-card">
            <img src={item.image} alt={item.title} className="academics-img" />
            <h3 className="academics-heading">{item.title}</h3>
            <p className="academics-text">
              {visibleSection && !typedIds.includes(item.id) ? (
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(item.description)
                      .callFunction(() => {
                        setTypedIds((prev) => [...prev, item.id]);
                      })
                      .start();
                  }}
                  options={{
                    autoStart: true,
                    delay: 30,
                  }}
                />
              ) : (
                item.description
              )}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Academics;
