// import React, { useState } from 'react';
// import './ContactPage.css';

// const ContactPage = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     mobile: '',
//     email: '',
//     company: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission here
//     console.log('Form submitted:', formData);
//     alert('Thank you for your message! We will get back to you soon.');
//   };

//   return (
//     <div className="contact-page">
//       <div className="contact-container">
//         {/* Left Section with Children Illustration */}
//         <div className="contact-left">
//           <div className="children-illustration">
//             <div className="school-boy">
//               <div className="boy-head"></div>
//               <div className="boy-body"></div>
//               <div className="boy-bag"></div>
//             </div>
//             <div className="school-girl">
//               <div className="girl-head"></div>
//               <div className="girl-body"></div>
//               <div className="girl-bag"></div>
//             </div>
//           </div>
          
//           <div className="left-content">
//             <h2>GET IN TOUCH WITH US</h2>
//             <div className="form-row">
//               <div className="form-group">
//                 <input
//                   type="text"
//                   placeholder="Name*"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <input
//                   type="text"
//                   placeholder="Mobile*"
//                   name="mobile"
//                   value={formData.mobile}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//             </div>
            
//             <div className="form-row">
//               <div className="form-group">
//                 <input
//                   type="email"
//                   placeholder="Email*"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <input
//                   type="text"
//                   placeholder="Company"
//                   name="company"
//                   value={formData.company}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>
            
//             <div className="form-group">
//               <textarea
//                 placeholder="Your Message*"
//                 name="message"
//                 rows="4"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//               ></textarea>
//             </div>
            
//             <p className="description">
//               Enabling businesses to get competitive edge in the market by building scalable and extensible software and mobile applications.
//             </p>
            
//             <button type="submit" className="submit-btn" onClick={handleSubmit}>
//               Send Message
//             </button>
//           </div>
//         </div>

//         {/* Right Section with Contact Info */}
//         <div className="contact-right">
//           <h2>SCHEDULE MEETING</h2>
          
//           <div className="contact-info">
//             <div className="info-item">
//               <div className="icon office-icon">🏢</div>
//               <div className="info-content">
//                 <h3>School</h3>
//                 <p>At-Haridaspur, Po-Naharakanta,Bhubaneswar-752101</p>
//               </div>
//             </div>
            
//             <div className="info-item">
//               <div className="icon whatsapp-icon">💬</div>
//               <div className="info-content">
//                 <h3>WhatsApp</h3>
//                 <p>+91 9090451990</p>
//               </div>
//             </div>
            
//             <div className="info-item">
//               <div className="icon email-icon">✉️</div>
//               <div className="info-content">
//                 <h3>Email</h3>
//                 <p>ssmnkt@gmail.com</p>
//               </div>
//             </div>
//           </div>
          
          
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactPage;



















import React, { useState } from 'react';
import './ContactPage.css';

const initialForm = { name: '', mobile: '', email: '', message: '' };

const ContactPage = () => {
  const [formData, setFormData] = useState(initialForm);
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: send formData to your API here
    console.log('Form submitted:', formData);
    setSent(true);
    setFormData(initialForm);
  };

  return (
    <div className="contact-page">
      <div className="contact-head">
        <h1>Contact Us</h1>
        <p>We would love to hear from you.</p>
      </div>

      <div className="contact-card">
        <div className="contact-form-side">
          <h2>Send a message</h2>

          {sent ? (
            <div className="contact-done" role="status">
              <p>Thank you! We will get back to you soon.</p>
              <button type="button" className="submit-btn" onClick={() => setSent(false)}>
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <input type="text" name="name" placeholder="Name*" aria-label="Name"
                  value={formData.name} onChange={handleChange} required />
                <input type="tel" name="mobile" placeholder="Mobile*" aria-label="Mobile"
                  value={formData.mobile} onChange={handleChange} required />
              </div>
              <input type="email" name="email" placeholder="Email*" aria-label="Email"
                value={formData.email} onChange={handleChange} required />
              <textarea name="message" rows="5" placeholder="Your message*" aria-label="Your message"
                value={formData.message} onChange={handleChange} required />
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          )}
        </div>

        <div className="contact-info-side">
          <h2>Find us</h2>

          <div className="info-item">
            <div className="icon">🏢</div>
            <div>
              <h3>School</h3>
              <p>At-Haridaspur, Po-Naharakanta, Bhubaneswar-752101</p>
            </div>
          </div>

          <div className="info-item">
            <div className="icon">💬</div>
            <div>
              <h3>WhatsApp</h3>
              <p><a href="https://wa.me/919090451990" target="_blank" rel="noreferrer">+91 9090451990</a></p>
            </div>
          </div>

          <div className="info-item">
            <div className="icon">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
              </svg>
            </div>
            <div>
              <h3>Instagram</h3>
              <p><a href="https://www.instagram.com/ssmnkt_official/" target="_blank" rel="noreferrer">@ssmnkt_official</a></p>
            </div>
          </div>

          <div className="info-item">
            <div className="icon">✉️</div>
            <div>
              <h3>Email</h3>
              <p><a href="mailto:ssmnkt@gmail.com">ssmnkt@gmail.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;