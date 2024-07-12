"use client";

import { Element } from "react-scroll";
import { ourservices } from "@/libs/data";
import { useEffect, useState } from "react";
import Slider from "react-slick";

export default function Services() {
  const [loader, setLoader] = useState(false);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    initialSlide: 0,
    swipeToSlide : true,
    touchMove: true,
    // pauseOnFocus: false,
    // pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          // slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          // slidesToScroll: 2,
        },
      },
      // {
      //   breakpoint: 768,
      //   settings: {
      //     slidesToShow: 2,
      //     // slidesToScroll: 2,
      //   },
      // },
      // {
      //   breakpoint: 640,
      //   settings: {
      //     slidesToShow: 2,
      //     // slidesToScroll: 2,
      //   },
      // },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    setLoader(true);
    // console.log("logged");
    
  }, []);

  if (!loader) {
    return <div className="font-bold"> Loading Services...</div>;
  } else
    return (
      <Element
        className="py-2.5 w-full h-full space-y-3 md:space-y-4"
        name="Services"
      >
        <div className="slider-container w-full">
          <Slider {...settings}>
            {ourservices.map((service, idx) => (
              <div className="shadow-md" key={idx}>
                <div className="px-4 py-3.5 text-xl xl:text-2xl font-medium text-white bg-black md:px-8 font-Lato line-clamp-1 overflow-hidden text-left capitalize rounded-t-lg">
                  <h4>{service.title}</h4>
                </div>
                <div className="px-4 md:px-8 py-6 pb-10 text-base md:text-lg font-normal text-white bg-secondary font-Lato line-clamp-3 h-[160px] text-left rounded-b-lg">
                  <p>{service.desc}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Element>
    );
}
