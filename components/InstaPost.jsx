"use client";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import Link from "next/link";
import { InstaClip } from "./InstaClip";
import { LinkedInPosts } from "./LinkedInPosts";
import { linkedInPostData } from "@/libs/data";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { useQuery } from "@apollo/client";
import { Get_LinkedInPosts } from "@/graphql/queries";

export const InstaPost = ({ posts }) => {
  const { loading, error, data } = useQuery(Get_LinkedInPosts);

  if (loading)
    return (
      <div className="text-center text-3xl w-full h-full text-white font-bold">
        Loading....
      </div>
    );

  if (error)
    return (
      <div className="text-center text-3xl w-full h-full text-white font-bold capitalize">
        Oops!, something went wrong....
      </div>
    );
    
  return (
    <Swiper
      centeredSlides={true}
      slidesPerView={5}
      spaceBetween={50}
      grabCursor={true}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1440: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
      className="mySwiper"
    >
      <SlideNextButton />
      <SlidePrevButton />
      <div className="max-w-7xl w-max">
        {data?.linkedIn_Posts?.map((list, idx) => (
          <SwiperSlide key={idx}>
            <LinkedInPosts data={list} />
          </SwiperSlide>
        ))}
        {posts?.map((list, idx) => (
          <SwiperSlide>
            <Link
              // href={`https://www.instagram.com/p/${list.code}`}
              href={list?.postUrl}
              // key={list?.caption?.id}
              target="_blank"
              key={idx}
            >
              <Card className="pt-4 bg-black text-white w-full h-[500px] font-Lato">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start mb-5">
                  <p className="text-tiny uppercase font-bold">Instagram</p>
                  <h4 className="font-bold text-lg leading-snug tracking-wide mt-5 line-clamp-2">
                    {list?.text}
                  </h4>
                </CardHeader>
                {list?.isVideo === true ? (
                  <CardBody className="overflow-hidden justify-center p-0 relative h-full">
                    <InstaClip videoSrc={list?.videoSrc} />
                  </CardBody>
                ) : (
                  <CardBody className="overflow-hidden justify-center p-0 aspect-clip">
                    <Image
                      alt="Card background"
                      className="object-cover object-center hover:scale-110 transition-all duration-1000 ease-in-out !rounded-none"
                      src={list?.imageSrc}
                      // width={270}
                      height={50}
                    />
                  </CardBody>
                )}
              </Card>
            </Link>
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
};

const SlideNextButton = () => {
  const swiper = useSwiper();

  return (
    <button
      role="button"
      aria-label="next logo"
      onClick={() => swiper.slideNext()}
      className="text-secondary bg-warning absolute top-1/2 right-2 rounded-full  z-[100] hover:animate-pulse hover:bg-white"
    >
      <FaArrowAltCircleRight size={"3em"} />
    </button>
  );
};

const SlidePrevButton = () => {
  const swiper = useSwiper();

  return (
    <button
      role="button"
      aria-label="prev logo"
      onClick={() => swiper.slidePrev()}
      className="text-secondary bg-warning rounded-full absolute top-1/2  z-[100] left-2 hover:animate-pulse hover:bg-white"
    >
      <FaArrowAltCircleLeft size={"3em"} />
    </button>
  );
};

// md:!w-[220px] lg:!min-w-[320px]
