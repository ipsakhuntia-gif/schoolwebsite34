
import React from "react";
import "./AboutPage.css";
import schoolImg from "../assets/image/school.png";
import principalImage from "../assets/image/principal.jpg";

/* ===== Yahan apna content badal dijiye ===== */
const SCHOOL = {
  name: "ସରସ୍ୱତୀ ଶିକ୍ଷା ମନ୍ଦିର",
  tagline: "Nurturing curious minds and building tomorrow's leaders.",
  established: "2001",
};

const TIMELINE = [
  { title: "2001 - The Beginning", text: "School started with a small group of students and teachers." },
  { title: "20XX - Growing Together", text: "New classrooms, library and laboratories were added." },
  { title: "Today - Moving Ahead", text: "Smart classes, sports facilities and a caring community." },
];

const VALUES = ["Integrity", "Respect", "Excellence", "Discipline", "Curiosity", "Teamwork"];

const PRINCIPAL = {
  name: "Smt. Jayashree Mohapatra",
  quote:
    "Education is not just about marks. It is about shaping character, building confidence and lighting the spark of curiosity in every child.",
  more:
    "Together with our dedicated teachers and supportive parents, we are committed to giving every student the guidance and opportunities they need to shine.",
  photo: principalImage,
};

const SCHOOL_PHOTO = schoolImg;

/* Photo ya placeholder - image na mile to colored box dikhega */
function Photo({ src, alt, hint }) {
  const [failed, setFailed] = React.useState(false);
  return (
    <div className="photo frame">
      {!failed && <img src={src} alt={alt} onError={() => setFailed(true)} />}
      {failed && <span>{hint}</span>}
    </div>
  );
}

export default function About() {
  return (
    <div className="about-page">
      {/* ============ HERO ============ */}
      <header className="hero">
        <div className="container">
          <span className="badge">ESTD. {SCHOOL.established}</span>
          <h1>{SCHOOL.name}</h1>
          <p>{SCHOOL.tagline}</p>
          <a href="#about" className="btn">Know Our Story</a>
        </div>
      </header>

      {/* ============ ABOUT ============ */}
      <section className="section" id="about">
        <div className="container about-grid">
          <div>
            <span className="eyebrow">About Us</span>
            <h2 className="section-title">A Legacy of Learning</h2>
            <div className="bar" />
            <p>
              {SCHOOL.name} is a place where every child is encouraged to learn, question and
              grow. We combine strong academics with sports, arts and values, so students become
              confident and caring individuals.
            </p>
            <p>
              What began as a small school with a handful of students has grown into a trusted
              institution loved by families across the city.
            </p>

            <div className="timeline">
              {TIMELINE.map((t) => (
                <div className="item" key={t.title}>
                  <strong>{t.title}</strong>
                  <span>{t.text}</span>
                </div>
              ))}
            </div>
          </div>

          <Photo src={SCHOOL_PHOTO} alt="School building" hint="Yahan school ki photo lagayein" />
        </div>
      </section>

      {/* ============ VISION & MISSION ============ */}
      <section className="section soft" id="vision">
        <div className="container">
          <div className="center">
            <span className="eyebrow">Our Purpose</span>
            <h2 className="section-title">Vision &amp; Mission</h2>
            <div className="bar" />
          </div>

          <div className="vm-grid">
            <div className="vm-card">
              <div className="icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h3>Our Vision</h3>
              <p>
                To be a school that inspires every student to dream big, think independently and
                contribute positively to society.
              </p>
            </div>

            <div className="vm-card">
              <div className="icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <h3>Our Mission</h3>
              <p>
                To provide quality education in a safe, joyful environment where students grow
                academically, socially and morally.
              </p>
            </div>
          </div>

          <div className="values">
            {VALUES.map((v) => (
              <span key={v}>{v}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PRINCIPAL MESSAGE ============ */}
      <section className="section" id="principal">
        <div className="container principal">
          <Photo src={PRINCIPAL.photo} alt="Principal" hint="Principal ki photo" />

          <div>
            <span className="eyebrow">From the Principal's Desk</span>
            <h2 className="section-title">A Message to Our Community</h2>
            <div className="bar" />
            <div className="quote-mark">&ldquo;</div>
            <blockquote>{PRINCIPAL.quote}</blockquote>
            <p className="more">{PRINCIPAL.more}</p>
            <div className="sign">
              <strong>{PRINCIPAL.name}</strong>
              <span>Principal, {SCHOOL.name}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}