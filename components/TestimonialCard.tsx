"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Avatar,
} from "@nextui-org/react";

const TestimonialCard = ({ list }: { list: any }) => {
  return (
    <Card className="max-w-[280px] min-h-[320px] md:!max-w-md p-3 bg-primary first:ms-5">
      <CardHeader className="justify-start gap-5">
        {/* <h4 className="text-xl md:text-3xl font-semibold leading-none font-Montserrat text-white">
          Family Counselling
        </h4> */}
        {/* <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src={list.img}
          width={40}
        /> */}
        <Avatar isBordered radius="full" size="md" src={"/avatar-3.jpg"} />
        <div className="flex flex-col">
          <p className="text-lg md:text-2xl font-semibold leading-none font-Montserrat text-white">
            {list.title}
          </p>
          <p className="text-sm md:text-base lg:text-lg text-slate-100 font-Lato">
            {list.country}
          </p>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400 h-auto">
        <p className="font-Lato text-base tracking-tight text-white">
          {list.para}
        </p>
      </CardBody>
      <CardFooter className="gap-3">
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
            className="w-5 h-5 md:w-6 md:h-6 ms-1 md:ms-1.5 text-gray-300 dark:text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        </div>
      </CardFooter>
    </Card>
  );
};

export default TestimonialCard;
