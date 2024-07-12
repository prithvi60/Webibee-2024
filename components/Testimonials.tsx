"use client";
import { Card } from "@nextui-org/react";
import { Element } from "react-scroll";
import TestimonialCard from "./TestimonialCard";
import Marquee from "react-fast-marquee";
import { lists } from "@/libs/data";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
const animation = { duration: 25000, easing: (t: number) => t };

export default function Testimonials() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "precision",
    drag: true,
    mode: "free-snap",
    breakpoints: {
      "(min-width: 540px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 30 },
      },
      "(min-width: 1440px)": {
        slides: { perView: 3, spacing: 50 },
      },
    },
    slides: { perView: 1, spacing: 60 },
    created(s) {
      s.moveToIdx(lists.length - 1, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + lists.length - 1, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + lists.length - 1, true, animation);
    },
  });
  return (
    <Element
      className="padding-variable py-6 md:py-10 lg:py-[60px] h-full flex flex-col gap-4 bg-primary"
      name="testimonial"
    >
      <div>
        <h1 className="capitalize text-[2.5rem] md:text-7xl w-full mx-auto tracking-wide font-Montserrat font-normal text-center text-default">
          <span className="hidden md:block">Customer</span> Testimonials
        </h1>
        <hr className="w-12 md:w-56 mt-4 mx-auto p-0.5 border-t-0 rounded-md bg-default" />
      </div>
      {/* <Marquee pauseOnHover speed={70} autoFill={true}>
        <div className="flex items-center gap-5 w-full h-full py-5 first:ms-5">
          {lists.map((list, idx) => (
            <TestimonialCard list={list} key={idx} />
          ))}
        </div>
      </Marquee> */}
      <div ref={sliderRef} className="keen-slider">
        {lists.map((item, idx) => (
          <div className="shadow-md keen-slider__slide rounded-xl" key={idx}>
            <div className="flex items-center gap-4 px-4 py-5 text-white bg-black md:px-8 md:gap-8">
              <Image
                alt={`${item.country} logo`}
                height={55}
                src={item.img}
                width={55}
                // title={list.country}
                className="rounded-full"
              />
              <div className="space-y-0.5">
                <h4 className="text-lg font-semibold leading-none capitalize md:text-xl font-Lato line-clamp-1">
                  {item.title}
                </h4>
                <p className="text-sm capitalize md:text-base lg:text-lg text-slate-100 font-Lato">
                  {item.country}
                </p>
              </div>
            </div>
            <div className="px-4 py-6 pb-10 font-normal md:px-8 bg-secondary font-Lato text-base md:text-lg text-white/90 !h-[255px] flex flex-col justify-between items-start">
              <p className="tracking-wide line-clamp-5">{item.para}</p>
              <div className="flex items-center mb-1.5">
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 ms-1 md:ms-1.5 text-yellow-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 ms-1 md:ms-1.5 text-yellow-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 ms-1 md:ms-1.5 text-yellow-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 ms-1 md:ms-1.5 text-yellow-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 ms-1 md:ms-1.5 text-yellow-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Card />
    </Element>
  );
}
