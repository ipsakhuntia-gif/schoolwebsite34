// import React, { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import Library from "./Library";

// export default function Facilities() {
//   const location = useLocation();

//   useEffect(() => {
//     if (location.hash) {
//       const id = location.hash.replace("#", "");
//       const section = document.getElementById(id);
//       if (section) {
//         setTimeout(() => {
//           section.scrollIntoView({ behavior: "smooth" });
//         }, 200);
//       }
//     } else {
//       window.scrollTo(0, 0);
//     }
//   }, [location]);

//   return (
//     <div style={{ padding: "50px" }}>
//       <h1 style={{ textAlign: "center" }}>Our Facilities</h1>

//       <section id="library" style={{ padding: "60px 0" }}>
//         <h2>Library</h2>
//         <Library />
//       </section>

//       <section id="sports" style={{ padding: "60px 0" }}>
//         <h2>Sports</h2>
//         <p>We have both indoor and outdoor sports facilities for students.</p>
//       </section>

//       <section id="transport" style={{ padding: "60px 0" }}>
//         <h2>Transport</h2>
//         <p>Our school buses cover major routes with proper safety measures.</p>
//       </section>

//       <section id="co-curriculars" style={{ padding: "60px 0" }}>
//         <h2>Co-curriculars</h2>
//         <p>We conduct art, music, and cultural activities regularly.</p>
//       </section>
//     </div>
//   );
// }



























import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

export default function Facilities() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const section = document.getElementById(id);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 200);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div style={{ padding: "50px" }}>
      <h1 style={{ textAlign: "center" }}>Our Facilities</h1>

      <section id="library" style={{ padding: "60px 0" }}>
        <h2>Library</h2>
        <p>We have a well-stocked library with over 10,000 books and digital resources.</p>
        <Link to="/library" style={{ color: "blue", textDecoration: "underline" }}>
          Visit our dedicated Library page for more details
        </Link>
      </section>

      <section id="sports" style={{ padding: "60px 0" }}>
        <h2>Sports</h2>
        <p>We have both indoor and outdoor sports facilities for students.</p>
      </section>

      <section id="transport" style={{ padding: "60px 0" }}>
        <h2>Transport</h2>
        <p>Our school buses cover major routes with proper safety measures.</p>
      </section>

      <section id="co-curriculars" style={{ padding: "60px 0" }}>
        <h2>Co-curriculars</h2>
        <p>We conduct art, music, and cultural activities regularly.</p>
      </section>
    </div>
  );
}