"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
} from "@nextui-org/react";
import Image from "next/image";

const TestimonialCard = ({ list }: { list: any }) => {
  return (
    <Card className="min-w-[18rem] md:min-w-[25rem] first:ms-2 min-h-[320px] max-h-[320px] border border-warning bg-black">
      <CardHeader className="justify-start gap-5 px-6 py-4 ">
        {/* <h4 className="text-xl md:text-3xl font-semibold leading-none font-Montserrat text-default">
          Family Counselling
        </h4> */}
        <Image
          alt={`${list.country} logo`}
          height={55}
          src={list.img}
          width={55}
          title={list.country}
          className="rounded-full"
        />
        {/* <Avatar title='country logo' radius="full" size="lg" src={list.img} alt={`${list.country} logo`}  className="border-danger border-5" /> */}
        <div className="flex flex-col">
          <h2 className="text-lg md:text-xl font-semibold leading-none font-Lato text-default line-clamp-1">
            {list.title}
          </h2>
          <p className="text-base md:text-lg text-slate-100 font-Lato">
            {list.country}
          </p>
        </div>
      </CardHeader>
      <CardBody className="px-6 py-4 text-white/90 h-auto bg-secondary ">
        <p className="font-Lato text-base md:text-lg tracking-wide line-clamp-6">
          {list.para}
        </p>
      </CardBody>
      <CardFooter className="gap-3 p-3 bg-secondary">
        <div className="flex items-center mb-1.5">
          <svg
            className="w-5 h-5 md:w-6 md:h-6 ms-1 md:ms-1.5 text-yellow-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-5 h-5 md:w-6 md:h-6 ms-1 md:ms-1.5 text-yellow-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-5 h-5 md:w-6 md:h-6 ms-1 md:ms-1.5 text-yellow-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-5 h-5 md:w-6 md:h-6 ms-1 md:ms-1.5 text-yellow-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-5 h-5 md:w-6 md:h-6 ms-1 md:ms-1.5 text-yellow-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          {/* <svg
            className="w-5 h-5 md:w-6 md:h-6 ms-1 md:ms-1.5 text-gray-300 dark:text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg> */}
        </div>
      </CardFooter>
    </Card>
  );
};

export default TestimonialCard;
