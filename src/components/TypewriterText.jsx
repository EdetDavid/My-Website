import React, { useState, useEffect, useCallback } from "react";
import { motion, useAnimation } from "framer-motion";

const TypewriterText = ({ text, delay = 90, onComplete }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isErasing, setIsErasing] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const cursorControls = useAnimation();

  // Smooth cursor animation
  useEffect(() => {
    cursorControls.start({
      opacity: [1, 0],
      transition: {
        duration: 0.7,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    });
  }, [cursorControls]);

  // Natural typing variation
  const getRandomDelay = useCallback(() => {
    return delay * (0.8 + Math.random() * 0.5);
  }, [delay]);

  useEffect(() => {
    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false);
        setIsErasing(true);
      }, 1800); // Slightly shorter pause for better rhythm
      return () => clearTimeout(pauseTimeout);
    }

    if (isErasing) {
      if (displayedText === "") {
        setIsErasing(false);
        setCurrentIndex(0);
        if (onComplete) onComplete();
      } else {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1));
        }, delay * 0.6); // Faster erasing for better flow
        return () => clearTimeout(timeout);
      }
    } else {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + text[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        }, getRandomDelay());
        return () => clearTimeout(timeout);
      } else {
        setIsPaused(true);
      }
    }
  }, [
    currentIndex,
    delay,
    text,
    isErasing,
    isPaused,
    displayedText,
    onComplete,
    getRandomDelay
  ]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayedText}
      <motion.span animate={cursorControls} style={{ marginLeft: "2px" }}>
        |
      </motion.span>
    </motion.span>
  );
};

export default TypewriterText;
