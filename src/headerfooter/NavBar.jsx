import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/image/schoollogo.png";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const wrapperRef = useRef(null);

  const toggleDropdown = (menu) => {
    setActiveDropdown((prev) => (prev === menu ? null : menu));
  };

  // Close dropdown when clicking outside wrapperRef
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if clicked element is a dropdown button
      const isDropdownButton = event.target.classList.contains('dropbtn') ||
        event.target.closest('.dropbtn');

      if (!isDropdownButton) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="School Logo" />
        </Link>
      </div>

      {/* Right side Nav links */}
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>

        <li className="dropdown">
          <button
            className="dropbtn"
            onClick={() => toggleDropdown("about")}
          >
            About ▾
          </button>

          {activeDropdown === "about" && (
            <ul className="dropdown-menu">
              <li><Link to="/about#school">About School</Link></li>
              {/* <li><Link to="/about#president">President</Link></li> */}
              <li><Link to="/about#secretary">Secretary</Link></li>
              <li><Link to="/about#principal">PradhanAcharya</Link></li>
              <li><Link to="/about#principal">Achievment</Link></li>
            </ul>
          )}
        </li>

        <li>
          <Link to="/admission">Admission</Link>
        </li>
        <li>
          <Link to="/academic">Academics</Link>
        </li>
        <li>
          <Link to="/faculty">Faculty</Link>
        </li>

        <li className="dropdown">
          <button
            className="dropbtn"
            onClick={() => toggleDropdown("facilities")}
          >
            Facilities ▾
          </button>
          {activeDropdown === "facilities" && (
            <ul className="dropdown-menu">
              <li><Link to="/facilities#library">Library</Link></li>
              <li><Link to="/facilities#sports">Sports</Link></li>
              <li><Link to="/facilities#transport">Transport</Link></li>
              <li><Link to="/facilities#transport">Co-curriculars</Link></li>
            </ul>
          )} 
        </li>

        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/holiday-list">Holiday List</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
