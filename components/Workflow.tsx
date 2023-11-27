"use client";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
// import required modules
import { EffectCards } from "swiper/modules";
import { workflow } from "@/libs/data";

export default function Workflow() {
  return (
    <section className="py-16  px-5 ">
      <div className="pb-10 mx-auto">
        <h2 className="font-header text-5xl md:text-7xl text-center text-gradient">
          Our Workflow Process
        </h2>
        <hr className="w-56 mt-4 mx-auto p-[1px] bg-white" />
      </div>
      <div className="h-[70vh] bg-secondary py-12 px-4">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction	: true,
            pauseOnMouseEnter:true
          }}
          modules={[EffectCards]}
          className="mySwiper w-[250px] h-[300px] md:w-[350px] md:h-[450px] "
        >
          {workflow.map((work,idx)=>(
          <SwiperSlide className="p-4 md:p-5 space-y-4 swiper-slider" key={idx}>
            <h3 className="text-base md:text-3xl">Planning</h3>
            <p className="text-sm md:text-lg">
              {work.para}
            </p>
          </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
