import React, { useState } from 'react';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        {/* Left Section with Children Illustration */}
        <div className="contact-left">
          <div className="children-illustration">
            <div className="school-boy">
              <div className="boy-head"></div>
              <div className="boy-body"></div>
              <div className="boy-bag"></div>
            </div>
            <div className="school-girl">
              <div className="girl-head"></div>
              <div className="girl-body"></div>
              <div className="girl-bag"></div>
            </div>
          </div>
          
          <div className="left-content">
            <h2>GET IN TOUCH WITH US</h2>
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Name*"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Mobile*"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Email*"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <div className="form-group">
              <textarea
                placeholder="Your Message*"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <p className="description">
              Enabling businesses to get competitive edge in the market by building scalable and extensible software and mobile applications.
            </p>
            
            <button type="submit" className="submit-btn" onClick={handleSubmit}>
              Send Message
            </button>
          </div>
        </div>

        {/* Right Section with Contact Info */}
        <div className="contact-right">
          <h2>SCHEDULE MEETING</h2>
          
          <div className="contact-info">
            <div className="info-item">
              <div className="icon office-icon">🏢</div>
              <div className="info-content">
                <h3>School</h3>
                <p>At-Haridaspur, Po-Naharakanta,Bhubaneswar-752101</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="icon whatsapp-icon">💬</div>
              <div className="info-content">
                <h3>WhatsApp</h3>
                <p>+91 9090451990</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="icon email-icon">✉️</div>
              <div className="info-content">
                <h3>Email</h3>
                <p>ssmnkt@gmail.com</p>
              </div>
            </div>
          </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default ContactPage;