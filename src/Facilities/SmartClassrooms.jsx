import React from "react";
import "./Facilities.css";
import classroom from "../assets/image/classroom.jpg";

export default function SmartClassrooms() {
  return (
    <div className="facility-detail">
      <img src={classroom} alt="Smart Classrooms" className="facility-detail-img" />
      <div className="facility-detail-content">
        <h2>Smart Classrooms</h2>
        <p>
          Our classrooms are equipped with interactive smart boards, projectors, and digital learning
          systems that transform traditional teaching into a more engaging experience.
        </p>
      </div>
    </div>
  );
}
