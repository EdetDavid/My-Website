// src/components/navbar.jsx
import React, { useEffect, useState, useRef } from "react";
import { useDarkMode } from "../context/DarkModeContext";
import { NavLink } from "react-router-dom";
import { FaDownload, FaMoon, FaSun } from "react-icons/fa";
import logoLight from "../assets/images/logo-light.png";
import logoDark from "../assets/images/logo-dark.png";
import "./navbar.css";

const Navbar = () => {
  const { darkMode, setDarkMode } = useDarkMode();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollTimeout, setScrollTimeout] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);
  const navbarRef = useRef(null);

  useEffect(() => {
    const body = document.getElementById("App");
    if (!body) return;
    body.style.transition = "0.6s all ease";
    body.style.backgroundColor = darkMode ? "#001222" : "#001222";
    body.style.backgroundImage = darkMode
      ? "none"
      : "linear-gradient(to right, #cc2b5e, #753a88)";
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      if (y < lastScrollY || y < 100) setIsNavbarVisible(true);
      else setIsNavbarVisible(false);
      setLastScrollY(y);
      if (scrollTimeout) clearTimeout(scrollTimeout);
      const t = setTimeout(() => setIsNavbarVisible(true), 1500);
      setScrollTimeout(t);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [lastScrollY, scrollTimeout]);

  const handleDarkModeToggle = () => setDarkMode(!darkMode);

  const handleContactScroll = () => {
    const c = document.getElementById("contact");
    if (c) c.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
    setActiveMenu(null);
  };

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
    setActiveMenu(null);
  };

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
  ];

  const dropdownItems = [
    { label: "Admin", path: "https://mywebsite-backend-la9g.onrender.com/admin/", external: true },
  ];

  return (
    <nav
      ref={navbarRef}
      className={`navbar-container ${isNavbarVisible ? "visible" : "hidden"} ${
        darkMode ? "dark-mode" : "light-mode"
      }`}
    >
      <div className="navbar-content">
        <NavLink to="/" className="navbar-logo">
          <img
            src={darkMode ? logoDark : logoLight}
            alt="Logo"
            className="navbar-logo-img"
          />
        </NavLink>

        <div className="desktop-nav">
          <div className="nav-links">
            {menuItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>

        <div className="navbar-right">
          <button onClick={handleContactScroll} className="contact-btn">
            Contact
          </button>
          <a href="/resume.pdf" download className="resume-btn">
            <FaDownload /> <span>Resume</span>
          </a>
          <button className="theme-toggle" onClick={handleDarkModeToggle}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <button
            className={`mobile-menu-btn ${isMobileMenuOpen ? "open" : ""}`}
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
              setActiveMenu(null);
            }}
            aria-expanded={isMobileMenuOpen}
          >
            <span className="burger-line burger-1"></span>
            <span className="burger-line burger-2"></span>
            <span className="burger-line burger-3"></span>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="navbar-mobile-menu">
          <ul className="mobile-menu-items">
            {menuItems.map((item, i) => (
              <li key={item.label} className="mobile-menu-item">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `mobile-menu-link ${isActive ? "active" : ""}`
                  }
                  onClick={handleMobileLinkClick}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li className="mobile-menu-item">
              <button
                className="mobile-menu-dropdown-btn"
                onClick={() =>
                  setActiveMenu(
                    activeMenu === "mobile-dropdown" ? null : "mobile-dropdown"
                  )
                }
                aria-expanded={activeMenu === "mobile-dropdown"}
              >
                More <span className={`chevron ${activeMenu === "mobile-dropdown" ? "open" : ""}`}>▾</span>
              </button>
              {activeMenu === "mobile-dropdown" && (
                <div className="mobile-dropdown-menu">
                  {dropdownItems.map((item) =>
                    item.external ? (
                      <a
                        key={item.label}
                        href={item.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mobile-dropdown-item"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <NavLink
                        key={item.label}
                        to={item.path}
                        onClick={handleMobileLinkClick}
                        className="mobile-dropdown-item"
                      >
                        {item.label}
                      </NavLink>
                    )
                  )}
                </div>
              )}
            </li>
          </ul>
        </div>
      )}


    </nav>
  );
};

export default Navbar;
