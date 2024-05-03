"use client";
import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import Link from "next/link";

export const LinkedInPosts = () => {
  return (
    <div className="flex items-center gap-5 flex-wrap pb-10">
      <Link href={"#"} >
        <Card className="pt-4 bg-black text-white w-full sm:w-[320px] min-h-[225px] font-Lato">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start mb-5">
            <p className="text-tiny uppercase font-bold">Instagram post</p>
            <small className="text-default-500 mt-1.5">Prithvi_bytes</small>
            <h4 className="font-bold text-lg leading-snug tracking-wide mt-5">
              Frontend Radio Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Est dolores maiores cupiditate
            </h4>
          </CardHeader>
          <CardBody className="overflow-hidden justify-center p-0">
            <Image
              alt="Card background"
              className="object-cover object-center hover:scale-110 transition-all duration-1000 ease-in-out !rounded-none"
              src="/img1.jpg"
              // width={270}
              height={250}
            />
          </CardBody>
        </Card>
      </Link>
      <Link href={"#"}>
        <Card className="pt-4 bg-black text-white w-full sm:w-[320px] min-h-[225px] font-Lato">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start mb-5">
            <p className="text-tiny uppercase font-bold">Instagram post</p>
            <small className="text-default-500 mt-1.5">Prithvi_bytes</small>
            <h4 className="font-bold text-lg leading-snug tracking-wide mt-5">
              Frontend Radio Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Est dolores maiores cupiditate
            </h4>
          </CardHeader>
          <CardBody className="overflow-hidden justify-center p-0">
            <Image
              alt="Card background"
              className="object-cover object-center hover:scale-110 transition-all duration-1000 ease-in-out !rounded-none"
              src="/img1.jpg"
              // width={270}
              height={250}
            />
          </CardBody>
        </Card>
      </Link>
      <Link href={"#"}>
        <Card className="pt-4 bg-black text-white w-full sm:w-[320px] min-h-[225px] font-Lato">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start mb-5">
            <p className="text-tiny uppercase font-bold">Instagram post</p>
            <small className="text-default-500 mt-1.5">Prithvi_bytes</small>
            <h4 className="font-bold text-lg leading-snug tracking-wide mt-5">
              Frontend Radio Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Est dolores maiores cupiditate
            </h4>
          </CardHeader>
          <CardBody className="overflow-hidden justify-center p-0">
            <Image
              alt="Card background"
              className="object-cover object-center hover:scale-110 transition-all duration-1000 ease-in-out !rounded-none"
              src="/img1.jpg"
              // width={270}
              height={250}
            />
          </CardBody>
        </Card>
      </Link>
    </div>
  );
};
