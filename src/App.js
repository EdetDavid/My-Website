import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import "./App.css";
import "./assets/css/about.css";
import "./assets/css/style.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import About from "./pages/about/About";
import Projects from "./pages/projects/projects";
import musicFile from "./assets/music/mozart.mp3";
import BackgroundMusic from "./components/music/BackgroundMusic";
import NotFound from "./pages/notfound/NotFound";
import AOS from "aos";
import Footer from "./components/footer";
import "aos/dist/aos.css";
import { DarkModeProvider } from './context/DarkModeContext';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in",
      once: false,
    });
  }, []);
  useEffect(() => {
    const preloader = document.getElementById("preloader");

    setTimeout(() => {
      preloader.style.display = "none";
      setLoading(false);
      setShowNavbar(true);
    }, 2000);
  }, []);

  return (
    <DarkModeProvider>
      {showNavbar && <Navbar />}
      {/* Neon floating particles */}
      <div className="neon-particle" style={{top: '10%', left: '15%', width: 18, height: 18, background: 'radial-gradient(circle, #cc2b5e 0%, #753a88 80%, transparent 100%)', animationDelay: '0s'}}></div>
      <div className="neon-particle" style={{top: '60%', left: '80%', width: 24, height: 24, background: 'radial-gradient(circle, #753a88 0%, #cc2b5e 80%, transparent 100%)', animationDelay: '2s'}}></div>
      <div className="neon-particle" style={{top: '40%', left: '50%', width: 14, height: 14, background: 'radial-gradient(circle, #cc2b5e 0%, #753a88 80%, transparent 100%)', animationDelay: '4s'}}></div>
      <div className="neon-particle" style={{top: '80%', left: '30%', width: 20, height: 20, background: 'radial-gradient(circle, #753a88 0%, #cc2b5e 80%, transparent 100%)', animationDelay: '6s'}}></div>
      <div id="App">
        {loading ? (
          <div id="preloader"></div>
        ) : (
          <>
            <BackgroundMusic src={musicFile} />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/projects" element={<Projects />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </>
        )}
      </div>
    </DarkModeProvider>
  );
};

export default App;
