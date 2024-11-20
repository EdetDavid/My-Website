import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer bg-transparent text-dark p-3 w-100">
        <div
          id="footer-wrapper"
          className="d-flex justify-content-center align-items-center position-relative"
        >
          <p className="text-muted my-2">&copy; All rights reserved</p>
          <div className="position-absolute end-0">
            <a href="#navbar">
              <i className="fas fa-caret-up text-white fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
