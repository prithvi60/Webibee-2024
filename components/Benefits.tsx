"use client";
import { benefits } from "@/libs/data";
import { BenefitCard } from "./BenefitCard";
import Marquee from "react-fast-marquee";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
const animation = { duration: 25000, easing: (t: number) => t };

export default function Benefits() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "precision",
    drag: true,
    mode: "free-snap",
    rtl: true,
    breakpoints: {
      "(min-width: 540px)": {
        slides: { perView: 2, spacing: 30 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 30 },
      },
      "(min-width: 1440px)": {
        slides: { perView: 4, spacing: 50 },
      },
    },
    slides: { perView: 1, spacing: 50 },
    created(s) {
      s.moveToIdx(benefits.length - 1, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + benefits.length - 1, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + benefits.length - 1, true, animation);
    },
  });
  return (
    <section className="padding-variable py-6 md:py-10 lg:py-[60px] bg-primary">
      <div className="pb-14 mx-auto">
        <h1 className="hidden md:block font-Montserrat text-5xl md:text-6xl text-center text-default pb-6 capitalize">
          Benefits of getting a website built from us
        </h1>
        <h1 className="md:hidden font-Montserrat text-5xl md:text-7xl text-center text-default pb-6 capitalize">
          Benefits
        </h1>
        <hr className="w-12 md:w-60 mx-auto  bg-default p-0.5 border-t-0 rounded-md" />
      </div>
      {/* <div className="flex justify-center items-center flex-wrap gap-10 w-4/5 mx-auto"> */}
      {/* <Marquee pauseOnHover speed={70} autoFill={true} direction="right">
      <div className="flex items-center gap-5 w-full h-full py-5 first:ms-5">
        {benefits.map((item,idx)=>(
      <BenefitCard item={item} key={idx}/>
        ))}
        </div>
    </Marquee> */}
      <div ref={sliderRef} className="keen-slider">
        {benefits.map((service, idx) => (
          <div
            className="text-center shadow-md keen-slider__slide rounded-xl  font-Lato"
            key={idx}
          >
            <div className="px-4 py-3.5 text-xl xl:text-2xl font-medium text-white bg-black md:px-8 font-Lato line-clamp-1 overflow-hidden capitalize">
              <h4>{service.title}</h4>
            </div>
            <div className="px-4 md:px-8 py-6 pb-10 text-base md:text-lg font-normal text-white bg-secondary font-Lato line-clamp-3 h-[180px]">
              <p>{service.para}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
