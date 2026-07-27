// import React, { useEffect } from "react";
// import "./SishuPrabesha.css";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import sishuImage from "../assets/image/sishu.jpg"; // replace with your actual image

// const SishuPrabesha = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   return (
//     <section className="sishu-section">
//       {/* Hero Section */}
//       <div className="sishu-hero">
//         <div className="sishu-hero-content" data-aos="fade-right" style={{paddingLeft:"30px",marginLeft:"50px"}}>
//           <h1>Welcome to <span>Sishu Prabesha</span></h1>
//           <p>
//             The first step of your child’s learning journey begins here! 
//             <strong> Sishu Prabesha</strong> is designed to make the 
//             transition from home to school smooth, joyful, and full of discovery. 
//             Through fun-filled activities, stories, and sensory experiences, 
//             children learn to communicate, express, and connect with the world around them.
//           </p>
//           <button
//             className="explore-btn"
//             onClick={() => window.scrollTo({ top: 800, behavior: "smooth" })}
//           >
//             Explore More
//           </button>
//         </div>

//         <div className="sishu-hero-image" data-aos="fade-left">
//           <img src={sishuImage} alt="Sishu Prabesha" />
//         </div>
//       </div>

//       {/* Learning Section */}
//       <div className="learning-section">
//         <h2 data-aos="fade-up">Our Learning Approach</h2>
//         <p className="learning-text" data-aos="fade-up">
//           We nurture each child’s curiosity and creativity through 
//           <strong> play-based learning</strong>. Our environment is vibrant and 
//           safe — where imagination meets education.
//         </p>

//         <div className="learning-grid">
//           {[
//             { title: "Play & Learn", icon: "🧩" },
//             { title: "Music & Rhythm", icon: "🎵" },
//             { title: "Art & Craft", icon: "🎨" },
//             { title: "Story Time", icon: "📖" },
//             { title: "Outdoor Fun", icon: "🌳" },
//             { title: "Team Activities", icon: "🤝" },
//           ].map((item, index) => (
//             <div
//               key={index}
//               className="learning-card"
//               data-aos="zoom-in"
//               data-aos-delay={index * 150}
//             >
//               <div className="icon">{item.icon}</div>
//               <h3>{item.title}</h3>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Cute Monkey Animation */}
//       {/* <div className="sishu-monkey" data-aos="fade-up">
//         🐒
//       </div> */}
//     </section>
//   );
// };

// export default SishuPrabesha;
import React, { useEffect } from "react";
import "./SishuPrabesha.css";
import AOS from "aos";
import "aos/dist/aos.css";
import sishuImage from "../assets/image/sishu.jpg";
import { useNavigate } from "react-router-dom";

const SishuPrabesha = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const learningItems = [
    { title: "Play & Learn", icon: "🧩", path: "/sishuprabesha/play-learn" },
    { title: "Music & Rhythm", icon: "🎵", path: "/sishuprabesha/music-rhythm" },
    { title: "Art & Craft", icon: "🎨", path: "/sishuprabesha/art-craft" },
    { title: "Story Time", icon: "📖", path: "/sishuprabesha/story-time" },
    { title: "Outdoor Fun", icon: "🌳", path: "/sishuprabesha/outdoor-fun" },
    { title: "Team Activities", icon: "🤝", path: "/sishuprabesha/team-activities" },
  ];

  return (
    <section className="sishu-section">
      {/* Hero Section */}
      <div className="sishu-hero">
        <div className="sishu-hero-content" data-aos="fade-right"  style={{paddingLeft:"30px",marginLeft:"50px"}}>
          <h1>
            Welcome to <span>Sishu Prabesha</span>
          </h1>
          <p>
            The first step of your child’s learning journey begins here! 
            <strong> Sishu Prabesha</strong> is designed to make the 
            transition from home to school smooth, joyful, and full of discovery.
          </p>
          <button
            className="explore-btn"
            onClick={() => window.scrollTo({ top: 800, behavior: "smooth" })}
          >
            Explore More
          </button>
        </div>

        <div className="sishu-hero-image" data-aos="fade-left">
          <img src={sishuImage} alt="Sishu Prabesha" />
        </div>
      </div>

      {/* Learning Section */}
      <div className="learning-section">
        <h2 data-aos="fade-up">Our Learning Approach</h2>
        <p className="learning-text" data-aos="fade-up">
          We nurture each child’s curiosity and creativity through 
          <strong> play-based learning</strong>. Our environment is vibrant and 
          safe — where imagination meets education.
        </p>

        <div className="learning-grid">
          {learningItems.map((item, index) => (
            <div
              key={index}
              className="learning-card"
              data-aos="zoom-in"
              data-aos-delay={index * 150}
              onClick={() => navigate(item.path)}
            >
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SishuPrabesha;
