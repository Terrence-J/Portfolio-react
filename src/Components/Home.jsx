import React from 'react'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'
import Footer from './Footer'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Navbar />
      <About/>
      <Contact />
      <Projects />
      <Footer />

      <Router>
      <Routes>

      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/footer" element={<Footer />} />
       </Routes>
       </Router>
       <Home/>
    </div>
  )
}

export default Home