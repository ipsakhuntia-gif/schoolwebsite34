import React from "react";
import "./Facilities.css";

export default function ScienceLab() {
  return (
    <div className="facility-detail">
      <img src="/images/science-lab.jpg" alt="Science Lab" className="facility-detail-img" />
      <div className="facility-detail-content">
        <h2>Science Laboratories</h2>
        <p>
          Our school features state-of-the-art labs for physics, chemistry, and biology, ensuring students
          can learn through practical experiments and exploration.
        </p>
      </div>
    </div>
  );
}
