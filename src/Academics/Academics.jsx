
// import React, { useState, useEffect, useRef } from "react";
// import "../Academics/academic.css";
// import { academicsData } from "../Academics/academicsData";
// import Typewriter from "typewriter-effect";

// const Academics = () => {
//   const [visibleSection, setVisibleSection] = useState(false);
//   const [typedIds, setTypedIds] = useState([]); 
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         const entry = entries[0];
//         if (entry.isIntersecting) {
//           setVisibleSection(true);
//           setTypedIds([]); 
//         } else {
//           setVisibleSection(false);
//         }
//       },
//       { threshold: 0.4 } 
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) observer.unobserve(sectionRef.current);
//     };
//   }, []);

//   return (
//     <section className="academics-section" ref={sectionRef}>
//       <h2 className="academics-title">What Is Good at Our Academy ?</h2>
//       <p className="academics-subtitle">
//         It is providing predominance in higher studies with amidst world class infrastructure.
//       </p>

//       <div className="academics-container">
//         {academicsData.map((item) => (
//           <div key={item.id} className="academics-card">
//             <img src={item.image} alt={item.title} className="academics-img" />
//             <h3 className="academics-heading">{item.title}</h3>
//             <p className="academics-text">
//               {visibleSection && !typedIds.includes(item.id) ? (
//                 <Typewriter
//                   onInit={(typewriter) => {
//                     typewriter
//                       .typeString(item.description)
//                       .callFunction(() => {
//                         setTypedIds((prev) => [...prev, item.id]);
//                       })
//                       .start();
//                   }}
//                   options={{
//                     autoStart: true,
//                     delay: 30,
//                   }}
//                 />
//               ) : (
//                 item.description
//               )}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Academics;























import React, { useState } from "react";
import "./AcademicPage.css";

// ------------------------------------------------------------------
// Edit everything in this block. The page is built from this data.
// Remove any stage your school does not offer (the staircase adjusts).
// ------------------------------------------------------------------
const stages = [
  {
    id: "pre",
    name: "Pre-Primary",
    classes: "Nursery to UKG",
    tagline: "Learning through play, stories, songs and movement.",
    subjects: [
      "English",
      "Odia",
      "Hindi",
      "Numbers",
      "Environment",
      "Art and craft",
      "Music and rhymes",
    ],
    approach: [
      "Small groups with a teacher and a helper in every room",
      "Activity corners for sand, blocks, clay and role play",
      "Weekly story and rhyme time to build early language",
    ],
    assessment: "Observation notes and a termly progress sheet. No written exams.",
  },
  {
    id: "primary",
    name: "Primary",
    classes: "Class I to V",
    tagline: "Strong reading, writing and number skills, taught through themes.",
    subjects: [
      "English",
      "Odia",
      "Hindi",
      "Mathematics",
      "Environmental Studies",
      "Computer",
      "Art",
      "Physical Education",
    ],
    approach: [
      "Theme-based units that join reading, maths, music and movement",
      "Smart class sessions for concepts that are easier to see than read",
      "Library period every week",
    ],
    assessment: "Periodic tests, notebook work and two term exams.",
  },
  {
    id: "middle",
    name: "Middle",
    classes: "Class VI to VIII",
    tagline: "Subjects split into their own disciplines, with more hands-on work.",
    subjects: [
      "English",
      "Hindi",
      "Odia or Sanskrit",
      "Mathematics",
      "Science",
      "Social Science",
      "Computer",
      "Art",
      "Physical Education",
    ],
    approach: [
      "Science and computer lab sessions each week",
      "Projects and group presentations every term",
      "Olympiad and quiz preparation for interested students",
    ],
    assessment: "Periodic tests, subject enrichment activities, half-yearly and annual exams.",
  },
  {
    id: "secondary",
    name: "Secondary",
    classes: "Class IX to X",
    tagline: "Board preparation with steady practice and clear feedback.",
    subjects: [
      "English",
      "Hindi or Odia",
      "Mathematics",
      "Science",
      "Social Science",
      "Information Technology",
    ],
    approach: [
      "Chapter-wise tests and previous-year paper practice",
      "Extra classes for students who need support",
      "Career guidance sessions in Class X",
    ],
    assessment: "Internal assessment plus CBSE Class X board examination.",
  },
  {
    id: "senior",
    name: "Senior Secondary",
    classes: "Class XI to XII",
    tagline: "Three streams, each with focused teaching and board preparation.",
    subjects: [
      "Science: Physics, Chemistry, Mathematics or Biology",
      "Commerce: Accountancy, Business Studies, Economics",
      "Humanities: History, Political Science, Geography",
      "English as a core subject",
    ],
    approach: [
      "Practical work in labs for every science subject",
      "Subject mentors for each stream",
      "Guidance for entrance exams and college applications",
    ],
    assessment: "Internal assessment plus CBSE Class XII board examination.",
  },
];

const examPattern = [
  { name: "Periodic Test I", when: "July", covers: "First units of each subject" },
  { name: "Half-Yearly Exam", when: "September or October", covers: "Syllabus up to the term" },
  { name: "Periodic Test II", when: "December", covers: "Units taught after the half-yearly exam" },
  { name: "Annual Exam", when: "February to March", covers: "Full-year syllabus" },
];

