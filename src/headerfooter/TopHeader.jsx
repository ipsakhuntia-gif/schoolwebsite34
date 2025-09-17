import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import "../headerFooter/TopBar.css";
function TopHeader() {
  return (
    <>
      <div className="topbar">
      <span className="contact-in">📞 9938850767, 9090451990</span>
      <span className="contact-in">✉️ ssmnkt@gmail.com</span>

      {/* Animated Text */}
      <div className="scroll-text">
        <span >Welcome to Swaraswati Shikhya Mandira,Naharakanta,BBSR</span>
      </div>

      
    </div>
    </>
  )
}

export default TopHeader
