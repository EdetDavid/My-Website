// Images.js
import React from "react";
import PropTypes from "prop-types";


const Images = ({ image, caption }) => (
  <div className="slide" style={{ backgroundImage: `url(${image})` }}>
    <div className="caption">{caption}</div>
  </div>
);

Images.propTypes = {
  image: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
};

export default Images;