const results = [
  { year: "2025", tenth: 100, twelfth: 98 },
  { year: "2024", tenth: 100, twelfth: 96 },
  { year: "2023", tenth: 98, twelfth: 95 },
];

const calendar = [
  { month: "April", event: "New session begins. Class orientation for parents." },
  { month: "July", event: "Periodic Test I." },
  { month: "September", event: "Half-yearly exams begin." },
  { month: "October", event: "Results and parent-teacher meeting." },
  { month: "December", event: "Periodic Test II." },
  { month: "January", event: "Annual day and sports meet." },
  { month: "February", event: "Annual exams begin." },
  { month: "March", event: "Results and promotion to the next class." },
];

const downloads = [
  { name: "Class-wise syllabus", type: "PDF", file: "/downloads/syllabus.pdf" },
  { name: "Annual academic calendar", type: "PDF", file: "/downloads/calendar.pdf" },
  { name: "Exam date sheet", type: "PDF", file: "/downloads/datesheet.pdf" },
  { name: "Previous year question papers", type: "PDF", file: "/downloads/question-papers.pdf" },
  { name: "Mandatory public disclosure", type: "PDF", file: "/downloads/public-disclosure.pdf" },
];

const AcademicPage = () => {
  const [activeId, setActiveId] = useState(stages[1].id);
  const active = stages.find((s) => s.id === activeId);

  return (
    <div className="ac-page">
      {/* Hero with the stage staircase */}
      <header className="ac-hero">
        <div className="ac-hero-inner">
          <div className="ac-hero-text">
            <h1>A classroom for every stage of growing up</h1>
            <p>
              We follow the CBSE curriculum from Nursery onwards. Choose a stage
              to see what your child will study and how we teach it.
            </p>
          </div>

          <div
            className="ac-stairs"
            role="tablist"
            aria-label="School stages"
          >
            {stages.map((s, i) => (
              <button
                key={s.id}
                type="button"
                role="tab"
                id={`tab-${s.id}`}
                aria-selected={activeId === s.id}
                aria-controls="stage-panel"
                className={`ac-step ${activeId === s.id ? "is-active" : ""}`}
                style={{
                  "--h": `${90 + i * 42}px`,
                  "--w": `${58 + i * 10}%`,
                  "--i": i,
                }}
                onClick={() => setActiveId(s.id)}
              >
                <span className="ac-step-classes">{s.classes}</span>
                <span className="ac-step-name">{s.name}</span>
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Selected stage */}
      <section
        className="ac-stage"
        id="stage-panel"
        role="tabpanel"
        aria-labelledby={`tab-${active.id}`}
      >
        <div className="ac-stage-head">
          <h2>{active.classes}</h2>
          <p>{active.tagline}</p>
        </div>

        <div className="ac-stage-body">
          <div className="ac-block">
            <h3>Subjects</h3>
            <ul className="ac-chips">
              {active.subjects.map((sub) => (
                <li key={sub}>{sub}</li>
              ))}
            </ul>
          </div>

          <div className="ac-block">
            <h3>How we teach</h3>
            <ul className="ac-list">
              {active.approach.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>

          <div className="ac-block ac-assess">
            <h3>How we assess</h3>
            <p>{active.assessment}</p>
          </div>
        </div>
      </section>

      {/* Exam pattern */}
      <section className="ac-section">
        <h2>Exams through the year</h2>
        <div className="ac-table-wrap">
          <table className="ac-table">
            <thead>
              <tr>
                <th>Assessment</th>
                <th>When</th>
                <th>What it covers</th>
              </tr>
            </thead>
            <tbody>
              {examPattern.map((e) => (
                <tr key={e.name}>
                  <td>{e.name}</td>
                  <td>{e.when}</td>
                  <td>{e.covers}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Results */}
      <section className="ac-section ac-results">
        <h2>Board results</h2>
        <p className="ac-note">Pass percentage by year.</p>
        <div className="ac-bars">
          {results.map((r) => (
            <div className="ac-bar-group" key={r.year}>
              <span className="ac-bar-year">{r.year}</span>
              <div className="ac-bar-rows">
                <div className="ac-bar-row">
                  <span className="ac-bar-label">Class X</span>
                  <div className="ac-bar-track">
                    <div className="ac-bar-fill" style={{ width: `${r.tenth}%` }} />
                  </div>
                  <span className="ac-bar-value">{r.tenth}%</span>
                </div>
                <div className="ac-bar-row">
                  <span className="ac-bar-label">Class XII</span>
                  <div className="ac-bar-track">
                    <div
                      className="ac-bar-fill ac-bar-fill-alt"
                      style={{ width: `${r.twelfth}%` }}
                    />
                  </div>
                  <span className="ac-bar-value">{r.twelfth}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Calendar */}
      <section className="ac-section">
        <h2>The school year</h2>
        <ol className="ac-calendar">
          {calendar.map((c) => (
            <li key={c.month}>
              <span className="ac-month">{c.month}</span>
              <span className="ac-event">{c.event}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* Downloads */}
      <section className="ac-section ac-downloads">
        <h2>Downloads</h2>
        <ul className="ac-files">
          {downloads.map((d) => (
            <li key={d.name}>
              <span className="ac-file-type">{d.type}</span>
              <span className="ac-file-name">{d.name}</span>
              <a className="ac-file-btn" href={d.file} download>
                Download
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default AcademicPage;