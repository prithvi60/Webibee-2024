"use client";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
// import required modules
import { EffectCards } from "swiper/modules";
import { Controller } from "swiper/modules";
import { workflow } from "@/libs/data";
import {  useEffect } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useSwiper } from "swiper/react";

export default function Workflow() {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.1,
  });

  return (
    <section className="padding-variable bg-primary">
      <div className="pb-10 mx-auto">
        <h1 className="font-Montserrat text-5xl md:text-7xl text-center text-default font-medium">
        <span className="hidden md:block"> Our </span>Workflow
        </h1>
        <hr className="mt-2 w-12 md:w-60 mx-auto  bg-default p-0.5 border-t-0 rounded-md" />
      </div>
      {/* <div className="h-full py-12 px-4 
      grid md:grid-cols-2 
      place-items-center"> */}
      <div className="h-full py-12 px-4 place-items-center">
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
        <div ref={ref}>‎ </div>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          modules={[EffectCards, Controller]}
          className="mySwiper w-[250px] h-[350px] md:h-full md:w-[450px]"
        >
          {workflow.map((work, idx) => (
            <SwiperSlide
              className="py-4 px-5 md:px-8 space-y-4 swiper-slider h-full border-2 border-warning"
              key={idx}
            >
              <h2 className="text-base md:text-3xl font-Lato">Stage {idx + 1}</h2>
              <p className="text-sm md:text-lg font-medium font-Lato">{work.para}</p>
              <div className="relative h-48 md:h-80 w-full  bg-transparent">
                <Image
                  fill
                  // src={"https://ik.imagekit.io/webibee/Agency/build.gif"}
                  src={"https://ik.imagekit.io/webibee/Agency/climb.gif"}
                  alt="images"
                  title="images"
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
          <SlideNext inView={inView} />
        </Swiper>
      </div>
    </section>
  );
}

function SlideNext({ inView }: { inView: boolean }) {
  const swiper = useSwiper();
  useEffect(() => {
    if (inView) {
      swiper.slideNext();
    }
  }, [inView]);
  return null;
}
