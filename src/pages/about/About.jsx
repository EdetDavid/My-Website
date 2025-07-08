import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaReact,
  FaNode,
  FaPython,
  FaDatabase,
  FaCode,
  FaLaptopCode,
  FaBookReader,
  FaGamepad,
  FaMusic,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiDocker,
  SiPostgresql,
  SiFlutter,
  SiAdobephotoshop,
} from "react-icons/si";
import "./About.css";
import { useDarkMode } from "../../context/DarkModeContext";

const About = () => {
  const { darkMode, setDarkMode } = useDarkMode();
  // Animation variants
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  // Icon colors configuration
  const iconColors = {
    React: "#61DAFB",
    Flutter: "#02569B",
    TypeScript: "#3178C6",
    "Node.js": "#339933",
    JavaScript: "#F7DF1E",
    Python: "#3776AB",
    MongoDB: "#47A248",
    Docker: "#2496ED",
    SQL: "#4479A1",
    PostgreSQL: "#336791",
    Photoshop: "#31A8FF",
  };

  // Function to get icon color based on darkMode
  const getIconColor = (skillName) => {
    return darkMode ? iconColors[skillName] : "#ffffff";
  };

  // Style for general icons
  const iconStyle = {
    color: "#ffffff",
  };
  const skills = [
    {
      icon: <FaReact style={{ color: getIconColor("React") }} />,
      name: "React",
      level: "Advanced",
    },
    {
      icon: <SiFlutter style={{ color: getIconColor("Flutter") }} />,
      name: "Flutter",
      level: "Advanced",
    },
    {
      icon: <SiTypescript style={{ color: getIconColor("TypeScript") }} />,
      name: "TypeScript",
      level: "Intermediate",
    },
    {
      icon: <FaNode style={{ color: getIconColor("Node.js") }} />,
      name: "Node.js",
      level: "Advanced",
    },
    {
      icon: <SiJavascript style={{ color: getIconColor("JavaScript") }} />,
      name: "JavaScript",
      level: "Advanced",
    },
    {
      icon: <FaPython style={{ color: getIconColor("Python") }} />,
      name: "Python",
      level: "Advanced",
    },
    {
      icon: <SiMongodb style={{ color: getIconColor("MongoDB") }} />,
      name: "MongoDB",
      level: "Intermediate",
    },
    {
      icon: <SiDocker style={{ color: getIconColor("Docker") }} />,
      name: "Docker",
      level: "Intermediate",
    },
    {
      icon: <FaDatabase style={{ color: getIconColor("SQL") }} />,
      name: "SQL",
      level: "Advanced",
    },
    {
      icon: <SiPostgresql style={{ color: getIconColor("PostgreSQL") }} />,
      name: "PostgreSQL",
      level: "Advanced",
    },
    {
      icon: <SiAdobephotoshop style={{ color: getIconColor("Photoshop") }} />,
      name: "Photoshop",
      level: "Intermediate",
    },
  ];

  return (
    <motion.div
      className="about"
      initial="initial"
      animate="animate"
      variants={pageVariants}
    >
      <div className="about__container">
        {/* Hero Section */}
        <motion.section className="hero" variants={itemVariants}>
          <motion.div
            className="hero__icon"
            animate={{
              rotateY: 360,
              transition: { duration: 2, repeat: Infinity, ease: "linear" },
            }}
          >
            <FaCode style={iconStyle} />
          </motion.div>
          <h1 className="hero__title">Edet David</h1>
          <h2 className="hero__subtitle">Full Stack Developer</h2>
          <p className="hero__text">
            Building digital experiences through elegant code
          </p>
        </motion.section>

        {/* Work Experience */}

        <motion.section className="experience" variants={itemVariants}>
          <h2 className="section__title">Work Experience</h2>
          <div className="experience__timeline">
            {/* IT Executive - Thrive Holdings Limited */}
            <motion.div className="experience__item" variants={itemVariants}>
              <div className="experience__header">
                <h3>IT Executive</h3>
                <span className="experience__company">
                  Thrive Holdings Limited, Lagos
                </span>
                <span className="experience__date">May 2024 - Present</span>
              </div>
              <ul className="experience__details">
                <li>
                  Developed and maintained mobile applications using React
                  Native.
                </li>
                <li>
                  Implemented responsive designs and intuitive user interfaces.
                </li>
                <li>
                  Integrated APIs and third-party libraries to enhance app
                  functionality.
                </li>
                <li>
                  Tested and debugged mobile applications to meet functional and
                  performance requirements.
                </li>
                <li>
                  Managed and maintained the company’s IT infrastructure,
                  ensuring network security and data integrity.
                </li>
                <li>
                  Provided technical support and troubleshooting for software
                  and hardware issues across departments.
                </li>
                <li>
                  Implemented cybersecurity measures to protect sensitive
                  insurance data from breaches and unauthorized access.
                </li>
                <li>
                  Automated internal workflows and digitized processes to
                  improve efficiency in policy management and claims processing.
                </li>
                <li>
                  Managed cloud-based solutions and data backups to ensure
                  business continuity and disaster recovery preparedness.
                </li>
                <li>
                  Conducted training sessions for employees on IT systems,
                  cybersecurity best practices, and software applications.
                </li>
              </ul>
            </motion.div>

            {/* Web Developer (Freelance) */}
            <motion.div className="experience__item" variants={itemVariants}>
              <div className="experience__header">
                <h3>Web Developer (Freelance)</h3>
                <span className="experience__company">Self-Employed</span>
                <span className="experience__date">January 2023 - Present</span>
              </div>
              <ul className="experience__details">
                <li>
                  Designed and developed web applications for various clients.
                </li>
                <li>
                  Implemented full-stack solutions using React and Django.
                </li>
                <li>
                  Optimized performance and ensured cross-platform
                  compatibility.
                </li>
                <li>
                  Provided technical consultancy to businesses for IT solutions
                  and web infrastructure.
                </li>
              </ul>
            </motion.div>

            {/* Intern - Thrive Insurance Brokers Limited */}
            <motion.div className="experience__item" variants={itemVariants}>
              <div className="experience__header">
                <h3>Intern</h3>
                <span className="experience__company">
                  Thrive Insurance Brokers Limited
                </span>
                <span className="experience__date">
                  July 2023 - November 2023
                </span>
              </div>
              <ul className="experience__details">
                <li>Developed software solutions to aid workflow.</li>
                <li>
                  Assisted in troubleshooting IT-related issues and system
                  maintenance.
                </li>
                <li>
                  Gained hands-on experience in insurance tech solutions and IT
                  administration.
                </li>
              </ul>
            </motion.div>
            {/* Backend Developer - Techroom, UYO */}
            <motion.div className="experience__item" variants={itemVariants}>
              <div className="experience__header">
                <h3>Backend Developer</h3>
                <span className="experience__company">Techroom, UYO</span>
                <span className="experience__date">
                  March 2020 - February 2024
                </span>
              </div>
              <ul className="experience__details">
                <li>
                  Collaborated with frontend developers and product managers to
                  deliver high-quality features.
                </li>
                <li>
                  Troubleshot and resolved bugs and performance issues in
                  production environments.
                </li>
                <li>
                  Improved backend system performance, scalability, and
                  reliability through continuous optimization and monitoring.
                </li>
                <li>
                  Designed, implemented, and maintained RESTful APIs using
                  Python and Django.
                </li>
              </ul>
            </motion.div>

            {/* Mobile App Developer - Techroom, UYO */}
            <motion.div className="experience__item" variants={itemVariants}>
              <div className="experience__header">
                <h3>Mobile App Developer</h3>
                <span className="experience__company">Techroom, UYO</span>
                <span className="experience__date">
                  August 2020 - February 2024
                </span>
              </div>
              <ul className="experience__details">
                <li>
                  Developed and maintained mobile applications using React
                  Native.
                </li>
                <li>
                  Implemented responsive designs and intuitive user interfaces.
                </li>
                <li>
                  Integrated APIs and third-party libraries to enhance app
                  functionality.
                </li>
                <li>
                  Tested and debugged mobile applications to meet functional and
                  performance requirements.
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section className="skills" variants={itemVariants}>
          <h2 className="section__title">Technical Skills</h2>
          <div className="skills__grid">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="skill-card"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                variants={itemVariants}
              >
                <span className="skill-card__icon">{skill.icon}</span>
                <h3 className="skill-card__name">{skill.name}</h3>
                <p className="skill-card__level">{skill.level}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Interests Section */}
        <motion.section className="interests" variants={itemVariants}>
          <h2 className="section__title">Interests & Hobbies</h2>
          <div className="interests__grid">
            <motion.div className="interest-card" whileHover={{ scale: 1.1 }}>
              <FaLaptopCode style={iconStyle} />
              <p>Coding</p>
            </motion.div>
            <motion.div className="interest-card" whileHover={{ scale: 1.1 }}>
              <FaBookReader style={iconStyle} />
              <p>Reading</p>
            </motion.div>
            <motion.div className="interest-card" whileHover={{ scale: 1.1 }}>
              <FaMusic style={iconStyle} />
              <p>Music</p>
            </motion.div>
            <motion.div className="interest-card" whileHover={{ scale: 1.1 }}>
              <FaGamepad style={iconStyle} />
              <p>Gaming</p>
            </motion.div>
          </div>
        </motion.section>

        {/* Social Links */}
        <motion.section className="social" variants={itemVariants}>
          <div className="social__links">
            <motion.a
              href="https://github.com/EdetDavid"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 360 }}
            >
              <FaGithub style={iconStyle} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/edet-david-b2a85a266"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 360 }}
            >
              <FaLinkedin style={iconStyle} />
            </motion.a>
            <motion.a
              href="https://twitter.com/DavidEdet12345"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 360 }}
            >
              <FaTwitter style={iconStyle} />
            </motion.a>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default About;
