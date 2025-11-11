import React from "react";
import { motion } from "framer-motion";
import htmlCssImg from "../assets/images/download (5).png";
import javascriptImg from "../assets/images/javascript.png";
import djangoImg from "../assets/images/django.png";
import pythonImg from "../assets/images/python.jpeg";
import wordpressImg from "../assets/images/wordpress.png";

const Skills = () => {
  return (
    <motion.div
      className="container skills"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <h2 className="text-center my-2 text-decoration-underline my-5">
        <a type="button" className="text-warning" href="#myskills">
          {" "}
          My Skills
        </a>
      </h2>
      <div
        id="myskills"
        className="d-flex align-items-center justify-content-center"
      >
        <div className="_card">
          <h4>Html & Css</h4>
          <img src={htmlCssImg} width="" height="60px" alt="html-css" />
        </div>

        <div className="_card">
          <h4>Javascript</h4>
          <img
            src={javascriptImg}
            width=""
            height="60px"
            alt="javascript-icon"
          />
        </div>
        <div className="_card">
          <h4>React JS</h4>
          <img
            src="https://th.bing.com/th?id=OIP.NgoO9GZty71i2XnnEAtKbQHaFj&w=135&h=101&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
            width=""
            height="60px"
            alt="react-icon"
          />
        </div>
        <div className="_card">
          <h4>Django</h4>
          <img
            src={djangoImg}
            className="w-75"
            width="59px"
            height="60px"
            alt="django-img"
          />
        </div>
        <div className="_card">
          <h4>Python</h4>
          <img src={pythonImg} width="55px" height="60px" alt="python-img" />
        </div>

        <div className="_card">
          <h4>Wordpress</h4>
          <img
            src={wordpressImg}
            width="100px"
            height="65px"
            alt="wordpress-img"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
