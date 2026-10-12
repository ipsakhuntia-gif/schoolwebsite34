
// import React from "react";
// import "./faculty.css";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import suchitra from "../assets/image/suchitra.jpg";

// const FacultyTable = () => {
//   const faculties = [
//     { id: 1, name: "Mrs. Suchitra Khuntia", department: "Hindi Literature", workExperience: "7 Years", image: suchitra },
//     { id: 2, name: "Prof. Anita", department: "Mathematics", workExperience: "7 Years", image: "https://via.placeholder.com/150" },
//     { id: 3, name: "Dr. Meena", department: "Physics", workExperience: "12 Years", image: "https://via.placeholder.com/150" },
//     { id: 4, name: "Dr. Rajesh", department: "Chemistry", workExperience: "10 Years", image: "https://via.placeholder.com/150" },
//   ];

//   return (
//     <div className="faculty-container">
//       <h2>Faculty Members</h2>

//       <Swiper
//         modules={[Navigation, Pagination]}   // <-- no Autoplay here
//         spaceBetween={24}
//         slidesPerView={2}
//         navigation
//         pagination={{ clickable: true }}
//         loop={false}                         // <- ensure loop is off
//         autoplay={false}                     // <- explicit no-autoplay
//         speed={600}
//         className="faculty-carousel"
//         breakpoints={{
//           0: { slidesPerView: 1 },
//           768: { slidesPerView: 2 },
//           1024: { slidesPerView: 3 },
//         }}
//         // extra safety flags
//         allowTouchMove={true}
//         grabCursor={true}
//         watchOverflow={true}
//       >
//         {faculties.map((f) => (
//           <SwiperSlide key={f.id}>
//             <div className="faculty-card">
//               <img src={f.image} alt={f.name} className="faculty-img-top" />
//               <div className="faculty-info">
//                 <h3>{f.name}</h3>
//                 <p><strong>Department:</strong> {f.department}</p>
//                 <p><strong>Experience:</strong> {f.workExperience}</p>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default FacultyTable;























import React, { useState } from "react";
import "./faculty.css";

import suchitra from "../assets/image/suchitra.jpg";

const faculties = [
  { id: 1, name: "Mrs. Suchitra Khuntia", department: "Hindi Literature", workExperience: "7 Years", image: suchitra, hue: 28 },
  { id: 2, name: "Prof. Anita", department: "Mathematics", workExperience: "7 Years", image: null, hue: 215 },
  { id: 3, name: "Dr. Meena", department: "Physics", workExperience: "12 Years", image: null, hue: 265 },
  { id: 4, name: "Dr. Rajesh", department: "Chemistry", workExperience: "10 Years", image: null, hue: 160 },
  { id: 4, name: "Dr. Rajesh", department: "Chemistry", workExperience: "10 Years", image: null, hue: 160 },
  { id: 4, name: "Dr. Rajesh", department: "Chemistry", workExperience: "10 Years", image: null, hue: 160 },
  { id: 4, name: "Dr. Rajesh", department: "Chemistry", workExperience: "10 Years", image: null, hue: 160 },
  { id: 4, name: "Dr. Rajesh", department: "Chemistry", workExperience: "10 Years", image: null, hue: 160 },
  { id: 4, name: "Dr. Rajesh", department: "Chemistry", workExperience: "10 Years", image: null, hue: 160 },
  { id: 4, name: "Dr. Rajesh", department: "Chemistry", workExperience: "10 Years", image: null, hue: 160 },
  { id: 4, name: "Dr. Rajesh", department: "Chemistry", workExperience: "10 Years", image: null, hue: 160 },
  { id: 4, name: "Dr. Rajesh", department: "Chemistry", workExperience: "10 Years", image: null, hue: 160 },
  { id: 4, name: "Dr. Rajesh", department: "Chemistry", workExperience: "10 Years", image: null, hue: 160 },
  { id: 4, name: "Dr. Rajesh", department: "Chemistry", workExperience: "10 Years", image: null, hue: 160 },
  { id: 4, name: "Dr. Rajesh", department: "Chemistry", workExperience: "10 Years", image: null, hue: 160 },
  
];

const MAX_TICKS = 15;

const initials = (name) =>
  name
    .replace(/^(Mrs?\.|Dr\.|Prof\.)\s*/i, "")
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

const years = (s) => parseInt(s, 10) || 0;

function Portrait({ person, className }) {
  const [failed, setFailed] = useState(false);
  if (person.image && !failed) {
    return (
      <img
        src={person.image}
        alt={person.name}
        className={className}
        onError={() => setFailed(true)}
      />
    );
  }
  return (
    <div className={`${className} fac-mono`} role="img" aria-label={person.name}>
      {initials(person.name)}
    </div>
  );
}

const FacultyTable = () => {
  const [activeId, setActiveId] = useState(faculties[0].id);
  const active = faculties.find((f) => f.id === activeId);
  const yrs = years(active.workExperience);

  return (
    <section className="fac" style={{ "--hue": active.hue }}>
      <h2 className="fac-title">Our Faculty</h2>

      <div className="fac-layout">
        {/* Spotlight */}
        <article className="fac-spot" key={active.id} aria-live="polite">
          <Portrait person={active} className="fac-spot-img" />
          <div className="fac-spot-body">
            <p className="fac-dept">{active.department}</p>
            <h3 className="fac-name">{active.name}</h3>

            <div className="fac-exp">
              <span className="fac-exp-num">{yrs}</span>
              <span className="fac-exp-label">years teaching</span>
            </div>
            <div className="fac-ticks" aria-hidden="true">
              {Array.from({ length: MAX_TICKS }, (_, i) => (
                <span key={i} className={i < yrs ? "on" : ""} />
              ))}
            </div>
          </div>
        </article>

        {/* Roster */}
        <ul className="fac-roster">
          {faculties.map((f) => (
            <li key={f.id}>
              <button
                type="button"
                className="fac-row"
                aria-pressed={f.id === activeId}
                style={{ "--row-hue": f.hue }}
                onClick={() => setActiveId(f.id)}
              >
                <Portrait person={f} className="fac-row-img" />
                <span className="fac-row-text">
                  <span className="fac-row-name">{f.name}</span>
                  <span className="fac-row-dept">{f.department}</span>
                </span>
                <span className="fac-row-yrs">{years(f.workExperience)} yrs</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FacultyTable;