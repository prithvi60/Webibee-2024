"use client";
import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import Link from "next/link";
import { LinkedInClip } from "./InstaClip";

export const LinkedInPosts = ({ data }) => {
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
    <Link href={data?.postUrl} target="_blank">
      <Card className="pt-4 bg-black text-white w-full h-[500px] font-Lato">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start mb-5">
          <p className="text-tiny uppercase font-bold">LinkedIn</p>
          {/* <small className="text-default-500 mt-1.5">Prithvi_bytes</small> */}
          <h4 className="font-bold text-lg leading-snug tracking-wide mt-5 line-clamp-2">
            {data?.text}
          </h4>
          {data?.article && (
            <h4 className="text-base font-semibold text-white mt-4">
              {data?.article}
            </h4>
          )}
        </CardHeader>
        {data?.imageSrc && (
          <CardBody className="overflow-hidden justify-center p-0 aspect-clip">
            <Image
              alt="Card background"
              className="object-cover object-center hover:scale-110 transition-all duration-1000 ease-in-out !rounded-none"
              src={data?.imageSrc}
              // width={270}
              height={80}
            />
          </CardBody>
        )}
        {data?.videoSrc && (
          <CardBody className="overflow-hidden justify-center p-0 relative h-full">
            <LinkedInClip videoSrc={data?.videoSrc} />
          </CardBody>
        )}

        {data?.article && (
          <CardBody className="overflow-hidden justify-center p-0 h-[450px]">
            <Image
              alt="Card background"
              className="object-contain hover:scale-110 transition-all duration-1000 ease-in-out !rounded-none aspect-clip"
              src={"/article-mg.jpg"}
              height={50}
            />
          </CardBody>
        )}
      </Card>
    </Link>
  );
};

// text
// postUrl
// image[0].url
// video[0].url
// article.title
