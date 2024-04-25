import React from "react";

import staffadviser from "../assets/images/staff-adviser.png";
import aa from "../assets/images/a&a-empire.png";
import flexbook from "../assets/images/flexbook.png";
import telemedical from "../assets/images/telemedical.png";
import task from "../assets/images/taskscheduler.png";
import albinism from "../assets/images/albinism.png";
import shield from "../assets/images/shield.png";
import cis from "../assets/images/cis.png";
import IOT from "../assets/images/IOT.png";

const Projects = () => {
  return (
    <div className="p-5 my-5 mx-auto">
      <div className="d-flex flex-column mx-auto">
        {/* Heading Text */}
        <h1 className="display1 text-white text-center text-uppercase mt-4 mb-4">
          My Projects
        </h1>

        <div className="row p-1 overflow-auto">
          {/* Project items */}
          {/* Item 1 */}
          <div className="d-flex justify-content-center col-md-4 my-2">
            <div className="card" style={{ width: "18rem", height: "20rem" }}>
              <img
                src={staffadviser}
                className="card-img-top h-100"
                alt="staff-adviser img"
              />
              <div className="card-body">
                <h5 className="card-title">Staff Adviser</h5>
                <p className="card-text fs-5">An Appointment Scheduling App</p>
                <a
                  href="https://staff-adviser.vercel.app/"
                  className="btn btn-secondary mb-0"
                >
                  Visit
                </a>
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="d-flex justify-content-center col-md-4 my-2">
            <div className="card" style={{ width: "18rem", height: "20rem" }}>
              <img src={aa} className="card-img-top h-50 img-fluid" alt="" />
              <div className="card-body">
                <h5 className="card-title">A&A Empire</h5>
                <p className="card-text fs-5">An ecommerce app</p>
                <a
                  href="https://aa-empire.vercel.app/"
                  className="btn btn-secondary m-0"
                >
                  Visit
                </a>
              </div>
            </div>
          </div>

          {/* Item 3 */}
          <div className="d-flex justify-content-center col-md-4 my-2">
            <div className="card" style={{ width: "18rem", height: "20rem" }}>
              <img src={flexbook} className="card-img-top h-100" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Facebook UI</h5>
                <p className="card-text fs-5">A real clone of facebook.</p>
                <a
                  href="https://flexbook.onrender.com"
                  className="btn btn-secondary mb-0"
                >
                  Visit
                </a>
              </div>
            </div>
          </div>
          {/* Item 4 */}
          <div className="d-flex justify-content-center col-md-4 my-2">
            <div className="card" style={{ width: "18rem", height: "20rem" }}>
              <img src={telemedical} className="card-img-top h-100" alt="..." />
              <div className="card-body">
                <h5 class="card-title">Telemedical Hub</h5>
                <p class="card-text"> A webapp for telemedical services</p>
                <a
                  href="https://telemedical-hub.onrender.com"
                  class="btn btn-secondary mb-0"
                >
                  Visit
                </a>
              </div>
            </div>
          </div>

          {/* Item 5 */}
          <div className="d-flex justify-content-center col-md-4 my-2">
            <div className="card" style={{ width: "18rem", height: "20rem" }}>
              <img src={albinism} className="card-img-top h-100" alt="..." />
              <div className="card-body">
                <h5 class="card-title">Albinism AI </h5>
                <p class="card-text fs-5">
                  {" "}
                  Albinism predicting app for a population
                </p>
                <a
                  href="https://albinism-ai.onrender.com/"
                  class="btn btn-secondary mb-0"
                >
                  Visit
                </a>
              </div>
            </div>
          </div>
          {/* Item 6 */}
          <div className="d-flex justify-content-center col-md-4 my-2">
            <div className="card" style={{ width: "18rem", height: "20rem" }}>
              <img src={task} className="card-img-top h-100" alt="..." />
              <div className="card-body">
                <h5 class="card-title">Task Scheduler</h5>
                <p class="card-text fs-5"> Professional Todo App</p>
                <a
                  href="https://taskscheduler.onrender.com/"
                  class="btn btn-secondary mb-0"
                >
                  Visit
                </a>
              </div>
            </div>
          </div>
          {/* Item 7 */}
          <div className="d-flex justify-content-center col-md-4 my-2">
            <div className="card" style={{ width: "18rem", height: "20rem" }}>
              <img src={shield} className="card-img-top h-100" alt="..." />
              <div className="card-body">
                <h5 class="card-title">Sheild Finance </h5>
                <p class="card-text fs-5"> A simple bank app</p>
                <a
                  href="https://sheidfinance.onrender.com/"
                  class="btn btn-secondary mb-0"
                >
                  Visit
                </a>
              </div>
            </div>
          </div>

          {/* Item 8 */}
          <div className="d-flex justify-content-center col-md-4 my-2">
            <div className="card" style={{ width: "18rem", height: "20rem" }}>
              <img src={cis} className="card-img-top h-100" alt="..." />
              <div className="card-body">
                <h5 class="card-title">CIS </h5>
                <p class="card-text fs-5"> A ciminal records app</p>
                <a
                  href="https://cis-5taw.onrender.com/"
                  class="btn btn-secondary mb-0"
                >
                  Visit
                </a>
              </div>
            </div>
          </div>

          {/* Item 9 */}
          <div className="d-flex justify-content-center col-md-4 my-2">
            <div className="card" style={{ width: "18rem", height: "20rem" }}>
              <img src={IOT} className="card-img-top h-100" alt="..." />
              <div className="card-body">
                <h5 class="card-title">Internet Of Things </h5>
                <p class="card-text fs-5">Smart Devices for homes...</p>
                <a
                  href="https://internet-of-things.onrender.com/"
                  class="btn btn-secondary mb-0"
                >
                  Visit
                </a>
              </div>
            </div>
          </div>

          {/* end */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
