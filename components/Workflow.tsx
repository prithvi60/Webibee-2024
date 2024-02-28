"use client";
// import Spline from "@splinetool/react-spline";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
// import required modules
import { EffectCards } from "swiper/modules";
import { workflow } from "@/libs/data";
import { Suspense, useState } from "react";
import Image from "next/image";
// import { Spinner } from "@nextui-org/react";

export default function Workflow() {
  const [loader, setLoader] = useState(true);

  return (
    <section className="padding-variable bg-primary">
      <div className="pb-10 mx-auto">
        <h2 className="font-Montserrat text-5xl md:text-7xl text-center text-default font-medium">
          Our Workflow
        </h2>
        <hr className="mt-2 w-60 mx-auto  bg-default p-0.5 border-t-0 rounded-md" />
      </div>
      {/* <div className="h-full py-12 px-4 
      grid md:grid-cols-2 
      place-items-center"> */}
      <div
        className="h-full py-12 px-4 place-items-center">
        {/* <video muted controls autoPlay className="w-full h-full md:w-[640px] lg:w-[640px] md:h-[360px] rounded-lg hidden md:block">
         <source src="/sample.mp4" type="video/mp4"/>
         </video> */}

        {/* <section className="w-full md:w-[640px] lg:w-[640px]  rounded-lg hidden md:block">
          {loader ? (
            <div className="font bold text-2xl text-center ">
              Wait for it ... <Spinner size="sm" />
            </div>
          ) : (
            <div className="font bold text-2xl"> ‎ </div>
          )}
          <Suspense fallback={<div>Loading...</div>}>
            <Spline
              scene="https://prod.spline.design/fIcByMH0HNy-OoeW/scene.splinecode"
              onLoad={() =>
                setTimeout(() => {
                  setLoader(false);
                }, 1000)
              }
            />
          </Suspense>
        </section> */}

        <Swiper
          effect={"cards"}
          grabCursor={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          modules={[EffectCards]}
          className="mySwiper w-[250px] h-full md:w-[350px]"
        >
          {workflow.map((work, idx) => (
            <SwiperSlide
              className="py-4 px-5 md:px-8 space-y-4 swiper-slider h-full border-2 border-warning"
              key={idx}
            >
              <h3 className="text-base md:text-3xl">Step {idx + 1}</h3>
              <p className="text-sm md:text-lg">{work.para}</p>
              <div className="relative h-60 w-full  md:h-80 bg-transparent">
              <Image fill src={"/avatar-3.jpg"} alt="images" className="object-contain"/>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
