

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
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
