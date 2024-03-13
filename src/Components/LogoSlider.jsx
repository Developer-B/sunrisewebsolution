import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LogoSlider = ({ logos }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderContainerStyles = {
    overflow: "hidden",
  };

  return (
    <div style={sliderContainerStyles}>
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index}>
            <img src={logo} alt={`Logo ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LogoSlider;
