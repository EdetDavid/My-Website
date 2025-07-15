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

    if (darkMode) {
      body.style.backgroundImage = "none";
      body.style.backgroundColor = "#001222";
      body.style.transition = "0.6s all ease";
      textDark?.classList.add("text-white");
      contactBtn?.classList.add("contact-btn-dark");
      gitLink?.classList.add("text-danger");
    } else {
      body.style.backgroundColor = "none";
      body.style.backgroundImage = "";
      body.style.transition = "0.6s all ease";
      textDark?.classList.remove("text-white");
      contactBtn?.classList.remove("contact-btn-dark");
      gitLink?.classList.remove("text-danger");
    }

    const links = document.querySelectorAll(".hide-nav");
    links.forEach((link) => {
      link.addEventListener("click", () => {
        const navbarCollapse = document.querySelector(".navbar-collapse");
        if (navbarCollapse.classList.contains("show")) {
          navbarCollapse.classList.remove("show");
        }
      });
    });
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
      className="navbar navbar-expand-sm navbar-light bg-white shadow"
    >
      <NavLink className="navbar-brand mx-3 hide-nav" to="/">
        {darkMode ? (
          <img src={logoDark} alt="logo" className="logo-dark" />
        ) : (
          <img src={logoLight} alt="logo" className="logo-light" />
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
              to="/home"
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
          <a href="#contact">
            <button
              type="button"
              id="contact-btn"
              className="btn btn-outline-dark hide-nav my-sm-0"
            >
              Contact
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
