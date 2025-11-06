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

<<<<<<< HEAD

// import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import TopHeader from './headerfooter/TopHeader'
// import NavBar from './headerfooter/NavBar';
// import Footer from './headerfooter/Footer';
// import HolidayList from './Holiday/HolidayList';
// import AdmissionPage from './Admission/AdmissionPage';
// import ContactPage from './Contact/ContactPage';
// import AcademicPage from './Academics/AcademicPage';
// import FacultyTable from './Faculty/Faculty';
// import Homepage from './Home/homepage';
// import Facilities from './Facilities/Facilities';
// // import Library from "./Facilities/Library";
// // import HomeSection from "./Home/HomeSection"




// function App() {
//   return (
//     <Router>
     
//       <TopHeader />
//       <NavBar/>
//       <Routes>
        
//        <Route path="/" element={<Homepage/>} />
//         <Route path="/holiday-list" element={<HolidayList />} />
//         <Route path="/admission" element={<AdmissionPage />} />
//         <Route path="/academic" element={<AcademicPage />} />
//         <Route path="/contact" element={<ContactPage />} />
//         <Route path="/contact" element={<ContactPage />} />
//         <Route path="/faculty" element={<FacultyTable />} />
//         <Route path="/facilities" element={< Facilities/>} />
        
//       </Routes>
//       <Footer/>
//     </Router>
    
//   )
// }

// export default App;






















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
import Library from './Facilities/Library';
import Facilities from './Facilities/Facilities';
import SmartClassrooms from './Facilities/SmartClassrooms';
import ScienceLab from './Facilities/ScienceLab';
import Sports from './Facilities/Sports';
import MusicAndArtsRoom from './Facilities/MusicAndArtsRoom';
import Transportation from './Facilities/Transportation';
// import AboutPage from './About/AboutPage';
// import HomeSection from "./Home/HomeSection"




function App() {
=======
>>>>>>> f916397ad874155c45d2c44f28fb9c371646c8c8
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
<<<<<<< HEAD
        {/* <Route path="/about" element={<AboutPage />} /> */}
        <Route path="/faculty" element={<FacultyTable />} />
        <Route path="/library" element={<Library />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/facilities/smart-classrooms" element={<SmartClassrooms />} />
        <Route path="/facilities/science-lab" element={<ScienceLab />} />
        <Route path="/facilities/library" element={<Library />} />
        <Route path="/facilities/sports" element={<Sports />} />
        <Route path="/facilities/musicAndArtsRoom" element={<MusicAndArtsRoom />} />
        <Route path="/facilities/transportation" element={<Transportation />} />



=======
        <Route path="/about-school" element={<AboutPage />} />
        <Route path="/faculty" element={<FacultyTable />} />
>>>>>>> f916397ad874155c45d2c44f28fb9c371646c8c8
      </Routes>
      <Footer />
    </>
  );
}

<<<<<<< HEAD
export default App;
=======
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
>>>>>>> f916397ad874155c45d2c44f28fb9c371646c8c8
