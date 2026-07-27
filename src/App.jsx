import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./headerfooter/NavBar.jsx";
import TopHeader from "./headerfooter/TopHeader.jsx";
import Footer from "./headerfooter/Footer.jsx";

import Homepage from "./home/Homepage.jsx";
import AboutPage from "./About/AboutPage.jsx";
import PradhanaAcharya from "./About/PradhanaAcharya.jsx";
import AdmissionPage from "./Admission/AdmissionPage.jsx";
import AcademicPage from "./Academics/AcademicPage.jsx";
import Facilities from "./Facilities/Facilities.jsx";
import FacultyTable from "./Faculty/Faculty.jsx";
import Gallery from "./Gallery/Gallery.jsx";
import ContactPage from "./Contact/ContactPage.jsx";
import HolidayList from "./Holiday/HolidayList.jsx";
import PlaySchool from "./Playschool/PlaySchool.jsx";
import SishuPrabesha from "./Playschool/SishuPrabesha.jsx";

function App() {
  return (
    <>
      <TopHeader />
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about-school" element={<AboutPage />} />
        <Route path="/about-principal" element={<PradhanaAcharya />} />
        <Route path="/admission" element={<AdmissionPage />} />
        <Route path="/academic" element={<AcademicPage   />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/faculty" element={<FacultyTable />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/holiday-list" element={<HolidayList />} />
        <Route path="/sishuprabesha" element={<SishuPrabesha />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;