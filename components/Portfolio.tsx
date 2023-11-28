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

export default function Portfolio() {
  return (
    <section className="py-16 px-5">
      <div className="mx-auto">
        <h2 className="font-header text-5xl md:text-7xl text-center text-gradient">
        Our Portfolio
        </h2>
        <hr className="w-56 mt-4 mx-auto p-[1px] bg-white" />
      </div>
      <div className='bg-secondary py-12'>
      <Swiper
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
        <SwiperSlide className='!w-[280px] !h-[380px] md:!w-[500px] md:!h-[550px] bg-contain bg-center relative group' key={idx}>
          <Link href={item.href}>
          <Image alt={item.title} src={item.img} fill className='absolute rounded-xl border-2 border-primary object-cover object-center'/>
          </Link>
          <h4 className='absolute bottom-5 left-10 text-lg md:text-4xl font-header font-semibold text-white md:opacity-0 transition-all transform md:-translate-y-20 md:duration-1000
          opacity-100  translate-y-0 md:group-hover:opacity-100 md:group-hover:translate-y-0'>{item.title}</h4>
        </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </section>
  )
}
