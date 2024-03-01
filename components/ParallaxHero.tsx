"use client";
import { Button, Spinner } from "@nextui-org/react";
import Link from "next/link";
import { TiStarOutline } from "react-icons/ti";
import { LuCrown } from "react-icons/lu";
// import { useState } from "react";
import Services from "./Services";
import { BannerLayer, ParallaxBanner } from "react-scroll-parallax";
import { useEffect, useState } from "react";

const ParallaxHero = () => {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoader(true);
    }, 200);
  }, []);

  const background: BannerLayer = {
    image: "/plasma_bg.gif",
    translateY: [0, 50],
    opacity: [1, 0.3],
    scale: [1.05, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
  };

  const headline: BannerLayer = {
    translateY: [0, 30],
    scale: [1, 1.05, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 padding-variable text-center text-default h-full w-full bg-primary bg-opacity-70"
        style={{ zIndex: 2 }}
      >
        <h2 className="capitalize  text-6xl md:text-8xl w-full mx-auto tracking-wide font-medium font-Caveat mt-5 md:mt-10 ">
          Websites that stand out
        </h2>
        <h3 className="capitalize text-lg md:text-xl w-full mx-auto font-Lato font-medium ">
          SEO ready and performance optimized with stunning designs
        </h3>
        <div className="flex justify-around items-center gap-3 border-2 border-[#14A800] py-3 px-2 w-full md:w-3/4 2xl:w-[55%] 3xl:w-[45%] mx-auto rounded-xl">
          <h4 className="hidden md:flex items-center gap-2 text-sm md:text-lg font-Lato font-semibold">
            <span className="p-1.5 rounded-full bg-[#14A800]">
              <LuCrown className="h-5 w-5  text-default " />
            </span>
            100% Job Success
          </h4>
          <Link
            target="blank"
            href={
              "https://www.upwork.com/freelancers/~01d7976a7b95d87d71?viewMode=1"
            }
          >
            <div className="block md:flex items-center">
              <div className="flex items-center ">
                <svg
                  className="w-4 h-4 md:w-6 md:h-6 ms-1 md:ms-1.5 text-yellow-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 md:w-6 md:h-6 ms-1 md:ms-1.5 text-yellow-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 md:w-6 md:h-6 ms-1 md:ms-1.5 text-yellow-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 md:w-6 md:h-6 ms-1 md:ms-1.5 text-yellow-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 md:w-6 md:h-6 ms-1 md:ms-1.5 text-yellow-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              </div>
              <h4 className="flex md:hidden items-center gap-2 text-[13px] md:text-lg font-Lato font-semibold">
                {/* <span className="p-1.5 rounded-full bg-[#1F57C3]"><LuCrown className="h-5 w-5  text-default "/></span> */}
                100% Job Success
              </h4>
            </div>
          </Link>
          <h4 className="flex flex-col justify-center md:flex-row items-center gap-1 md:gap-2 text-sm md:text-xl font-urbanist font-bold">
            <span className="p-1 md:p-1.5 rounded-full mx-2 bg-[#14A800] w-max">
              <TiStarOutline className="w-3 h-3 md:h-5 md:w-5 text-default " />
            </span>
            <span className="mt-0 md:mt-1 font-Lato font-semibold">
              Top Rated
            </span>
          </h4>
          <div className="flex md:items-center md:gap-2 text-xl md:text-2xl font-urbanist font-bold">
            <Link
              target="blank"
              href={
                "https://www.upwork.com/freelancers/~01d7976a7b95d87d71?viewMode=1"
              }
              className="mt-0 md:mt-1 font-Lato font-extrabold text-[#14A800] cursor-pointer"
            >
              Upwork
            </Link>
          </div>
        </div>
        <div className="pt-2 md:pt-3 lg:pt-8">
          <Button
            size="lg"
            radius="lg"
            className="px-6 py-5 md:py-2.5 lg:py-5 font-urbanist text-xl md:text-2xl font-bold text-default shadow-lg bg-danger font-Lato"
          >
            <Link
              target="blank"
              href={"https://calendar.app.google/dUU7BcdHo1Y61M1v6"}
            >
              Free Consultation
            </Link>
          </Button>
        </div>
        {/* {loader ? (
          <div className="font bold text-2xl ">
            Wait for it ... <Spinner size="sm" />
          </div>):<div className="font bold text-2xl"> ‎ </div>
        } */}

        {/* </div> */}
        <Services />
      </div>
    ),
  };

  const gradientOverlay: BannerLayer = {
    opacity: [0, 0.9],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute inset-0 bg-gradient-to-t from-secondary to-warning" />
    ),
  };
  return (
    <>
      {!loader ? (
        <div
          className="relative padding-variable text-center text-default h-full bg-primary w-full"
          style={{ zIndex: 2 }}
        >
          <h2 className="capitalize  text-6xl md:text-8xl w-full mx-auto tracking-wide font-medium font-Caveat mt-10">
            Websites that stand out
          </h2>
          <h3 className="capitalize text-lg md:text-xl w-full mx-auto font-Lato font-medium ">
            SEO ready and performance optimized with stunning designs
          </h3>
          <div className="flex justify-around items-center gap-3 border-2 border-[#14A800] py-3 px-2 w-full md:w-3/4 2xl:w-[55%] 3xl:w-[45%] mx-auto rounded-xl">
            <h4 className="hidden md:flex items-center gap-2 text-sm md:text-lg font-Lato font-semibold">
              <span className="p-1.5 rounded-full bg-[#14A800]">
                <LuCrown className="h-5 w-5  text-default " />
              </span>
              100% Job Success
            </h4>
            <Link
              target="blank"
              href={
                "https://www.upwork.com/freelancers/~01d7976a7b95d87d71?viewMode=1"
              }
            >
              <div className="block md:flex items-center">
                <div className="flex items-center ">
                  <svg
                    className="w-4 h-4 md:w-6 md:h-6 ms-1 md:ms-1.5 text-yellow-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 md:w-6 md:h-6 ms-1 md:ms-1.5 text-yellow-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 md:w-6 md:h-6 ms-1 md:ms-1.5 text-yellow-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 md:w-6 md:h-6 ms-1 md:ms-1.5 text-yellow-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 md:w-6 md:h-6 ms-1 md:ms-1.5 text-yellow-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                </div>
                <h4 className="flex md:hidden items-center gap-2 text-[13px] md:text-lg font-Lato font-semibold">
                  {/* <span className="p-1.5 rounded-full bg-[#1F57C3]"><LuCrown className="h-5 w-5  text-default "/></span> */}
                  100% Job Success
                </h4>
              </div>
            </Link>
            <h4 className="flex flex-col justify-center md:flex-row items-center gap-1 md:gap-2 text-sm md:text-xl font-urbanist font-bold">
              <span className="p-1 md:p-1.5 rounded-full mx-2 bg-[#14A800] w-max">
                <TiStarOutline className="w-3 h-3 md:h-5 md:w-5 text-default " />
              </span>
              <span className="mt-0 md:mt-1 font-Lato font-semibold">
                Top Rated
              </span>
            </h4>
            <div className="flex md:items-center md:gap-2 text-xl md:text-2xl font-urbanist font-bold">
              <Link
                target="blank"
                href={
                  "https://www.upwork.com/freelancers/~01d7976a7b95d87d71?viewMode=1"
                }
                className="mt-0 md:mt-1 font-Lato font-extrabold text-[#14A800] cursor-pointer"
              >
                Upwork
              </Link>
            </div>
          </div>
          <div className="pt-8 md:pt-3 lg:pt-8">
            <Button
              size="lg"
              radius="lg"
              className="px-6 py-5 md:py-2.5 lg:py-5 font-urbanist text-xl md:text-2xl font-bold text-default shadow-lg bg-danger font-Lato"
            >
              <Link
                target="blank"
                href={"https://calendar.app.google/dUU7BcdHo1Y61M1v6"}
              >
                Free Consultation
              </Link>
            </Button>
             {!loader ? (
          <div className="font bold text-2xl mt-10">
            Wait for it ... <Spinner size="md" color="danger" className="mt-5 px-3"/>
          </div>):<div className="font bold text-2xl"> ‎ </div>
        }
          </div>
          <Services />
        </div>
      ) : (
        <div className="min-h-full xl:min-h-fi">
          <ParallaxBanner
            layers={[background, headline]}
            className="aspect-[2/1] bg-gray-900  min-h-screen lg:h-full xl:max-h-max"
          ></ParallaxBanner>
        </div>
      )}
    </>
  );
};

export default ParallaxHero;
