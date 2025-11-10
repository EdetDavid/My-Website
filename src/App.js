import React, { Suspense, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/navbar";
import BackgroundMusic from "./components/music/BackgroundMusic";
import Footer from "./components/footer";
import ErrorBoundary from "./components/ErrorBoundary";
import Preloader from "./components/Preloader";
import { DarkModeProvider } from "./context/DarkModeContext";
import AOS from "aos";
import "aos/dist/aos.css";

// CSS imports
import "./App.css";
import "./assets/css/about.css";
import "./assets/css/style.css";

// Lazy load page components
const Home = React.lazy(() => import("./pages/home/home"));
const About = React.lazy(() => import("./pages/about/About"));
const Projects = React.lazy(() => import("./pages/projects/projects"));
const NotFound = React.lazy(() => import("./pages/notfound/NotFound"));

const App = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
    });

    // Simulate loading time and resources loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Show loader for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <DarkModeProvider>
      <div className="App" id="App">
        {isLoading ? (
          <Preloader />
        ) : (
          <>
            <Navbar />
            <BackgroundMusic />

            <main id="main-content" tabIndex="-1" role="main">
              <ErrorBoundary>
                <Suspense fallback={<Preloader />}>
                  <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Suspense>
              </ErrorBoundary>
            </main>

            <Footer />
          </>
        )}
      </div>
    </DarkModeProvider>
  );
};

export default App;
