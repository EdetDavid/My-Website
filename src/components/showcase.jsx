import React, { useState } from "react";
import { motion } from "framer-motion";
import frosh from "../assets/images/frosh.png";
import "./showcase.css";
import TypewriterText from "./TypewriterText";

const Showcase = () => {
  const [showContent, setShowContent] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text-container">
            <div className="text-content-wrapper">
              <h3 className="greeting">
                <TypewriterText 
                  text="Hi there! I'm David 👋"
                  delay={50}
                  onComplete={() => setShowContent(true)}
                />
              </h3>
              <motion.h1 
                className="title"
                initial={{ opacity: 0 }}
                animate={{ opacity: showContent ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <TypewriterText 
                  text="Full Stack Developer & Tech Enthusiast"
                  delay={40}
                  onComplete={() => setShowDescription(true)}
                />
              </motion.h1>
              <motion.p
                className="description"
                initial={{ opacity: 0 }}
                animate={{ opacity: showDescription ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <TypewriterText 
                  text="Passionate about creating elegant, user-friendly web applications with clean code and modern technologies."
                  delay={30}
                />
              </motion.p>
            </div>
            {showDescription && (
              <motion.div 
                className="cta-container"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <a 
                  href="https://github.com/EdetDavid" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="cta-link github"
                >
                  <i className="fab fa-github"></i>
                  View Projects
                </a>
                <a 
                  href="#contact" 
                  className="cta-link contact"
                >
                  <i className="fas fa-envelope"></i>
                  Contact Me
                </a>
              </motion.div>
            )}
          </div>
          <div className="hero-image-container">
            <div className="image-wrapper">
              <img
                src={frosh}
                alt="David Edet - Fullstack Developer"
                className="profile-image"
              />
              <div className="image-backdrop"></div>
            </div>
          </div>
        </div>
        <div className="tech-stack">
          <p className="tech-stack-text">Technologies I work with:</p>
          <div className="tech-icons">
            <i className="fab fa-react" title="React"></i>
            <i className="fab fa-node-js" title="Node.js"></i>
            <i className="fab fa-python" title="Python"></i>
            <i className="fab fa-js" title="JavaScript"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;