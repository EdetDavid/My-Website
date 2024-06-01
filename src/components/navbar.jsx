import React, { useEffect, useState } from "react";
import logo from "../assets/images/nav-logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const body = document.getElementById("App");
    const textDark = document.querySelector(".text-dark");

    if (darkMode) {
      body.style.backgroundImage = "none";
      body.style.backgroundColor = "#001222";
      textDark.classList.add("text-white");
    } else {
      body.style.backgroundColor = "none";
      body.style.backgroundImage = "";
      textDark.classList.remove("text-white");
    }

    const links = document.querySelectorAll(".hide-nav");

    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener("click", function () {
        const navbarCollapse = document.querySelector(".navbar-collapse");

        if (navbarCollapse.classList.contains("show")) {
          navbarCollapse.classList.remove("show");
        }
      });
    }
  }, [darkMode]);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav id="navbar" className="navbar navbar-expand-sm navbar-light bg-white">
      <>
        <NavLink className="navbar-brand mx-3 hide-nav" to="/">
          <img
            id="nav-logo"
            src={logo}
            alt="Nav-bar Logo"
            width="150"
            height="auto"
          />
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
      </>
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
            <div className="dropdown-menu mb-2 d" aria-labelledby="dropdownId">
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
                to="https://mywebsite-backend-la9g.onrender.com/admin"
              >
                Admin
              </NavLink>
            </div>
          </li>
        </ul>
        <div className="d-inline-flex">
          <button
            id="darkmode-btn"
            type="button"
            className={
              darkMode ? "btn btn-warning me-2" : "btn btn-secondary me-2"
            }
            onClick={handleDarkModeToggle}
          >
            <i
              className={
                darkMode ? "fa fa-sun text-white" : "fa fa-moon text-white "
              }
            ></i>
          </button>

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
