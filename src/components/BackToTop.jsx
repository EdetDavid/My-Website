import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
import { useDarkMode } from '../context/DarkModeContext';
import './BackToTop.css';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { darkMode } = useDarkMode();

  useEffect(() => {
    const THRESHOLD = 150; // show earlier on shorter pages
    const toggleVisibility = () => {
      // Show button when page is scrolled past threshold
      const y = window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(y > THRESHOLD);
    };

    // initial check in case page loads scrolled
    toggleVisibility();

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className={`back-to-top ${darkMode ? 'dark' : 'light'}`}
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;