import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://mywebsite-backend-la9g.onrender.com/api/contact/",
        // "http://127.0.0.1:9000/api/contact/",
        formData
      );

      console.log(response.data);

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Request failed with error:", error);
    }
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="container">
        <div className="d-flex flex-column justify-content-center align-items-center img-fluid">
          {/* contact header */}
          <h2 className="contact-text shadow text-white">Contact Me</h2>
          <div
            className="d-flex flex-column justify-content-center align-items-center"
            id="contact__form-wrapper"
          >
            <form
              onSubmit={handleSubmit}
              id="myForm"
              action="/"
              method="POST"
              className="form-control"
            >
              {/* CSRF token - Replace with your actual token */}
              <input
                type="hidden"
                name="csrfmiddlewaretoken"
                value="your_csrf_token_here"
                onChange={handleChange}
              />
              <label htmlFor="name">Enter Name: </label>
              <input
                id="name"
                type="text"
                name="name"
                className="form-control mb-2"
                placeholder="Enter Your Name"
                onChange={handleChange}
                value={formData.name}
                required
              />
              <label htmlFor="email"> Enter Email: </label>
              <input
                id="email"
                type="email"
                name="email"
                className="form-control mb-2"
                placeholder="Enter Your Email"
                onChange={handleChange}
                value={formData.email}
                required
              />
              <label htmlFor="phone"> Enter Phone: </label>
              <input
                id="phone"
                type="phone"
                name="phone"
                className="form-control mb-2"
                placeholder="Enter Your Phone"
                onChange={handleChange}
                value={formData.phone}
                required
              />
              <label htmlFor="form-message"> Message Us: </label>
              <textarea
                name="message"
                className="w-100"
                id="form-message"
                cols="35"
                rows="5"
                placeholder="Write message..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>

              <br />
              <button type="submit" className="btn btn-outline-light mb-1">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
