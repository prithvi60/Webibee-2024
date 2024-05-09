"use client";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import Marquee from "react-fast-marquee";
// import { FaCircleCheck } from "react-icons/fa6";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { Element } from "react-scroll";
import { ourservices } from "@/libs/data";
import { useEffect, useState } from "react";
const animation = { duration: 35000, easing: (t:any) => t };

export default function Services() {
  const [loader, setLoader] = useState(false);
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: true,
    mode: "free",
    // rtl: true,
    breakpoints: {
      "(min-width: 540px)": {
        slides: { perView: 2, spacing: 40 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 40 },
      },
      "(min-width: 1440px)": {
        slides: { perView: 4, spacing: 40 },
      },
    },
    slides: { perView: 1, spacing: 60 },
    created(s) {
      s.moveToIdx(ourservices.length - 1, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + ourservices.length - 1, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + ourservices.length - 1, true, animation);
    },
  });

  useEffect(() => {
    setLoader(true);
  }, []);
  if (!loader) {
    return <div className="font-bold"> Loading Services...</div>;
  } else
    return (
      <Element
        className="py-2.5 w-screen space-y-3 md:space-y-4"
        name="Services"
      >
        {/* <Marquee pauseOnHover speed={70} autoFill={true}>
          <div className="flex justify-center items-center flex-wrap gap-10 first:ms-10">
            {ourservices.map((service, idx) => (
              <Card
                className="w-[275px] h-[220px] md:w-[360px] md:h-[220px]"
                key={idx}
              >
                <CardHeader className="flex gap-3 bg-black font-Lato">
                  <h2 className="text-default font-medium text-2xl px-2 line-clamp-1">
                    {service.title}
                  </h2>
                </CardHeader>
                <CardBody className="pb-10 bg-secondary font-Lato">
                  <h2 className="font-normal text-default text-lg px-2 py-2 line-clamp-3">
                    {service.desc}
                  </h2>
                </CardBody>
              </Card>
            ))}
          </div>
        </Marquee> */}
        <div ref={sliderRef} className="keen-slider">
          {ourservices.map((service, idx) => (
            <div className="shadow-md keen-slider__slide rounded-xl" key={idx}>
              <div className="px-4 py-3.5 text-xl xl:text-2xl font-medium text-white bg-black md:px-8 font-Lato line-clamp-1 overflow-hidden text-left capitalize">
                <h4>{service.title}</h4>
              </div>
              <div className="px-4 md:px-8 py-6 pb-10 text-base font-normal text-white bg-secondary font-Lato line-clamp-3 h-[180px] text-left">
                <p>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Element>
    );
}
