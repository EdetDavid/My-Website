import React from "react";
import "./MobileApps.css";
import { ProjectImage } from "./ProjectCard";

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
              <ProjectImage project={p} imageClass="mobile-preview-img" />
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
                <div className="store-btns">
                  {p.playStore ? (
                    <a
                      href={p.playStore}
                      className="store-btn play"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${p.title} on Google Play`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20" aria-hidden="true">
                        <path fill="#34A853" d="M325.3 234.3L104.4 16.4c-9.5-9.5-25-12.3-37.6-6.5l170.4 170.4 88.1 54z"/>
                        <path fill="#4285F4" d="M425.7 197.6L345.6 250 184.9 89.3l140.4 108.6 100.4-0.3z"/>
                        <path fill="#FBBC05" d="M184.9 422.7L345.6 262l80.1 52.3-241 108.4z"/>
                        <path fill="#EA4335" d="M104.4 495.6l220.9-217.9L104.4 59.8V495.6z"/>
                      </svg>
                    </a>
                  ) : null}

                  {p.appStore ? (
                    <a
                      href={p.appStore}
                      className="store-btn app"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${p.title} on the App Store`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="18" height="20" aria-hidden="true">
                        <path fill="#000" d="M318.7 268.7c-1.1-44.7 19.7-78.6 61.6-103.6-23-33.5-57.6-52.6-101.8-55.1-43.9-2.5-88.5 25.9-111.7 25.9-23.6 0-60.9-24.1-100.1-24.1C20.9 111-0 152.9 0 220.1c0 77 32.8 133.9 69.4 173.7 33.5 36.7 73.3 69.6 125.7 68 47.7-1.5 65.8-30.9 123.6-30.9 58.8 0 77.4 30.9 125.8 30.9 21.7 0 45.9-6.9 66.6-22.2-7.9-9-18.4-17.9-31.6-26.6-41.8-26.6-74.6-60.3-79.5-119.2-3.5-39.1-21.3-79.6-79.5-81.7z"/>
                      </svg>
                    </a>
                  ) : null}

                  {!p.playStore && !p.appStore && (
                    <a href={p.link || "#"} className="btn" target="_blank" rel="noopener noreferrer">
                      View
                    </a>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default MobileApps;
