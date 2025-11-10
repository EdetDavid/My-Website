import React, { useState, useMemo } from "react";
import ProjectFilter from "../../components/ProjectFilter/ProjectFilter";

// Project images
import holdings from "../../assets/images/thrive_holdings.png";
import insurance from "../../assets/images/thrive_insurance.png";
import travels from "../../assets/images/thrive_travels.png";
import obt from "../../assets/images/obt.png";
import farmfresh from "../../assets/images/farmfresh.png";
import staffadviser from "../../assets/images/staff-adviser.png";
import aa from "../../assets/images/a&a-empire.png";
import flexbook from "../../assets/images/flexbook.png";
import business from "../../assets/images/business-assessment.png";
import telemedical from "../../assets/images/telemedical.png";
import task from "../../assets/images/taskscheduler.png";
import data from "../../assets/images/data-encryption.png";
import albinism from "../../assets/images/albinism.png";
import shield from "../../assets/images/shield.png";
import cis from "../../assets/images/cis.png";
import IOT from "../../assets/images/IOT.png";
import react_courseform from "../../assets/images/react-courseform.png";
import courseform from "../../assets/images/courseform.png";
import studentmentalhealth from "../../assets/images/studentmentalhealth.png";
import drugexpertsystem from "../../assets/images/drugexpertsystem.png";

// Graphics Photos
import logo1 from "../../assets/graphics/Blex.png";
import flyer1 from "../../assets/graphics/kagali.png";
import flourish from "../../assets/graphics/Florish.png";
import fragrance from "../../assets/graphics/Fragrance&Style.png";

// Styles
import "./projects.css";

const projectsData = [
  {
    image: holdings,
    title: "Thrive Holdings Limited",
    description: "Thrive group website.",
    link: "https://www.thrivenig.com/",
    category: "corporate",
    tags: ["React", "Corporate", "Website"],
  },
  {
    image: insurance,
    title: "Thrive Insurance Brokers Limited",
    description: "Thrive insurance website.",
    link: "https://www.insurance.thrivenig.com/",
    category: "corporate",
    tags: ["React", "Corporate", "Insurance"],
  },
  {
    image: travels,
    title: "Thrive Travels & Tours Limited",
    description: "Thrive travels website.",
    link: "https://www.travels.thrivenig.com/",
    category: "corporate",
  },
  {
    image: obt,
    title: "B2B Booking Tool",
    description: "Travels Booking App",
    link: "https://onlinebookingtool.pythonanywhere.com/",
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
    image: farmfresh,
    title: "Farm Fresh",
    description: "Online Agro-Ecommerce Website",
    link: "https://agro-ecommerce-system.vercel.app/",
    category: "web",
  },
  {
    image: business,
    title: "BizAssess",
    description: "Online Business Assesment System",
    link: "https://business-online-assessment-system-frontend.vercel.app/",
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
    image: data,
    title: "Data Encryption System",
    description: "This is a system used for data & file encryption",
    link: "https://edetdavid.pythonanywhere.com/",
    category: "web",
  },

  {
    image: studentmentalhealth,
    title: "Student Mental Health Prediction System",
    description:
      "This is a system used for predicting the mental health ratio of students.",
    link: "https://mentalhealthmodelchecker.streamlit.app/",
    category: "web",
  },

  {
    image: drugexpertsystem,
    title: "AI Drug Diagnosis System",
    description:
      "This is a system used for predicting the drugs based on symptoms.",
    link: "https://aidrugsusage-symptoms-system.streamlit.app/",
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
          {project.image && (
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
          )}
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
                    aria-label={`Visit ${project.title}`}
                  >
                    <span>Visit Site</span>
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              ) : (
                <button
                  className="visit-btn"
                  onClick={() => setShowLightbox(true)}
                  aria-label={`View ${project.title} full size`}
                >
                  <span>View Full Size</span>
                  <i className="fas fa-search-plus"></i>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {showLightbox && project.image && (
        <div className="lightbox" onClick={() => setShowLightbox(false)}>
          <div className="lightbox-content">
            <img src={project.image} alt={project.title} />
            <button
              className="lightbox-close"
              onClick={() => setShowLightbox(false)}
              aria-label="Close image"
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
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  // Remove 'all' from categories as it's handled separately in ProjectFilter
  const categories = ["corporate", "web", "graphics"];

  // Memoized filtered projects
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tags?.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesCategory =
        selectedCategory === "all" || project.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <section className="projects-section">
      <div className="projects-container">
        <div className="section-header">
          <h1>My Projects</h1>
          <p>Explore my latest works and creative endeavors</p>
        </div>

        <ProjectFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categories={categories}
        />

        <div className="projects-grid">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <div key={project.title} className="project-card">
                <ProjectCard project={project} />
              </div>
            ))
          ) : (
            <div className="no-results">
              <h3>No projects found</h3>
              <p>Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
