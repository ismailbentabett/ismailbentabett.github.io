import React from "react";
import Slider from "react-slick";
import UseData from "../Hooks/UseData";

const SliderCommon = () => {
  const { sliderImg } = UseData();

  // responsive slider element

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    arrows: false,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 3,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="bg-[#F8FBFB] dark:bg-[#0D0D0D] max-w-full h-auto   py-10 rounded-xl">
      <h3 className="text-center dark:text-white text-6xl mb-3 font-semibold ">Clients</h3>
      <Slider {...settings} >

        {/* slider array */}

        {sliderImg.map((item, i) => (
          <img key={i} className=" overflow-hidden brand-img" src={item} alt="" />
        ))}
      </Slider>
    </div>
  );
};

export default SliderCommon;
