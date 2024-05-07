"use client";
import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import Link from "next/link";

export const LinkedInPosts = ({ data }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState(null);

  // useEffect(() => {
  //   async function fetchLinkedInData() {
  //     const url = "https://linkedin-data-scraper.p.rapidapi.com/profile_updates";

  //     const options = {
  //       method: "POST",
  //       headers: {
  //         "content-type": "application/json",
  //         "X-RapidAPI-Key":
  //           "2ac4984ffemsh2b2c0b79629cb4ep152f64jsnefb888ff6c68",
  //         "X-RapidAPI-Host": "linkedin-data-scraper.p.rapidapi.com",
  //       },
  //       body: {
  //         profile_url: "https://www.linkedin.com/in/prithvi-n",
  //         posts: 10,
  //         comments: 1,
  //         reposts: 1,
  //       },
  //     };

  //     try {
  //       const response = await fetch(url, options);
  //       const result = await response.json();
  //       console.log(result);
  //       // setPost(result);
  //       // setIsLoading(false);
  //     } catch (error) {
  //       return {
  //         error: error.message,
  //       };
  //     }
  //   }
  //   fetchLinkedInData();
  // }, []);

  // console.log(post);

  // if (isLoading) {
  //   return (
  //     <div className="text-center text-3xl w-full h-full">Loading....</div>
  //   );
  // }

  return (
    // <div >
    <Link href={"#"} >
      <Card className="pt-4 bg-black text-white w-full md:w-[320px] h-full font-Lato">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start mb-5">
          <p className="text-tiny uppercase font-bold">LinkedIn</p>
          {/* <small className="text-default-500 mt-1.5">Prithvi_bytes</small> */}
          <h4 className="font-bold text-lg leading-snug tracking-wide mt-5 line-clamp-2">
            {data.desc}
          </h4>
        </CardHeader>
        <CardBody className="overflow-hidden justify-center p-0">
          <Image
            alt="Card background"
            className="object-cover object-center hover:scale-110 transition-all duration-1000 ease-in-out !rounded-none"
            src={data.img}
            // width={270}
            height={320}
          />
        </CardBody>
      </Card>
    </Link>
  );
};

{
  /* <Link href={"#"}>
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
      </Link> */
}
{
  /* </div> */
}
