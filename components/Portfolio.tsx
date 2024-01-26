"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import { portfolio } from '@/libs/data';
import { Element } from 'react-scroll';

export default function Portfolio() {
  return (
    <Element className="padding-variable" name='Portfolio'>
      <div className="mx-auto">
        <h2 className="font-Montserrat text-5xl md:text-7xl text-center text-gradient">
        Our Portfolio
        </h2>
        <hr className="w-56 mt-4 mx-auto bg-gradient p-0.5 border-t-0 rounded-md" />
      </div>
      <div className='bg-secondary py-12'>
      <Swiper
      // navigation={true}
      // navigation={{
      //   nextEl: ".button-next",
      //   prevEl: ".button-prev",
      //   disabledClass: "swiper-button-disabled"
      // }}
        effect={'coverflow'}
        grabCursor={true}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter:true
        }}
        centeredSlides={true}
        slidesPerView={'auto'}
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
        {portfolio.map((item,idx) =>(
        <SwiperSlide className='!w-[280px] !h-[350px] md:!w-[470px] md:!h-[600px] bg-contain bg-center relative group !my-6' key={idx}>
          <Link href={item.href} target={"_blank"}>
          <Image alt={item.title} src={item.img} fill className='absolute rounded-xl border-2 border-primary object-cover object-center'/>
          </Link>
          <h4 className='absolute bottom-5 left-10 text-lg md:text-4xl font-Montserrat font-semibold  md:opacity-0 transition-all transform md:-translate-y-20 md:duration-1000
          opacity-100  translate-y-0 md:group-hover:opacity-100 md:group-hover:translate-y-0 text-primary bg-white rounded-md p-2'>{item.title}</h4>
        </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </Element>
  )
}
