import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import HeroSection from './HeroSection';
import Navbar from './Navbar';
import Projects from './Projects';

const Routers = () => {
  return (
    <div>


     <Router>
         <Navbar />
        <Routes>
         <Route path="/" element={<HeroSection />} />
         <Route path="/about" element={<About/>} />
         <Route path="/contact" element={<Contact/>} />
         <Route path="/projects" element={<Projects/>} />
         <Route path="/footer" element={<Footer />} />
       </Routes>
      </Router>

    </div>
  )
}

export default Routers