import React, { useState } from "react";

export const ProjectImage = ({ project, imageClass = "" }) => {
  const [showLightbox, setShowLightbox] = useState(false);

  return (
    <>
      {project.image && (
        <>
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className={imageClass}
            onClick={() => project.category === "graphics" && setShowLightbox(true)}
            style={{ cursor: project.category === "graphics" ? "zoom-in" : "pointer" }}
          />

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
        </>
      )}
    </>
  );
};

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="project-item" data-category={project.category}>
      <div
        className={`project-card ${isHovered ? "hovered" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="project-image">
          <ProjectImage project={project} />
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
                  onClick={() => {}}
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
    </div>
  );
};

export default ProjectCard;
