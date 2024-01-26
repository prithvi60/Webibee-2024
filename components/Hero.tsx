"use client";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { TiStarOutline } from "react-icons/ti";
import { LuCrown } from "react-icons/lu";
import { Suspense } from "react";
import Spline from "@splinetool/react-spline";
import Services from "./Services";

const Hero = () => {
  return (
    <>
    <section
      className="relative padding-variable text-center text-white h-screen
    "
    style={{zIndex:2}}
    >
      {/* <div className="z-10"> */}
        <h2 className="capitalize font- text-4xl md:text-6xl w-full mx-auto tracking-wide font-Montserrat font-bold">
          Websites that stands out
        </h2>
        <h3 className="capitalize font-urbanist text-lg md:text-xl w-full mx-auto font-Lato font-medium">
          Seo ready and performance optimised with stunning designs
        </h3>
        <div className="flex justify-around items-center gap-3 border-2 border-[#14A800] py-3 px-2 w-full lg:w-1/2 mx-auto rounded-xl">
          <h4 className="hidden md:flex items-center gap-2 text-sm md:text-lg font-Lato font-semibold">
            <span className="p-1.5 rounded-full bg-[#14A800]">
              <LuCrown className="h-5 w-5  text-white " />
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
                  className="w-4 h-4 md:w-6 md:h-6 ms-1 md:ms-1.5 text-gray-300 dark:text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              </div>
              <h4 className="flex md:hidden items-center gap-2 text-[13px] md:text-lg font-Lato font-semibold">
                {/* <span className="p-1.5 rounded-full bg-[#1F57C3]"><LuCrown className="h-5 w-5  text-white "/></span> */}
                100% Job Success
              </h4>
            </div>
          </Link>
          <h4 className="flex flex-col justify-center md:flex-row items-center gap-1 md:gap-2 text-sm md:text-xl font-urbanist font-bold">
            <span className="p-1 md:p-1.5 rounded-full mx-2 bg-[#14A800] w-max">
              <TiStarOutline className="w-3 h-3 md:h-5 md:w-5 text-white " />
            </span>
            <span className="mt-0 md:mt-1 font-Lato font-semibold">
              Top Rated
            </span>
          </h4>
          <div className="flex md:items-center md:gap-2 text-xl md:text-2xl font-urbanist font-bold">
            <span className="mt-0 md:mt-1 font-Lato font-extrabold text-[#14A800]">
              Upwork
            </span>
          </div>
        </div>

        <Button
          color="success"
          size="lg"
          radius="lg"
          className="px-5 font-urbanist text-base md:text-lg font-bold  "
        >
          <Link
            target="blank"
            href={"https://calendar.app.google/dUU7BcdHo1Y61M1v6"}
          >
            Free Consultation
          </Link>
        </Button>
      {/* </div> */}
      <Services/>
    </section>
          <div className="absolute top-0 left-0 h-screen w-full pointer-events-none ">
          <Suspense fallback={<div>Loading...</div>}>
            <Spline scene="https://prod.spline.design/eVf36LEPiWXTIrPx/scene.splinecode" onLoad={()=>console.log("loaded")} />
          </Suspense>
        </div>
        </>
  );
};

export default Hero;
