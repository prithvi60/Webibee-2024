"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Keyboard, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import Chart from './Chart';


export default function ClientHighlight() {
  return (
    <section className="padding-variable py-6 md:py-10 lg:py-[60px]">
      <div className="pb-10 mx-auto">
        <h2 className="font-Montserrat text-5xl md:text-7xl text-center text-default capitalize text-gradient">
        Case Study Highlight
        </h2>
        <hr className="w-56 mt-4 mx-auto bg-gradient p-0.5 border-t-0 rounded-md" />
      </div>
      <div className='h-[60vh] bg-transparent py-12 px-4'>
      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          767: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Navigation, Pagination]}
        className="mySwiper w-full h-full"
      >
        <SwiperSlide className='relative'>
          <Image alt='...' fill src={"/img-1.jpg"} className="absolute border-2 border-primary object-cover object-center"/>
        </SwiperSlide>
        <SwiperSlide className='relative rounded-l-lg'>
          <Chart/>
        </SwiperSlide>
        <SwiperSlide className='relative font-Lato bg-black-gradient text-default rounded-r-lg p-6 m-auto'>
          <h4 className='text-lg md:text-xl font-semibold'>Customer Feedback</h4>
          <p className='text-sm md:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos optio autem, quibusdam debitis quod numquam unde sint! Magni aspernatur dicta corrupti praesentium.</p>
        </SwiperSlide>
        <SwiperSlide className='relative rounded-l-lg'>
        <Chart/>
        </SwiperSlide>
        <SwiperSlide className='relative font-Lato bg-black-gradient text-default rounded-r-lg p-6 m-auto'>
          <h4 className='text-lg md:text-xl font-semibold'>Customer Feedback</h4>
          <p className='text-sm md:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos optio autem, quibusdam debitis quod numquam unde sint! Magni aspernatur dicta corrupti praesentium.</p>
        </SwiperSlide>
        <SwiperSlide className='relative rounded-l-lg'>
        <Chart/>
        </SwiperSlide>
        <SwiperSlide className='relative font-Lato bg-black-gradient text-default rounded-r-lg p-6 m-auto'>
          <h4 className='text-lg md:text-xl font-semibold'>Customer Feedback</h4>
          <p className='text-sm md:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos optio autem, quibusdam debitis quod numquam unde sint! Magni aspernatur dicta corrupti praesentium.</p>
        </SwiperSlide>
      </Swiper>
      </div>
      </section>
  )
}
