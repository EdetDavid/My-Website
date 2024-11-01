import React from "react";

const Projects = () => {
  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Projects</h2>
      <div className="row justify-content-center">
        
        {/* Item 12 */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center my-2">
          <div className="card" style={{ width: "100%", maxWidth: "18rem", height: "20rem" }}>
            <img src="smart_device_image_url" className="card-img-top h-100" alt="Smart Devices" />
            <div className="card-body">
              <h4 className="card-title">Smart Devices</h4>
              <p className="card-text fs-5 text-lowercase">
                Smart Devices for homes...
              </p>
              <a href="https://internet-of-things.onrender.com/" className="btn btn-secondary mb-0">
                Visit
              </a>
            </div>
          </div>
        </div>

        {/* Item 13 */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center my-2">
          <div className="card" style={{ width: "100%", maxWidth: "18rem", height: "20rem" }}>
            <img src="react_courseform" className="card-img-top h-100" alt="React Courseform" />
            <div className="card-body">
              <h4 className="card-title">Courseform</h4>
              <p className="card-text fs-5 text-lowercase">
                react courseform management app.
              </p>
              <a href="https://courseform-approval.vercel.app/" className="btn btn-secondary mb-0">
                Visit
              </a>
            </div>
          </div>
        </div>

        {/* Item 14 */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center my-2">
          <div className="card" style={{ width: "100%", maxWidth: "18rem", height: "20rem" }}>
            <img src="courseform" className="card-img-top h-100" alt="Django Courseform" />
            <div className="card-body">
              <h4 className="card-title">Course Form</h4>
              <p className="card-text fs-5 text-lowercase">
                django courseform approval app.
              </p>
              <a href="https://courseform-obp0.onrender.com/" className="btn btn-secondary mb-0">
                Visit
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Projects;
