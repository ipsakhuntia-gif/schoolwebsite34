import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Contact Us */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>
             <span>Saraswati Shikhya Mandira </span>
            Naharakanta,Bhubaneswar-752101
          </p>
          <p>📞 9938850767, 9090451990</p>
          <p>
            📧 ssmnkt@gmail.com 
          </p>
          {/* <div className="social-icons">
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div> */}
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About </a></li>
            <li><a href="#">Admission</a></li>
            <li><a href="#">Academics</a></li>
            <li><a href="#">Facilities</a></li>
            <li><a href="#">Holiday List</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
        </div>

        {/* Google Map */}
        <div className="footer-section map">
          <iframe
            title="School Location"
             src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d4810.038202837001!2d85.8740587878624!3d20.328277788842435!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1757671146770!5m2!1sen!2sin" 
            width="100%"
            height="250"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
