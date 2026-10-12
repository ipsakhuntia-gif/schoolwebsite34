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
          <p>
            📞{" "}
            <a
              href="https://wa.me/919090451990"
              target="_blank"
              rel="noreferrer"
              aria-label="Chat on WhatsApp"
              style={{ display: "inline-block", verticalAlign: "middle", lineHeight: 0 }}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <path
                  fill="#25D366"
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                />
              </svg>
            </a>{" "}
            9938850767, 9090451990
          </p>
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
            <li><a href="/">Home</a></li>
            <li><a href="#">About </a></li>
            <li><a href="/admission">Admission</a></li>
            <li><a href="#">Academics</a></li>
            <li><a href="">Facilities</a></li>
            <li><a href="/faculty">Faculty</a></li>
            <li><a href="/holiday-list">Holiday List</a></li>
            <li><a href="/contact">Contact us</a></li>
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