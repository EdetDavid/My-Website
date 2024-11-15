import React from "react";

const About = () => {
  return (
    <div id="container" className="container-flex my-5 p-5">
      {/* Heading Text */}
      <h1 className="text-white fw-bold">I build value by design.</h1>

      {/* body text */}
      <p
        className="lead text-dark"
        style={{
          lineHeight: "1.5",
          fontFamily: "Georgia, Times New Roman, Times, serif",
        }}
      >
        Hi, am Edet David, am a Fullstack developer with the passion for
        creating super <br />
        responsive, and highly scalable web-apps and software applications.
        <br />
        I am currently an undergraduate at the University of Uyo, Nigeria.{" "}
        <br />
      </p>

      <h4 className="fst-italic text-white text-decoration-underline">
        MY HOBBIES
      </h4>
      <div className="d-flex">
        <ul className="text-warning opacity-75">
          <li>
            <p className="text-white">Reading</p>
          </li>
          <li>
            <p className="text-white">Singing</p>
          </li>
          <li>
            <p className="text-white">Coding</p>
          </li>
          <li>
            <p className="text-white">Playing games</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
