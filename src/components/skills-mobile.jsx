import React from "react";
import { motion } from "framer-motion";
import htmlCssIcon from "../assets/images/download (5).png";
import javascriptIcon from "../assets/images/javascript.png";
import djangoIcon from "../assets/images/django.png";
import pythonIcon from "../assets/images/python.jpeg";
import wordpressIcon from "../assets/images/wordpress.png";

const SkillsMobile = () => {
  return (
    <motion.section
      className="p-lg-5 p-md-3 p-sm-2 p-xs-1"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div
        id="skills__mobile"
        className="d-none flex-wrap justify-content-center align-items-center"
      >
        {/* card 1 */}
        <div className="_card w-50 d-flex flex-column justify-content-center align-items-center">
          <h4>Html & Css</h4>
          <img src={htmlCssIcon} width="" height="60px" alt="html&css-icon" />
        </div>
        {/* card 2 */}
        <div className="_card w-50 d-flex flex-column justify-content-center align-items-center">
          <h4>Javascript</h4>
          <img src={javascriptIcon} width="" height="60px" alt="javascript" />
        </div>
        {/* card 3 */}
        <div className="_card w-50 d-flex flex-column justify-content-center align-items-center">
          <h4>React JS</h4>
          <img
            src="https://th.bing.com/th?id=OIP.NgoO9GZty71i2XnnEAtKbQHaFj&w=135&h=101&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
            width=""
            height="60px"
            alt=""
          />
        </div>
        {/* card 4 */}
        <div className="_card w-50 d-flex flex-column justify-content-center align-items-center">
          <h4>Django</h4>
          <img
            src={djangoIcon}
            className="w-75"
            width="59px"
            height="60px"
            alt="django-img"
          />
        </div>
        {/* card 5 */}
        <div className="_card w-50 d-flex flex-column justify-content-center align-items-center">
          <h4>Python</h4>
          <img src={pythonIcon} width="" height="60px" alt="python-img" />
        </div>
        {/* card 6 */}
        <div className="_card w-50 d-flex flex-column justify-content-center align-items-center">
          <h4>Wordpress</h4>
          <img src={wordpressIcon} width="100px" height="65px" alt="" />
        </div>
      </div>
    </motion.section>
  );
};

export default SkillsMobile;
