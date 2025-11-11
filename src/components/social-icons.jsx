import React from "react";
import { motion } from "framer-motion";

const SocialLinks = () => {
  return (
    <motion.div
      id="socials"
      className="d-flex justify-content-center align-items-center p-3"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <p className="mb-0 fs-7 text-info">follow me @: </p>
      <div className="socials__links ">
        <a
          className="text-decoration-none mx-3 mx-sm-2"
          href="https://github.com/EdetDavid"
        >
          <i className="fab fa-github text-white fa-1x"></i>
        </a>
        <a
          className="text-decoration-none mx-3 mx-sm-2"
          href="https://www.facebook.com/profile.php?id=100080024666123"
        >
          <i className="fab fa-facebook text-white"></i>
        </a>
        <a
          className="text-decoration-none mx-3 mx-sm-2"
          href="https://www.instagram.com/invites/contact/?i=rujib2gio5dh&utm_content=oemfdo8"
        >
          <i className="fab fa-instagram text-white"></i>
        </a>
        <a
          className="text-decoration-none mx-3 mx-sm-2"
          href="https://twitter.com/DavidEdet12345"
        >
          <i className="fab fa-twitter text-white"></i>
        </a>
        <a
          className="text-decoration-none mx-3 mx-sm-2"
          href="https://www.linkedin.com/in/david-edet-8b95b2380"
        >
          <i className="fab fa-linkedin text-white"></i>
        </a>
        <a
          className="text-decoration-none mx-3 mx-sm-2"
          href="https://wa.me/09091347486"
        >
          <i className="fab fa-whatsapp text-white"></i>
        </a>
      </div>
    </motion.div>
  );
};

export default SocialLinks;
