import React from "react";
import "./MobileApps.css";

const MobileApps = ({ projects = [] }) => {
  return (
    <section className="mobile-apps-section">
      <div className="mobile-apps-header">
        <h2>Mobile Apps</h2>
        <p>Selected mobile applications I built for Android and iOS.</p>
      </div>

      <div className="mobile-apps-grid" role="list">
        {projects.map((p) => (
          <article key={p.title} className="mobile-card" role="listitem">
            <div className="mobile-preview">
              {p.image ? (
                <img src={p.image} alt={p.title} />
              ) : (
                <div className="mobile-placeholder">No image</div>
              )}
            </div>
            <div className="mobile-meta">
              <h3>{p.title}</h3>
              <p className="mobile-desc">{p.description}</p>
              <div className="mobile-tags">
                {(p.tags || []).map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mobile-actions">
                <a href={p.link || "#"} className="btn" target="_blank" rel="noopener noreferrer">
                  View
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default MobileApps;
