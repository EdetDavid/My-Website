import React from "react";
import { motion } from "framer-motion";
import Showcase from "../../components/showcase";
import Skills from "../../components/myskills";
import SkillsMobile from "../../components/skills-mobile";
import MyChartComponent from "../../components/chart";
import ContactSection from "../../components/contact-form";
import SocialLinks from "../../components/social-icons";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const glowStyles = [
  {
    boxShadow: "0 0 32px 0 #60a5fa, 0 0 8px 0 #818cf8",
    background: "linear-gradient(90deg, rgba(96,165,250,0.08) 0%, rgba(129,140,248,0.08) 100%)",
    borderRadius: "18px",
  },
  {
    boxShadow: "0 0 32px 0 #f59e42, 0 0 8px 0 #fbbf24",
    background: "linear-gradient(90deg, rgba(251,191,36,0.08) 0%, rgba(245,158,66,0.08) 100%)",
    borderRadius: "18px",
  },
  {
    boxShadow: "0 0 32px 0 #a21caf, 0 0 8px 0 #f472b6",
    background: "linear-gradient(90deg, rgba(162,28,175,0.08) 0%, rgba(244,114,182,0.08) 100%)",
    borderRadius: "18px",
  },
  {
    boxShadow: "0 0 32px 0 #06b6d4, 0 0 8px 0 #818cf8",
    background: "linear-gradient(90deg, rgba(6,182,212,0.08) 0%, rgba(129,140,248,0.08) 100%)",
    borderRadius: "18px",
  },
  {
    boxShadow: "0 0 32px 0 #f43f5e, 0 0 8px 0 #fbbf24",
    background: "linear-gradient(90deg, rgba(244,63,94,0.08) 0%, rgba(251,191,36,0.08) 100%)",
    borderRadius: "18px",
  },
  {
    boxShadow: "0 0 32px 0 #22d3ee, 0 0 8px 0 #818cf8",
    background: "linear-gradient(90deg, rgba(34,211,238,0.08) 0%, rgba(129,140,248,0.08) 100%)",
    borderRadius: "18px",
  },
  // SocialLinks section: minimal glow, no background, no border radius
  {
    boxShadow: "0 0 24px 0 #818cf8, 0 0 4px 0 #22d3ee",
    background: "none",
    borderRadius: "0px",
    padding: 0,
  },
];

const Home = () => {
  return (
    <>
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={glowStyles[0]}
      >
        <Showcase />
      </motion.div>
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={glowStyles[1]}
      >
        <Skills />
      </motion.div>
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={glowStyles[2]}
      >
        <SkillsMobile />
      </motion.div>
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={glowStyles[3]}
      >
        <MyChartComponent />
      </motion.div>
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={glowStyles[4]}
      >
        <ContactSection />
      </motion.div>
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="sociallinks-glow"
      >
        <SocialLinks />
      </motion.div>
    </>
  );
};

export default Home;
