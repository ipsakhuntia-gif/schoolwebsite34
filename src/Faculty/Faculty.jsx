// import React from "react";
// import "./faculty.css";
// import suchitra from "../assets/image/suchitra.jpg"

// const FacultyTable = () => {
//   const faculties = [
//     {
//       id: 1,
//       name: "Mrs. Suchitra Khuntia",
//       department: "Hindi Litrature",
//       workExperience: "7 Years",
//       image: suchitra, // replace with actual faculty image
//     },
//     {
//       id: 2,
//       name: "Prof. Anita",
//       department: "Mathematics",
//       workExperience: "7 Years",
//       image: "https://via.placeholder.com/80",
//     },
//     {
//       id: 3,
//       name: "Dr. Meena",
//       department: "Physics",
//       workExperience: "12 Years",
//       image: "https://via.placeholder.com/80",
//     },
//   ];

//   return (
//     <div className="faculty-container">
//       <h2>Faculty Members</h2>

//       <div className="faculty-list">
//         {faculties.map((f) => (
//           <div className="faculty-card" key={f.id}>
//             <img src={f.image} alt={f.name} className="faculty-img" />
//             <div className="faculty-info">
//               <h3>{f.name}</h3>
//               <p><strong>Department:</strong> {f.department}</p>
//               <p><strong>Experience:</strong> {f.workExperience}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FacultyTable;








import React from "react";
import "./faculty.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import suchitra from "../assets/image/suchitra.jpg";

const FacultyTable = () => {
  const faculties = [
    { id: 1, name: "Mrs. Suchitra Khuntia", department: "Hindi Literature", workExperience: "7 Years", image: suchitra },
    { id: 2, name: "Prof. Anita", department: "Mathematics", workExperience: "7 Years", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Dr. Meena", department: "Physics", workExperience: "12 Years", image: "https://via.placeholder.com/150" },
    { id: 4, name: "Dr. Rajesh", department: "Chemistry", workExperience: "10 Years", image: "https://via.placeholder.com/150" },
  ];

  return (
    <div className="faculty-container">
      <h2>Faculty Members</h2>

      <Swiper
        modules={[Navigation, Pagination]}   // <-- no Autoplay here
        spaceBetween={24}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        loop={false}                         // <- ensure loop is off
        autoplay={false}                     // <- explicit no-autoplay
        speed={600}
        className="faculty-carousel"
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        // extra safety flags
        allowTouchMove={true}
        grabCursor={true}
        watchOverflow={true}
      >
        {faculties.map((f) => (
          <SwiperSlide key={f.id}>
            <div className="faculty-card">
              <img src={f.image} alt={f.name} className="faculty-img-top" />
              <div className="faculty-info">
                <h3>{f.name}</h3>
                <p><strong>Department:</strong> {f.department}</p>
                <p><strong>Experience:</strong> {f.workExperience}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FacultyTable;
