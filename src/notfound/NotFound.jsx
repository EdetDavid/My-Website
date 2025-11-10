import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate('/pages/notfound/NotFound');
  }, [navigate]);
  
  return null;
};

export default NotFound;
