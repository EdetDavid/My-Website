import React, { useState } from "react";
import { motion } from "framer-motion";

const SkillRing = ({ skill, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const radius = 80;
  const strokeWidth = 12;
  const normalizedSize = 180;
  const center = normalizedSize / 2;
  const circumference = 2 * Math.PI * radius;
  const progressOffset = circumference - (skill.level / 5) * circumference;
  const rotationOffset = -90;

  const colors = {
    Frontend: {
      primary: "#3b82f6",
      glow: "rgba(59, 130, 246, 0.5)"
    },
    Backend: {
      primary: "#8b5cf6",
      glow: "rgba(139, 92, 246, 0.5)"
    },
    Database: {
      primary: "#06b6d4",
      glow: "rgba(6, 182, 212, 0.5)"
    },
    Mobile: {
      primary: "#ec4899",
      glow: "rgba(236, 72, 153, 0.5)"
    }
  };

  return (
    <motion.div
      className="skill-ring"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: "180px",
        height: "180px",
        position: "relative",
        margin: "1rem",
        filter: `drop-shadow(0 0 ${isHovered ? '20px' : '10px'} ${colors[skill.category].glow})`,
        transition: 'filter 0.3s ease',
      }}
    >
      <svg
        width={normalizedSize}
        height={normalizedSize}
        viewBox={`0 0 ${normalizedSize} ${normalizedSize}`}
        style={{ filter: isHovered ? 'url(#water)' : 'none' }}
      >
        <defs>
          <filter id="water" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence 
              type="fractalNoise"
              baseFrequency="0.01 0.05"
              numOctaves="3" 
              seed="1"
              result="noise"
            >
              <animate
                attributeName="baseFrequency"
                dur="10s"
                values="0.01 0.05;0.02 0.06;0.01 0.05"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap 
              in="SourceGraphic"
              in2="noise"
              scale="5"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
          
          <linearGradient id={`gradient-${skill.name}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={colors[skill.category].primary} stopOpacity="0.9" />
            <stop offset="50%" stopColor={colors[skill.category].primary} stopOpacity="0.5" />
            <stop offset="100%" stopColor={colors[skill.category].primary} stopOpacity="0.8" />
            <animate
              attributeName="y1"
              values="0%;100%;0%"
              dur="3s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y2"
              values="100%;0%;100%"
              dur="3s"
              repeatCount="indefinite"
            />
          </linearGradient>
        </defs>

        {/* Background circle */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="rgba(203, 213, 225, 0.1)"
          strokeWidth={strokeWidth}
        />
        
        {/* Progress circle with liquid effect */}
        <motion.circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={`url(#gradient-${skill.name})`}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          strokeLinecap="round"
          transform={`rotate(${rotationOffset} ${center} ${center})`}
          initial={{ strokeDashoffset: circumference }}
          animate={{ 
            strokeDashoffset: progressOffset,
            rotate: isHovered ? [0, 360] : 0
          }}
          transition={{ 
            strokeDashoffset: { duration: 1.5, ease: "easeInOut", delay: index * 0.2 },
            rotate: { duration: 20, ease: "linear", repeat: Infinity }
          }}
        >
          <animate
            attributeName="stroke-dashoffset"
            values={`${progressOffset};${progressOffset - 10};${progressOffset}`}
            dur="3s"
            repeatCount="indefinite"
          />
        </motion.circle>
      </svg>
      
      {/* Skill info */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <div style={{ fontSize: "1rem", fontWeight: "600", marginBottom: "0.25rem" }}>
          {skill.name}
        </div>
        <div style={{ fontSize: "0.9rem", color: "#94a3b8" }}>
          {(skill.level / 5 * 100).toFixed(0)}%
        </div>
      </div>
    </motion.div>
  );
};

const MyChartComponent = () => {
  const skills = [
    { name: "React", level: 5, category: "Frontend" },
    { name: "JavaScript", level: 4, category: "Frontend" },
    { name: "Node.js", level: 4, category: "Backend" },
    { name: "Python", level: 4, category: "Backend" },
    { name: "PostgreSQL", level: 4, category: "Database" },
    { name: "React Native", level: 4, category: "Mobile" },
  ];

    // Cleanup
  return (
    <motion.section
      className="skills-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      style={{
        padding: "4rem 0",
        background: "transparent",
      }}
    >
      <div className="container">
        <div
          className="skills-grid"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {skills.map((skill, index) => (
            <SkillRing key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default MyChartComponent;
