import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import frosh from "../assets/images/frosh.png";
import "./showcase.css";
import TypewriterText from "./TypewriterText";

const Showcase = () => {
  const [showSecondary, setShowSecondary] = useState(false);
  const [showTertiary, setShowTertiary] = useState(false);

  return (
    <motion.section
      className="hero-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text-container">
            <motion.div
              className="greeting-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h2 className="greeting">
                <TypewriterText 
                  text="Hi, I'm David 👋" 
                  delay={80}
                  onComplete={() => setShowSecondary(true)}
                />
              </h2>
            </motion.div>

            <motion.div
              className="role-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="title">
                <TypewriterText 
                  text="Fullstack Developer | Creative Engineer | Tech Enthusiast"
                  delay={50}
                  onComplete={() => setShowTertiary(true)}
                />
              </h1>
            </motion.div>

            {showTertiary && (
              <motion.div
                className="bio-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                {/* <p className="description">
                  Crafting innovative digital experiences through code. 
                  Specialized in building robust web applications with modern technologies.
                  Passionate about clean code, user experience, and creative problem-solving.
                </p> */}
                
                <div className="cta-container">
                  <a
                    href="https://github.com/EdetDavid"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-link github"
                  >
                    <i className="fab fa-github"></i> View My Work
                  </a>
                  <a
                    href="#contact"
                    className="cta-link contact"
                  >
                    <i className="fas fa-envelope"></i> Get In Touch
                  </a>
                </div>
              </motion.div>
            )}
          </div>

          <motion.div
            className="hero-image-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="image-wrapper">
              <img
                src={frosh}
                alt="David Edet - Fullstack Developer"
                className="profile-image"
              />
              <div className="image-backdrop"></div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="tech-stack"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.5 }}
        >
          <p className="tech-stack-text">Tech Stack</p>
          <div className="tech-icons">
            <i className="fab fa-react" title="React"></i>
            <i className="fab fa-node-js" title="Node.js"></i>
            <i className="fab fa-python" title="Python"></i>
            <i className="fab fa-js" title="JavaScript"></i>
            <i className="fab fa-html5" title="HTML5"></i>
            <i className="fab fa-css3-alt" title="CSS3"></i>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Showcase;
