import React, { useEffect, useState } from "react";
import { useDarkMode } from "../context/DarkModeContext";
import logoDark from "../assets/images/logo-dark.png";
import logoLight from "../assets/images/logo-light.png";
import resumePdf from "../assets/documents/Edet_David_Nsikak.pdf";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { darkMode, setDarkMode } = useDarkMode();
  const [isDownloading, setIsDownloading] = useState(false);
  const [showToggleText, setShowToggleText] = useState(false);

  useEffect(() => {
    const body = document.getElementById("App");
    const textDark = document.querySelector(".text-dark");
    const gitLink = document.querySelector("#github-link");
    const contactBtn = document.querySelector("#contact-btn");

    // Only proceed if body element exists
    if (body) {
      if (darkMode) {
        body.style.backgroundImage = "none";
        body.style.backgroundColor = "#001222";
        body.style.transition = "0.6s all ease";
      } else {
        body.style.backgroundImage = "linear-gradient(to right, #cc2b5e, #753a88)";
        body.style.backgroundColor = "#001222";
        body.style.transition = "0.6s all ease";
      }
    }

    // Update classes only if elements exist
    if (textDark) {
      if (darkMode) {
        textDark.classList.add("text-white");
      } else {
        textDark.classList.remove("text-white");
      }
    }

    if (contactBtn) {
      if (darkMode) {
        contactBtn.classList.add("contact-btn-dark");
      } else {
        contactBtn.classList.remove("contact-btn-dark");
      }
    }

    if (gitLink) {
      if (darkMode) {
        gitLink.classList.add("text-danger");
      } else {
        gitLink.classList.remove("text-danger");
      }
    }

    // Handle nav links
    const links = document.querySelectorAll(".hide-nav");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    const handleClick = () => {
      if (navbarCollapse?.classList.contains("show")) {
        navbarCollapse.classList.remove("show");
      }
    };

    links.forEach((link) => {
      link.addEventListener("click", handleClick);
    });

    // Cleanup event listeners
    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleClick);
      });
    };
  }, [darkMode]);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  const handleDownloadResume = async () => {
    setIsDownloading(true);
    try {
      const response = await fetch(resumePdf);
      if (!response.ok) {
        throw new Error("Failed to download resume");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Edet_David_Nsikak.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading resume:", error);
      alert("Failed to download resume. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <nav
      id="navbar"
      className="navbar navbar-expand-sm navbar-light bg-white shadow fixed-top"
      role="navigation"
      aria-label="Main navigation"
    >
      <NavLink className="navbar-brand mx-3 hide-nav" to="/" aria-label="Homepage">
        {darkMode ? (
          <img src={logoDark} alt="Dvooskid Codes logo" className="logo-dark" />
        ) : (
          <img src={logoLight} alt="Dvooskid Codes logo" className="logo-light" />
        )}
      </NavLink>

      <button
        className="navbar-toggler d-lg-none mx-3"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse w-100 px-5 justify-content-between align-content-center"
        id="collapsibleNavId"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              className="nav-link active hide-nav"
              to="/"
              aria-current="page"
            >
              Home <span className="visually-hidden">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link hide-nav" to="/about">
              About
            </NavLink>
          </li>
          <li className="nav-item dropdown">
            <NavLink
              className="nav-link dropdown-toggle"
              to="/"
              id="dropdownId"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Menu
            </NavLink>
            <div className="dropdown-menu mb-2" aria-labelledby="dropdownId">
              <NavLink className="dropdown-item hide-nav" to="/">
                Home
              </NavLink>
              <NavLink className="dropdown-item hide-nav" to="/about">
                About
              </NavLink>
              <NavLink className="dropdown-item hide-nav" to="/projects">
                Projects
              </NavLink>
              <NavLink
                className="dropdown-item hide-nav"
                to="https://mywebsite-backend-la9g.onrender.com/admin/"
              >
                Admin
              </NavLink>
            </div>
          </li>
        </ul>

        <div className="d-inline-flex align-items-center">
          {/* Resume Download Button */}
          <button
            onClick={handleDownloadResume}
            className="btn resume-btn me-1 hide-nav"
            disabled={isDownloading}
            aria-label="Download resume"
          >
            {isDownloading ? (
              <span>
                <i className="fas fa-spinner fa-spin me-1"></i> Downloading...
              </span>
            ) : (
              <span>
                <i className="fas fa-download me-1"></i> Resume
              </span>
            )}
          </button>

          {/* Dark Mode Toggle Button */}
          <div className="darkmode-toggle-wrapper position-relative">
            <button
              id="darkmode-btn"
              type="button"
              className={
                darkMode ? "btn btn-warning me-2" : "btn btn-secondary me-2"
              }
              onClick={handleDarkModeToggle}
              onMouseEnter={() => setShowToggleText(true)}
              onMouseLeave={() => setShowToggleText(false)}
              style={{ position: "relative" }}
              aria-pressed={darkMode}
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              <i
                className={
                  darkMode ? "fa fa-sun text-white me-1" : "fa fa-moon text-white me-1"
                }
                style={{ fontSize: "1.2rem" }}
              ></i>
            </button>
            {showToggleText && (
              <span className="darkmode-toggle-text">
                {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              </span>
            )}
          </div>

          {/* Contact Button */}
          <button
            type="button"
            id="contact-btn"
            className="btn btn-outline-dark hide-nav my-sm-0"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
                contactSection.focus();
              }
            }}
            aria-label="Scroll to contact section"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
