import React from "react";

import holdings from "../assets/images/thrive_holdings.png";
import insurance from "../assets/images/thrive_insurance.png";
import travels from "../assets/images/thrive_travels.png";
import seplat_obt from "../assets/images/seplat_obt.png";
import staffadviser from "../assets/images/staff-adviser.png";
import aa from "../assets/images/a&a-empire.png";
import flexbook from "../assets/images/flexbook.png";
import telemedical from "../assets/images/telemedical.png";
import task from "../assets/images/taskscheduler.png";
import albinism from "../assets/images/albinism.png";
import shield from "../assets/images/shield.png";
import cis from "../assets/images/cis.png";
import IOT from "../assets/images/IOT.png";
import react_courseform from "../assets/images/react-courseform.png";
import courseform from "../assets/images/courseform.png";

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
          {/* Item 0 */}
          <div className="d-flex justify-content-center col-md-4 my-2">
            <div className="card" style={{ width: "18rem", height: "20rem" }}>
              <img
                src={holdings}
                className="card-img-top h-100"
                alt="thrivenig-img"
              />
              <div className="card-body">
                <h4 className="card-title">Thrive Holdings Limited</h4>
                <p className="card-text fs-5 text-lowercase">
                  thrive group website.
                </p>
                <a
                  href="https://www.thrivenig.com/"
                  className="btn btn-secondary mb-0"
                >
                  Visit
                </a>
              </div>
            </div>
          </div>
          {/* Item 1 */}
          <div className="d-flex justify-content-center col-md-4 my-2">
            <div className="card" style={{ width: "18rem", height: "20rem" }}>
              <img
                src={insurance}
                className="card-img-top h-100"
                alt="thrivenig-img"
              />
              <div className="card-body">
                <h4 className="card-title">Thrive Insurance Brokers Limited</h4>
                <p className="card-text fs-5 text-lowercase">
                  thrive insurance website.
                </p>
                <a
                  href="https://www.insurance.thrivenig.com/"
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
              <img
                src={travels}
                className="card-img-top h-100"
                alt="thrivenig-img"
              />
              <div className="card-body">
                <h4 className="card-title">Thrive Travels & Tours Limited</h4>
                <p className="card-text fs-5 text-lowercase">
                  thrive travels website.
                </p>
                <a
                  href="https://www.travels.thrivenig.com/"
                  className="btn btn-secondary mb-0"
                >
                  Visit
                </a>
              </div>
            </div>
          </div>
          {/* Item 3 */}
          <div className="d-flex justify-content-center col-md-4 my-2">
            <div className="card" style={{ width: "18rem", height: "20rem" }}>
              <img
                src={seplat_obt}
                className="card-img-top h-100"
                alt="staff-adviser img"
              />
              <div className="card-body">
                <h4 className="card-title">Seplat OBT </h4>
                <p className="card-text fs-5 text-lowercase">
                  Flight Booking App
                </p>
                <a
                  href="https://seplat-obt.onrender.com/"
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
              <img
                src={staffadviser}
                className="card-img-top h-100"
                alt="staff-adviser img"
              />
              <div className="card-body">
                <h4 className="card-title">Staff Adviser</h4>
                <p className="card-text fs-5 text-lowercase">
                  An Appointment Scheduling App
                </p>
                <a
                  href="https://staff-adviser.vercel.app/"
                  className="btn btn-secondary mb-0"
                >
                  Visit
                </a>
              </div>
            </div>
          </div>

          {/* Item 5 */}
          <div className="d-flex justify-content-center col-md-4 my-2">
            <div className="card" style={{ width: "18rem", height: "20rem" }}>
              <img src={aa} className="card-img-top h-50 img-fluid" alt="" />
              <div className="card-body">
                <h4 className="card-title">A&A Empire</h4>
                <p className="card-text fs-5 text-lowercase">
                  An ecommerce app
                </p>
                <a
                  href="https://aa-empire.vercel.app/"
                  className="btn btn-secondary m-0"
                >
                  Visit
                </a>
              </div>
            </div>
          </div>

          {/* Item 6 */}
          <div className="d-flex justify-content-center col-md-4 my-2">
            <div className="card" style={{ width: "18rem", height: "20rem" }}>
              <img src={flexbook} className="card-img-top h-100" alt="..." />
              <div className="card-body">
                <h4 className="card-title">Facebook UI</h4>
                <p className="card-text fs-5 text-lowercase">
                  A real clone of facebook.
                </p>
                <a
                  href="https://flexbook.onrender.com"
                  className="btn btn-secondary mb-0"
                >
                  Visit
                </a>
              </div>
            </div>
          </div>
          {/* Item 7 */}
          <div className="d-flex justify-content-center col-md-4 my-2">
            <div className="card" style={{ width: "18rem", height: "20rem" }}>
              <img src={telemedical} className="card-img-top h-100" alt="..." />
              <div className="card-body">
                <h4 class="card-title">Telemedical Hub</h4>
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

          {/* Item 8 */}
          <div className="d-flex justify-content-center col-md-4 my-2">
            <div className="card" style={{ width: "18rem", height: "20rem" }}>
              <img src={albinism} className="card-img-top h-100" alt="..." />
              <div className="card-body">
                <h4 class="card-title">Albinism AI </h4>
                <p class="card-text fs-5">
                  {" "}
                  Albinism predicting app for a population
                </p>
                <a
                  href="https://albinism-ai.vercel.app/"
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
              <img src={task} className="card-img-top h-100" alt="..." />
              <div className="card-body">
                <h4 class="card-title">Task Scheduler</h4>
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
          {/* Item 10 */}
          <div className="d-flex justify-content-center col-md-4 my-2">
            <div className="card" style={{ width: "18rem", height: "20rem" }}>
              <img src={shield} className="card-img-top h-100" alt="..." />
              <div className="card-body">
                <h4 class="card-title">Sheild Finance </h4>
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

          {/* Item 11 */}
          <div className="d-flex justify-content-center col-md-4 my-2">
            <div className="card" style={{ width: "18rem", height: "20rem" }}>
              <img src={cis} className="card-img-top h-100" alt="..." />
              <div className="card-body">
                <h4 class="card-title">CIS </h4>
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

          {/* Item 12 */}
          <div className="d-flex justify-content-center col-md-4 my-2">
            <div className="card" style={{ width: "18rem", height: "20rem" }}>
              <img src={IOT} className="card-img-top h-100" alt="..." />
              <div className="card-body">
                <h4 class="card-title">Internet Of Things </h4>
                <p class="card-text fs-5 text-lowercase">
                  Smart Devices for homes...
                </p>
                <a
                  href="https://internet-of-things.onrender.com/"
                  class="btn btn-secondary mb-0"
                >
                  Visit
                </a>
              </div>
            </div>
          </div>


               {/* Item 12 */}
          <div className="d-flex justify-content-center col-md-4 my-2">
            <div className="card" style={{ width: "18rem", height: "20rem" }}>
              <img src={react_coursform} className="card-img-top h-100" alt="..." />
              <div className="card-body">
                <h4 class="card-title">Courseform Approval App </h4>
                <p class="card-text fs-5 text-lowercase">
                  react courseform management app.
                </p>
                <a
                  href="https://internet-of-things.onrender.com/"
                  class="btn btn-secondary mb-0"
                >
                  Visit
                </a>
              </div>
            </div>
          </div>


               {/* Item 12 */}
          <div className="d-flex justify-content-center col-md-4 my-2">
            <div className="card" style={{ width: "18rem", height: "20rem" }}>
              <img src={courseform} className="card-img-top h-100" alt="..." />
              <div className="card-body">
                <h4 class="card-title">Course Form  </h4>
                <p class="card-text fs-5 text-lowercase">
                  django courseform approval app.
                </p>
                <a
                  href="https://courseform-approval.vercel.app/"
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
