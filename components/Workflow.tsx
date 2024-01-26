"use client";
import Spline from '@splinetool/react-spline';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
// import required modules
import { EffectCards } from "swiper/modules";
import { workflow } from "@/libs/data";
import { Suspense, useState } from 'react';
import { Spinner } from '@nextui-org/react';

export default function Workflow() {
  const [loader, setLoader] = useState(true);

  return (
    <section className="padding-variable bg-gradient">
      <div className="pb-10 mx-auto">
        <h2 className="font-Montserrat text-5xl md:text-7xl text-center text-white">
          Our Workflow 
        </h2>
        <hr className="w-56 mt-4 mx-auto p-0.5 border-t-0 rounded-md " />
      </div>
      <div className="h-full py-12 px-4 grid md:grid-cols-2 place-items-center">
      {/* <video muted controls autoPlay className="w-full h-full md:w-[640px] lg:w-[640px] md:h-[360px] rounded-lg hidden md:block">
         <source src="/sample.mp4" type="video/mp4"/>
         </video> */}
   
         <section  className="w-full h-full md:w-[640px] lg:w-[640px]  rounded-lg hidden md:block">
         {loader ? (
          <div className="font bold text-2xl ">
            Wait for it ... <Spinner size="sm" />
          </div>):<div className="font bold text-2xl"> ‎ </div>
        }
          <Suspense fallback={<div>Loading...</div>}>
    <Spline scene="https://prod.spline.design/fIcByMH0HNy-OoeW/scene.splinecode" 
          onLoad={() =>
            setTimeout(() => {
              setLoader(false);
            }, 2000)
          }
    />
    </Suspense>
    </section>

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
