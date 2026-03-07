import React, { useEffect, useState } from 'react';
import { useDarkMode } from '../context/DarkModeContext';
import './MouseEffect.css';

const MouseEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { darkMode } = useDarkMode();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const cursorColor = darkMode ? '#60a5fa' : '#ff0000';
  const trailColor = darkMode ? 'rgba(96, 165, 250, 0.5)' : 'rgba(255, 0, 0, 0.5)';
  const hoverColor = darkMode ? '#cc2b5e' : '#cc0000';

  // Set CSS variables for hover
  useEffect(() => {
    document.documentElement.style.setProperty('--cursor-hover-color', hoverColor);
  }, [hoverColor]);

  return (
    <>
      <div
        className="cursor"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          backgroundColor: cursorColor,
        }}
      />
      <div
        className="cursor-trail"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          borderColor: trailColor,
        }}
      />
    </>
  );
};

export default MouseEffect;