<<<<<<< HEAD
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
=======


import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import TopHeader from "./headerfooter/TopHeader";
import NavBar from "./headerfooter/NavBar";
import Footer from "./headerfooter/Footer";
import HolidayList from "./Holiday/HolidayList";
import AdmissionPage from "./Admission/AdmissionPage";
import ContactPage from "./Contact/ContactPage";
import AcademicPage from "./Academics/AcademicPage";
import FacultyTable from "./Faculty/Faculty";
import Homepage from "./Home/homepage";
import AboutPage from "./About/AboutPage";

// ✅ Create a wrapper component to use useLocation inside Router
function AppContent() {
  const location = useLocation();
  console.log("Current Path:", location.pathname);

  return (
    <>
      <TopHeader />
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/holiday-list" element={<HolidayList />} />
        <Route path="/admission" element={<AdmissionPage />} />
        <Route path="/academic" element={<AcademicPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about-school" element={<AboutPage />} />
        <Route path="/faculty" element={<FacultyTable />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route
          path="/facilities/smart-classrooms"
          element={<SmartClassrooms />}
        />
        <Route path="/facilities/science-lab" element={<ScienceLab />} />
        <Route path="/facilities/library" element={<Library />} />
        <Route path="/facilities/sports" element={<Sports />} />
        <Route
          path="/facilities/musicAndArtsRoom"
          element={<MusicAndArtsRoom />}
        />
        <Route path="/facilities/transportation" element={<Transportation />} />
        <Route path="/gallery" element={<Gallery />} />

        {/* <Route path="/playschool" element={<PlaySchool />} /> */}
        <Route path="/sishuprabesha" element={<SishuPrabesha />} />
         <Route path="/sishuprabesha/play-learn" element={<PlayLearn />} />
>>>>>>> 5fdb13813ccad783bfd96ba761c834d35010c12e
      </Routes>
      <Footer />
    </>
  );
}

<<<<<<< HEAD
export default App;
=======
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
>>>>>>> 5fdb13813ccad783bfd96ba761c834d35010c12e
