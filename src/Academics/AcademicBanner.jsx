import React from "react";
import { Link } from "react-router-dom";
import "./AcademicBanner.css";


function AcademicBanner() {
  return (
    <>
    <div className="academic-banner">
      <div className="overlay">
        <h1>Academic</h1>
        <p>
          <Link to="/" className="breadcrumb">Home</Link>
          <span> • </span>
          <span>Academic</span>
        </p>
      </div>
    </div>

    
    </>
  );
}

export default AcademicBanner;
