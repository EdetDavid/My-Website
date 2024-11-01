import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import "./App.css";
import "./assets/css/about.css";
import "./assets/css/style.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects/projects";
import AOS from "aos";
import Footer from "./components/footer";
import "aos/dist/aos.css";

const App = () => {
  const [loading, setLoading] = useState(true);
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
    }, 2000);
  }, []);

  return (
    <div id="App">
      {loading ? (
        <div id="preloader"></div>
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/projects" element={<Projects />} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
