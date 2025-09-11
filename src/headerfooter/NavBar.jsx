import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/image/schoollogo.png";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <nav className="navbar">
      {/* Left side Logo */}
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="School Logo" />
        </Link>
      </div>

      {/* Right side Nav links */}
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>

        <li
          className="dropdown"
          onMouseEnter={() => setActiveDropdown("about")}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <Link to="/about" onClick={() => toggleDropdown("about")}>
            About ▾
          </Link>
          {activeDropdown === "about" && (
            <ul className="dropdown-menu">
              <li><Link to="/about#school">About School</Link></li>
              <li><Link to="/about#president">President</Link></li>
              <li><Link to="/about#secretary">Secretary</Link></li>
              <li><Link to="/about#principal">Principal</Link></li>
            </ul>
          )}
        </li>

        <li><Link to="/admission">Admission</Link></li>
        <li><Link to="/academic">Academic</Link></li>

        <li
          className="dropdown"
          onMouseEnter={() => setActiveDropdown("facilities")}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <Link to="/facilities" onClick={() => toggleDropdown("facilities")}>
            Facilities ▾
          </Link>
          {activeDropdown === "facilities" && (
            <ul className="dropdown-menu">
              <li><Link to="/facilities#library">Library</Link></li>
              <li><Link to="/facilities#sports">Sports</Link></li>
              <li><Link to="/facilities#transport">Transport</Link></li>
            </ul>
          )}
        </li>

        <li><Link to="/holiday-list">Holiday List</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
