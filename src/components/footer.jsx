import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="footer bg-transparent text-dark p-3 w-100">
        <div
          id="footer-wrapper"
          className="d-flex justify-content-center align-items-center position-relative"
        >
          <p className="text-muted my-2">&copy; All rights reserved</p>
          <div className="position-absolute end-0">
            <a href="#navbar">
              <i className="fas fa-caret-up text-white fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
