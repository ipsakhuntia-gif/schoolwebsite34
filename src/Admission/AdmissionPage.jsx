import React from 'react';
import './AdmissionPage.css';

const AdmissionPage = () => {
  return (
    <div className="admission-page">
      {/* Header Section */}
      <header className="school-header">
        <h1>SARASWATI SHIKHYA MANDIRA </h1>
        <p className="subtitle">A CBSE School From Hi-Tech Group</p>
        <p className="mission">
          The goal of education is not to increase the amount of knowledge but to create the possibilities for a child to invent and discover, to create men who are capable of doing new things.
        </p>
        <button className="download-btn">Click here to Download Application Form</button>
      </header>

      {/* Intro Section */}
      <section className="intro-section">
        <h2>Applying to Saraswati Shikhya Mandira</h2>
        <p>
          As you consider applying to Hi-Tech Public School, please take advantage of the information on our website to find out about Hi-Tech Public School's programmes, residences, staff and students, fees and admission process. Our website should provide you with all helpful information, including answers to some frequently asked questions. If you continue to have questions, please do not hesitate to contact us.
        </p>
      </section>

      {/* Admission Procedure Section */}
      <section className="admission-procedure">
        <h2>Admission Procedure</h2>
        <p className="note">(Admission will be made strictly on the basis of merit.)</p>
        
        <div className="procedure-grid">
          {/* Pre-nursery to UKG */}
          <div className="procedure-card">
            <h3>Pre-nursery, Nursery, LKG, UKG</h3>
            <ul>
              <li>Birth Certificate from the competent authority</li>
              <li>Incase of any chronic disease produce detailed information.</li>
              <li>Achievement record of previous school.</li>
              <li>Xerox copy of any ID proof of parents.</li>
            </ul>
          </div>

          {/* Std I to III */}
          <div className="procedure-card">
            <h3>Std I to III</h3>
            <ul>
              <li>Birth Certificate</li>
              <li>Academic Report Card Of Previous Class</li>
              <li>Proper Health Information.</li>
              <li>Transfer Certificate.</li>
              <li>Xerox copy of any ID proof of parents.</li>
            </ul>
          </div>

          {/* Std III to X */}
          <div className="procedure-card">
            <h3>Std III to X</h3>
            <ul>
              <li>Transfer Certificate</li>
              <li>Academic Report Card Of Previous Class</li>
              <li>Achievement Card if Any.</li>
              <li>Xerox copy of any ID proof of parents.</li>
            </ul>
          </div>

          {/* Std XI to XII */}
          <div className="procedure-card">
            <h3>Std XI to XII</h3>
            <ul>
              <li>Transfer Certificate</li>
              <li>Academic Report Card Of Previous Class</li>
              <li>Achievement Card if Any.</li>
              <li>Xerox copy of any ID proof of parents.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <footer className="admission-footer">
        <p>For more information, please contact the admission office.</p>
      </footer>
    </div>
  );
};

export default AdmissionPage;



