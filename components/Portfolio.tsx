"use client";
import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";

// import required modules
import { EffectCoverflow } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { portfolio } from "@/libs/data";
import { Element } from "react-scroll";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

export default function Portfolio() {
  return (
    <Element
      className="padding-variable p-6 md:p-10 lg:p-[60px] bg-primary mt-24 md:mt-16"
      name="Portfolio"
    >
      <div className="mx-auto">
        <h1 className="font-Gothic font-medium text-6xl md:text-8xl text-center text-white">
          {/* <span className="hidden md:block"> */}
           Get Stunning AI-Optimized Websites!
        </h1>
        <hr className="w-36 md:w-56 mt-4 mx-auto p-0.5 bg-default border-t-0 rounded-md" />
      </div>
      <div className="py-12">
        <Swiper
          effect={"coverflow"}
          // grabCursor={true}
          autoplay={{
            delay: 3000,
            pauseOnMouseEnter: true,
          }}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          // pagination={true}
          modules={[EffectCoverflow]}
          className="mySwiper"
        >
          <SlideNextButton />
          <SlidePrevButton />
          {portfolio.map((item, idx) => (
            <SwiperSlide
              className="!w-[280px] !h-[350px] md:!w-[470px] md:!h-[600px] bg-contain bg-center relative group !my-6"
              key={idx}
            >
              <Link href={item.href} target={"_blank"} title={item.title}>
                <Image
                  alt={item.title}
                  title={item.title}
                  src={item.img}
                  fill
                  sizes="(min-width: 780px) 466px, 276px"
                  className="absolute rounded-xl border-2 border-warning object-cover object-center"
                />
              </Link>
              <h2
                className="absolute bottom-5 left-10 text-lg md:text-4xl font-semibold md:opacity-0 transition-all transform md:-translate-y-20 md:duration-1000
          opacity-100  translate-y-0 md:group-hover:opacity-100 md:group-hover:translate-y-0 text-default bg-success rounded-md p-2 max-w-[320px] font-Merri"
              >
                {item.title}
              </h2>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Element>
  );
}
const SlideNextButton = () => {
  const swiper = useSwiper();

  return (
    <button
      role="button"
      aria-label="next logo"
      onClick={() => swiper.slideNext()}
      className="text-secondary bg-warning absolute top-1/2 right-2 rounded-full  z-[100] hover:animate-pulse hover:bg-white"
    >
      <FaArrowAltCircleRight size={"3em"} />
    </button>
  );
};
const SlidePrevButton = () => {
  const swiper = useSwiper();

  return (
    <button
      role="button"
      aria-label="prev logo"
      onClick={() => swiper.slidePrev()}
      className="text-secondary bg-warning rounded-full absolute top-1/2  z-[100] left-2 hover:animate-pulse hover:bg-white"
    >
      <FaArrowAltCircleLeft size={"3em"} />
    </button>
  );
};
