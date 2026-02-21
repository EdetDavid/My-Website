import React, { createContext, useState, useContext, useEffect } from 'react';

const DarkModeContext = createContext(undefined);

export const DarkModeProvider = ({ children }) => {
  // Initialize from localStorage if present, otherwise respect OS preference
  const getInitial = () => {
    try {
      const stored = localStorage.getItem('darkMode');
      if (stored !== null) return stored === 'true';
    } catch (err) {
      // ignore localStorage errors
    }
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  };

  const [darkMode, setDarkMode] = useState(getInitial);

  // Persist preference
  useEffect(() => {
    try {
      localStorage.setItem('darkMode', darkMode ? 'true' : 'false');
    } catch (err) {
      // ignore
    }
  }, [darkMode]);

  const value = {
    darkMode,
    setDarkMode
  };

  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (context === undefined) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
};