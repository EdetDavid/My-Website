import React, { useState } from "react";
import "./projects.css"; // Make sure to create this CSS file

// Import all images
import holdings from "../../assets/images/thrive_holdings.png";
import insurance from "../../assets/images/thrive_insurance.png";
import travels from "../../assets/images/thrive_travels.png";
import seplat_obt from "../../assets/images/seplat_obt.png";
import staffadviser from "../../assets/images/staff-adviser.png";
import aa from "../../assets/images/a&a-empire.png";
import flexbook from "../../assets/images/flexbook.png";
import telemedical from "../../assets/images/telemedical.png";
import task from "../../assets/images/taskscheduler.png";
import albinism from "../../assets/images/albinism.png";
import shield from "../../assets/images/shield.png";
import cis from "../../assets/images/cis.png";
import IOT from "../../assets/images/IOT.png";
import react_courseform from "../../assets/images/react-courseform.png";
import courseform from "../../assets/images/courseform.png";

// Graphics Photos
import logo1 from "../../assets/graphics/Blex.png";
import flyer1 from "../../assets/graphics/kagali.png";
import brochure1 from "../../assets/graphics/elite.png";
import flourish from "../../assets/graphics/Florish.png";
import fragrance from "../../assets/graphics/Fragrance&Style.png";

const projectsData = [
  {
    image: holdings,
    title: "Thrive Holdings Limited",
    description: "Thrive group website.",
    link: "https://www.thrivenig.com/",
    category: "corporate",
  },
  {
    image: insurance,
    title: "Thrive Insurance Brokers Limited",
    description: "Thrive insurance website.",
    link: "https://www.insurance.thrivenig.com/",
    category: "corporate",
  },
  {
    image: travels,
    title: "Thrive Travels & Tours Limited",
    description: "Thrive travels website.",
    link: "https://www.travels.thrivenig.com/",
    category: "corporate",
  },
  {
    image: seplat_obt,
    title: "Seplat OBT",
    description: "Flight Booking App",
    link: "https://seplat-obt.onrender.com/",
    category: "corporate",
  },
  {
    image: staffadviser,
    title: "Staff Adviser",
    description: "An Appointment Scheduling App",
    link: "https://staff-adviser.vercel.app/",
    category: "web",
  },
  {
    image: aa,
    title: "A&A Empire",
    description: "An ecommerce app",
    link: "https://aa-empire.vercel.app/",
    category: "web",
  },
  {
    image: flexbook,
    title: "Facebook UI",
    description: "A real clone of facebook.",
    link: "https://flexbook.onrender.com",
    category: "web",
  },
  {
    image: telemedical,
    title: "Telemedical Hub",
    description: "A webapp for telemedical services",
    link: "https://telemedical-hub.onrender.com",
    category: "web",
  },
  {
    image: albinism,
    title: "Albinism AI",
    description: "Albinism predicting app for a population",
    link: "https://albinism-ai.onrender.com/",
    category: "web",
  },
  {
    image: task,
    title: "Task Scheduler",
    description: "Professional Todo App",
    link: "https://taskscheduler.onrender.com/",
    category: "web",
  },
  {
    image: shield,
    title: "Shield Finance",
    description: "A simple bank app",
    link: "https://sheidfinance.onrender.com/",
    category: "web",
  },
  {
    image: cis,
    title: "CIS",
    description: "A criminal records app",
    link: "https://cis-5taw.onrender.com/",
    category: "web",
  },
  {
    image: IOT,
    title: "Internet Of Things",
    description: "Smart Devices for homes...",
    link: "https://internet-of-things.onrender.com/",
    category: "web",
  },
  {
    image: react_courseform,
    title: "Courseform",
    description: "React courseform management app.",
    link: "https://courseform-approval.vercel.app/",
    category: "web",
  },
  {
    image: courseform,
    title: "Course Form",
    description: "Django courseform approval app.",
    link: "https://courseform-obp0.onrender.com/",
    category: "web",
  },

  // Graphics Section
  {
    image: logo1,
    title: "Company Branding",
    description: "Modern logo design for tech startup",
    link: "#",
    category: "graphics",
  },
  {
    image: flyer1,
    title: "Event Promotion",
    description: "Marketing flyer design",
    link: "#",
    category: "graphics",
  },

  {
    image: fragrance,
    title: "Fragrance & Style",
    description: "Business brochure design",
    link: "#",
    category: "graphics",
  },
  {
    image: flourish,
    title: "Corporate Brochure",
    description: "Business brochure design",
    link: "#",
    category: "graphics",
  },
];
const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showLightbox, setShowLightbox] = useState(false);

  return (
    <div className="project-item" data-category={project.category}>
      <div
        className={`project-card ${isHovered ? "hovered" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="project-image">
          <img
            src={project.image}
            alt={project.title}
            onClick={() =>
              project.category === "graphics" && setShowLightbox(true)
            }
            style={{
              cursor: project.category === "graphics" ? "zoom-in" : "pointer",
            }}
          />
          <div className="project-overlay">
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.category !== "graphics" ? (
                <div className="project-links">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="visit-btn"
                  >
                    <span>Visit Site</span>
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              ) : (
                <button
                  className="visit-btn"
                  onClick={() => setShowLightbox(true)}
                >
                  <span>View Full Size</span>
                  <i className="fas fa-search-plus"></i>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {showLightbox && (
        <div className="lightbox" onClick={() => setShowLightbox(false)}>
          <div className="lightbox-content">
            <img src={project.image} alt={project.title} />
            <button
              className="lightbox-close"
              onClick={() => setShowLightbox(false)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const categories = ["all", "corporate", "web", "graphics"];

  const filteredProjects =
    filter === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === filter);

  return (
    <section className="projects-section">
      <div className="projects-container">
        <div className="section-header">
          <h1>My Projects</h1>
          <p>Explore my latest works and creative endeavors</p>
        </div>

        <div className="filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${filter === category ? "active" : ""}`}
              onClick={() => setFilter(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
