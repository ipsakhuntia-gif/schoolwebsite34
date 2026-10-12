
// src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/image/schoollogo.png";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false); // mobile hamburger
  const wrapperRef = useRef(null);

  const toggleDropdown = (menu) => {
    setActiveDropdown((prev) => (prev === menu ? null : menu));
  };

  // Close dropdown when clicking outside wrapperRef
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Optional keyboard: close on Escape
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
        setMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  // Close the mobile menu after any link is clicked
  const handleLinkClick = (e) => {
    if (e.target.closest("a")) {
      setMenuOpen(false);
      setActiveDropdown(null);
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="School Logo" />
        </Link>
      </div>

      {/* Hamburger button (visible only on small screens) */}
      <button
        type="button"
        className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
        onClick={() => setMenuOpen((o) => !o)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="main-menu"
      >
        <span />
        <span />
        <span />
      </button>

      {/* wrap nav in ref so outside clicks can be detected */}
      <ul
        id="main-menu"
        className={`nav-links ${menuOpen ? "open" : ""}`}
        ref={wrapperRef}
        onClick={handleLinkClick}
      >
        <li>
          <Link to="/">Home</Link>
        </li>

        <li className="dropdown">
          {/* type="button" prevents accidental form submit */}
          <button
            type="button"
            className="dropbtn"
            onClick={() => toggleDropdown("about")}
            aria-expanded={activeDropdown === "about"}
            aria-controls="about-menu"
          >
            About ▾
          </button>

          {activeDropdown === "about" && (
            <ul id="about-menu" className="dropdown-menu" role="menu">
              <li role="none">
                <Link role="menuitem" to="/about-school">
                  About School
                </Link>
              </li>
              <li role="none">
                <Link role="menuitem" to="/about-secretary">
                  Secretary
                </Link>
              </li>
              <li role="none">
                <Link role="menuitem" to="/about-principal">
                  Pradhanacharya
                </Link>
              </li>
              <li role="none">
                <Link role="menuitem" to="/about-achievement">
                  Achievement
                </Link>
              </li>
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

        <li>
          <Link className="dropbtn" to="/facilities">
            Facilities
          </Link>
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