import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousal.css"

const Carousal = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    
  };

  return (
    <Slider {...settings} >
      <div className="slider-wrapper">
        <img
          src={`https://images.unsplash.com/photo-1536593998369-f0d25ed0fb1d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80`}
          alt="imgOne"
        />
      </div>
      <div className="slider-wrapper">
        <img
          src={`https://images.unsplash.com/photo-1483985988355-763728e1935b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80`}
          alt="imgTwo"
        />
      </div>
      <div className="slider-wrapper">
        <img
          src={`https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80`}
          alt="imgThree"
        />
      </div>
    </Slider>
  );
};

export default Carousal;