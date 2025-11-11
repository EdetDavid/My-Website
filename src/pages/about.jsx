import React from "react";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const About = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate('/pages/about/About');
  }, [navigate]);
  
  return null;
};

export default About;
