
import React from "react";
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

// Projects data array
const projectsData = [
  {
    image: holdings,
    title: "Thrive Holdings Limited",
    description: "Thrive group website.",
    link: "https://www.thrivenig.com/"
  },
  {
    image: insurance,
    title: "Thrive Insurance Brokers Limited",
    description: "Thrive insurance website.",
    link: "https://www.insurance.thrivenig.com/"
  },
  {
    image: travels,
    title: "Thrive Travels & Tours Limited",
    description: "Thrive travels website.",
    link: "https://www.travels.thrivenig.com/"
  },
  {
    image: seplat_obt,
    title: "Seplat OBT",
    description: "Flight Booking App",
    link: "https://seplat-obt.onrender.com/"
  },
  {
    image: staffadviser,
    title: "Staff Adviser",
    description: "An Appointment Scheduling App",
    link: "https://staff-adviser.vercel.app/"
  },
  {
    image: aa,
    title: "A&A Empire",
    description: "An ecommerce app",
    link: "https://aa-empire.vercel.app/"
  },
  {
    image: flexbook,
    title: "Facebook UI",
    description: "A real clone of facebook.",
    link: "https://flexbook.onrender.com"
  },
  {
    image: telemedical,
    title: "Telemedical Hub",
    description: "A webapp for telemedical services",
    link: "https://telemedical-hub.onrender.com"
  },
  {
    image: albinism,
    title: "Albinism AI",
    description: "Albinism predicting app for a population",
    link: "https://albinism-ai.vercel.app/"
  },
  {
    image: task,
    title: "Task Scheduler",
    description: "Professional Todo App",
    link: "https://taskscheduler.onrender.com/"
  },
  {
    image: shield,
    title: "Shield Finance",
    description: "A simple bank app",
    link: "https://sheidfinance.onrender.com/"
  },
  {
    image: cis,
    title: "CIS",
    description: "A criminal records app",
    link: "https://cis-5taw.onrender.com/"
  },
  {
    image: IOT,
    title: "Internet Of Things",
    description: "Smart Devices for homes...",
    link: "https://internet-of-things.onrender.com/"
  },
  {
    image: react_courseform,
    title: "Courseform",
    description: "React courseform management app.",
    link: "https://courseform-approval.vercel.app/"
  },
  {
    image: courseform,
    title: "Course Form",
    description: "Django courseform approval app.",
    link: "https://courseform-obp0.onrender.com/"
  }
];

// Project Card Component
const ProjectCard = ({ project }) => {
  return (
    <div className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center mb-4">
      <div className="card project-card">
        <div className="card-img-wrapper">
          <img
            src={project.image}
            className="card-img-top"
            alt={project.title}
          />
        </div>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{project.title}</h5>
          <p className="card-text flex-grow-1">{project.description}</p>
          <a
            href={project.link}
            className="btn btn-secondary mt-auto"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit
          </a>
        </div>
      </div>
    </div>
  );
};

// Main Projects Component
const Projects = () => {
  return (
    <section className="projects-section">
      <div className="container py-5">
        <h1 className="display-4 text-white text-center text-uppercase mb-5">
          My Projects
        </h1>
        
        <div className="row">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;