import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Projects from './Components/Projects';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


function App() {
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

      <About/>
      <Contact />
      <Projects />
      <Footer />



    </div>
  );
}

export default App;
