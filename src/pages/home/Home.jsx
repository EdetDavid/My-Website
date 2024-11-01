// Home.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css"; // Custom styles for the Home component

// Import images
import slide1 from "../../assets/images/slides/slide-1.jpg";
import slide2 from "../../assets/images/slides/slide-2.jpg";
import slide3 from "../../assets/images/slides/slide-3.jpg";

// Import Images component
import Images from "./Images";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    { image: slide1, caption: "Explore the World" },
    { image: slide2, caption: "Discover New Places" },
    { image: slide3, caption: "Adventure Awaits" },
  ];

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <Images key={index} image={slide.image} caption={slide.caption} />
        ))}
      </Slider>
    </div>
  );
};

export default Home;