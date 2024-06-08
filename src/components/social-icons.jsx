import React from "react";

const SocialLinks = () => {
  return (
    <div
      id="socials"
      className="d-flex justify-content-center align-items-center p-3"
    >
      <p className="mb-0 fs-7 text-info">@follow me: </p>
      <div>
        <a
          className="text-decoration-none mx-3 mx-sm-2"
          href="https://github.com/EdetDavid"
        >
          <i className="fab fa-github text-white fa-1x"></i>
        </a>
        <a
          className="text-decoration-none mx-3 mx-sm-2"
          href="https://www.facebook.com/profile.php?id=100080024666123"
        >
          <i className="fab fa-facebook text-white"></i>
        </a>
        <a
          className="text-decoration-none mx-3 mx-sm-2"
          href="https://www.instagram.com/invites/contact/?i=rujib2gio5dh&utm_content=oemfdo8"
        >
          <i className="fab fa-instagram text-white"></i>
        </a>
        <a
          className="text-decoration-none mx-3 mx-sm-2"
          href="https://twitter.com/EdetDavid1234"
        >
          <i className="fab fa-twitter text-white"></i>
        </a>
        <a
          className="text-decoration-none mx-3 mx-sm-2"
          href="https://www.linkedin.com/in/edet-david-b2a85a266"
        >
          <i className="fab fa-linkedin text-white"></i>
        </a>
        <a
          className="text-decoration-none mx-3 mx-sm-2"
          href="https://wa.me/09091347486"
        >
          <i className="fab fa-whatsapp text-white"></i>
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
