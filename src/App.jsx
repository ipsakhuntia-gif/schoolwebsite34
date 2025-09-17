// import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import TopHeader from './headerfooter/TopHeader'
// import NavBar from './headerfooter/NavBar';
// import Footer from './headerfooter/Footer';


// function App() {
//   return (
//     <Router>
//       <TopHeader />
//       <NavBar/>
//       <Routes>
        
//         {/* <Route path="/home" element={<Home />} /> */}
//         {/* <Route path="/about" element={<About />} />
//         <Route path="/admission" element={<Admission />} />
//         <Route path="/academic" element={<Academic />} />
//         <Route path="/facilities" element={<Facilities />} />
//         <Route path="/holiday-list" element={<HolidayList />} />
//         <Route path="/contact" element={<Contact />} /> */}
//       </Routes>
//       <Footer/>
//     </Router>
//   )
// }

// export default App


import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopHeader from './headerfooter/TopHeader'
import NavBar from './headerfooter/NavBar';
import Footer from './headerfooter/Footer';
import HolidayList from './Holiday/HolidayList';
import AdmissionPage from './Admission/AdmissionPage';
import ContactPage from './Contact/ContactPage';
import AcademicPage from './Academics/AcademicPage';

function App() {
  return (
    <Router>
      <TopHeader />
      <NavBar/>
      <Routes>
        {/* Add the HolidayList route */}
        <Route path="/holiday-list" element={<HolidayList />} />
        <Route path="/admission" element={<AdmissionPage />} />
        <Route path="/academic" element={<AcademicPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* Your other routes */}
        {/* <Route path="/home" element={<Home />} /> */}
        {/* <Route path="/about" element={<About />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/academic" element={<Academic />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer/>
    </Router>
    
  )
}

export default App