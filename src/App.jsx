import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopHeader from './headerfooter/TopHeader'
import NavBar from './headerfooter/NavBar';

function App() {
  return (
    <Router>
      <TopHeader />
      <NavBar/>
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/academic" element={<Academic />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/holiday-list" element={<HolidayList />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  )
}

export default App
