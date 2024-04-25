import React from "react";
import frosh from "../assets/images/frosh.png";

const Showcase = () => {
  return (
    <section className="p-5 m-5 container mx-auto justify-content-center align-items-center">
      <div
        id="showcase"
        className="d-flex gap-lg-5 offset-lg-1 justify-content-between align-items-center"
      >
        {/* <!-- col 1 --> */}
        <div id="showcase__text" className="col-md-6 justify-content-start">
          <div className="d-flex my-4">
            <h2 className="text-dark m-2 my-4">Hi, I'm David</h2>
          </div>
          {/* <!-- Title  --> */}
          <div className="d-flex my-4">
            <h1 className="text-light text-wrap">
              I am a Fullstack Developer with the aim to Rule the Tech
              Multiverse.
            </h1>
          </div>
          {/* <!-- text quote --> */}
          <div className="d-flex my-4">
            <h3 className="lead text-light">
              Multidisciplinary designer who aims at becoming the world 🌍
              <b> Best </b> Web developer.
              <a
                id="github-link"
                className="text-dark"
                href="https://github.com/EdetDavid"
              >
                {" "}
                github.com/EdetDavid{" "}
              </a>
            </h3>
          </div>
        </div>
        {/* <!-- col 2 --> */}
        <div className="col-md-4">
          <img
            id="showcase__image"
            className="scale-up-center w-100 img-thumbnail shadow img-fluid rounded-pill d-flex justify-content-center align-items-center"
            src={frosh}
            alt="showcase-img"
          />
        </div>
      </div>
    </section>
  );
};

export default Showcase;
