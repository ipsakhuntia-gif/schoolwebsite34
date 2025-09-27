


import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopHeader from './headerfooter/TopHeader'
import NavBar from './headerfooter/NavBar';
import Footer from './headerfooter/Footer';
import HolidayList from './Holiday/HolidayList';
import AdmissionPage from './Admission/AdmissionPage';
import ContactPage from './Contact/ContactPage';
import AcademicPage from './Academics/AcademicPage';
import FacultyTable from './Faculty/Faculty';
import Homepage from './Home/homepage';
// import HomeSection from "./Home/HomeSection"




function App() {
  return (
    <Router>
     
      <TopHeader />
      <NavBar/>
      <Routes>
        
       <Route path="/" element={<Homepage/>} />
        <Route path="/holiday-list" element={<HolidayList />} />
        <Route path="/admission" element={<AdmissionPage />} />
        <Route path="/academic" element={<AcademicPage />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route path="/faculty" element={<FacultyTable />} />

      </Routes>
      <Footer/>
    </Router>
    
  )
}

export default App