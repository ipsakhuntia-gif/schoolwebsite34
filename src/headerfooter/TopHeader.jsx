import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import "../headerFooter/TopBar.css";
function TopHeader() {
  return (
    <>
      <div className="topbar">
      <span className="contact-info">📞 9938079155, 9439084371</span>
      <span className="contact-info">✉️ admissionathps@gmail.com</span>

      {/* Animated Text */}
      <div className="scroll-text">
        <span >Welcome to Swaraswati Shikhya Mandira,Naharakanta,BBSR</span>
      </div>

      {/* Social Icons */}
      <div className="social-icons">
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaLinkedinIn /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaYoutube /></a>
      </div>
    </div>
    </>
  )
}

export default TopHeader
