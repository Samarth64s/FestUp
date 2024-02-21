import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const images = [
    "Rectangle 6.png",
    "Rectangle 5.png",
    "Rectangle 7.png",
    "Rectangle 8.png",
    // Add more image paths as needed
  ];
  return (
    <Slider {...settings} className="flex">
      {images.map((image, index) => {
        return (
          <div key={index} className="w-full">
            <img
              className="h-56 p-1 w-full"
              src={process.env.PUBLIC_URL + `/images/${image}`}
              alt="images"
            />
          </div>
        );
      })}
    </Slider>
  );
};

export default ImageSlider;
