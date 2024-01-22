"use client";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="padding-variable text-center text-white">
      <h2 className="capitalize font- text-4xl md:text-6xl w-full mx-auto tracking-wide font-Montserrat font-bold">
        You deserve a better Life
      </h2>
      <h3 className="capitalize font-urbanist text-lg md:text-xl w-full mx-auto font-Lato font-medium">
        A Counseling And Therapy Center
      </h3>
      <div className="flex justify-around items-center gap-3 border-2 border-primary py-3 px-2 w-full lg:w-1/2 mx-auto rounded-xl">
        <h4 className="hidden md:block text-sm md:text-lg font-Lato font-semibold">
          Excellent
        </h4>
        <div className="block md:flex items-center">
          <div className="flex items-center mb-1.5">
            <svg
              className="w-5 h-5 md:w-6 md:h-6 ms-1 md:ms-1.5 text-green-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-5 h-5 md:w-6 md:h-6 ms-1 md:ms-1.5 text-green-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-5 h-5 md:w-6 md:h-6 ms-1 md:ms-1.5 text-green-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-5 h-5 md:w-6 md:h-6 ms-1 md:ms-1.5 text-green-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-5 h-5 md:w-6 md:h-6 ms-1 md:ms-1.5 text-gray-300 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          </div>
          <p className="font-urbanist text-xs md:text-sm md:mt-1 px-1.5">
            based on{" "}
            <span className="underline">
              <Link href={"#"}>1024 reviews</Link>
            </span>
          </p>
        </div>
        <h4 className="block md:flex md:items-center md:gap-2 text-base md:text-xl font-urbanist font-bold">
          <div className="w-full flex justify-center items-center my-1 md:w-max md:my-0">
            <svg
              className="w-5 h-5 md:w-6 md:h-6 ms-1 md:ms-1.5 text-green-600 text-center"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          </div>
          <span className="mt-0 md:mt-1 font-Lato font-semibold">
            TrustPilot
          </span>
        </h4>
      </div>

      <Button
        color="primary"
        size="lg"
        radius="lg"
        className="px-5 font-urbanist text-base md:text-lg"
      >
        <Link href={"https://www.upwork.com/freelancers/~01d7976a7b95d87d"}>
          Free consultation
        </Link>
      </Button>
    </section>
  );
};

export default Hero;
