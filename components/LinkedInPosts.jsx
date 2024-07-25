"use client";

import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import Link from "next/link";
import { LinkedInClip } from "./InstaClip";

export const LinkedInPosts = ({ data }) => {
  return (
    <Link href={data?.postUrl} target="_blank">
      <Card className="pt-4 bg-black text-white w-full h-[500px] font-Lato">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start mb-5 min-h-[5rem]">
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
        {data?.article === "" &&
          data?.videoSrc === "" &&
          data?.imageSrc === "" && (
            <CardBody className="overflow-hidden justify-center p-0 h-[480px]">
              <Image
                alt="Card background"
                className="object-contain hover:scale-110 transition-all duration-1000 ease-in-out !rounded-none aspect-clip"
                src={"/Image-folder.jpg"}
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
