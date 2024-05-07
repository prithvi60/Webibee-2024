"use client";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import Link from "next/link";
import InstaClip from "./InstaClip";
import { useEffect, useState } from "react";
import { LinkedInPosts } from "./LinkedInPosts";
import { clip } from "@/libs/data";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

export const InstaPost = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState(null);

  const url =
    "https://instagram-scraper-api2.p.rapidapi.com/v1.2/posts?username_or_id_or_url=prithvi_bytes";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "2ac4984ffemsh2b2c0b79629cb4ep152f64jsnefb888ff6c68",
      "X-RapidAPI-Host": "instagram-scraper-api2.p.rapidapi.com",
    },
  };

  useEffect(() => {
    async function fetchInstaData() {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        // console.log(result.data);
        const data = result.data;
        setPost(data);
        setIsLoading(false);
      } catch (error) {
        return {
          error: error.message,
          // console.error(error);
        };
      }
    }
    fetchInstaData();
  }, []);

  if (isLoading) {
    return (
      <div className="text-center text-3xl w-full h-full text-white font-bold">
        Loading....
      </div>
    );
  }

  return (
    <Swiper
      centeredSlides={true}
      slidesPerView={1}
      spaceBetween={30}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      }}
      className="mySwiper"
    >
      <SlideNextButton />
      <SlidePrevButton />
      {post.items.slice(1, 9).map((list) => (
        <SwiperSlide
          className="!h-auto !w-[280px] sm:!w-[320px]"
          key={list?.caption?.id}
        >
          <Link
            href={`https://www.instagram.com/p/${list.code}`}
            // key={list?.caption?.id}
            target="_blank"
          >
            <Card className="pt-4 bg-black text-white w-full md:w-[320px] h-full font-Lato">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start mb-5">
                <p className="text-tiny uppercase font-bold">Instagram</p>
                <h4 className="font-bold text-lg leading-snug tracking-wide mt-5 line-clamp-2">
                  {list?.caption?.text}
                </h4>
              </CardHeader>
              {list.video_url ? (
                <CardBody className="overflow-hidden justify-center p-0 relative h-full">
                  <InstaClip videoSrc={list?.video_url} />
                </CardBody>
              ) : (
                <CardBody className="overflow-hidden justify-center p-0 h-full aspect-clip">
                  <Image
                    alt="Card background"
                    className="object-cover object-center hover:scale-110 transition-all duration-1000 ease-in-out !rounded-none"
                    src={list?.thumbnail_url}
                    // width={270}
                    height={320}
                  />
                </CardBody>
              )}
            </Card>
          </Link>
        </SwiperSlide>
      ))}
      {clip.map((data, idx) => (
        <SwiperSlide className="!h-auto !w-[280px] sm:!w-[320px]" key={idx}>
          <LinkedInPosts data={data} />
        </SwiperSlide>
      ))}
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
