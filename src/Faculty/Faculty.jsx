import React from "react";
import "./faculty.css";
import suchitra from "../assets/image/suchitra.jpg"

const FacultyTable = () => {
  const faculties = [
    {
      id: 1,
      name: "Mrs. Suchitra Khuntia",
      department: "Hindi Litrature",
      workExperience: "7 Years",
      image: suchitra, // replace with actual faculty image
    },
    {
      id: 2,
      name: "Prof. Anita",
      department: "Mathematics",
      workExperience: "7 Years",
      image: "https://via.placeholder.com/80",
    },
    {
      id: 3,
      name: "Dr. Meena",
      department: "Physics",
      workExperience: "12 Years",
      image: "https://via.placeholder.com/80",
    },
  ];

  return (
    <div className="faculty-container">
      <h2>Faculty Members</h2>

      <div className="faculty-list">
        {faculties.map((f) => (
          <div className="faculty-card" key={f.id}>
            <img src={f.image} alt={f.name} className="faculty-img" />
            <div className="faculty-info">
              <h3>{f.name}</h3>
              <p><strong>Department:</strong> {f.department}</p>
              <p><strong>Experience:</strong> {f.workExperience}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacultyTable;
