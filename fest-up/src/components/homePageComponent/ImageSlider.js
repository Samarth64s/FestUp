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
    require("../../assets/images/Rectangle 6.png"),
    require("../../assets/images/Rectangle 5.png"),
    require("../../assets/images/Rectangle 7.png"),
    require("../../assets/images/Rectangle 8.png"),
  ];
  return (
    <Slider {...settings} className="flex">
      {images.map((image, index) => {
        return (
          <div key={index} className="w-full">
            <img className="h-56 p-1 w-full" src={image} alt="images" />
          </div>
        );
      })}
    </Slider>
  );
};

export default ImageSlider;
