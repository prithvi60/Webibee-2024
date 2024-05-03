"use client";

import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import Link from "next/link";
import InstaClip from "./InstaClip";
import { clip } from "@/libs/data";
import { useEffect, useState } from "react";
import { getPosts } from "../libs/InstaAllPost";

export const InstaPost = () => {
  const [post, setPost] = useState();

  useEffect(() => {
    getPosts().then((data) => {
      // console.log(data);
      setPost(data);
    });
  }, []);

  // console.log(post);

  return (
    // <>
    //   {post === "" ? (
    //     <div className="text-center text-3xl w-full h-full">Loading....</div>
    //   ) : (
    //     <div className="flex items-center gap-5 flex-wrap pb-10">
    //       {post?.map((data) => (
    //         <>
    //           {data.items.slice(1, 6).map((list) => (
    //             <Link href={"#"} key={list?.caption?.id}>
    //               <Card className="pt-4 bg-black text-white w-full sm:w-[320px] min-h-[225px] font-Lato">
    //                 <CardHeader className="pb-0 pt-2 px-4 flex-col items-start mb-5">
    //                   <p className="text-tiny uppercase font-bold">
    //                     Instagram post
    //                   </p>
    //                   <small className="text-default-500 mt-1.5">
    //                     Prithvi_bytes
    //                   </small>
    //                   <h4 className="font-bold text-lg leading-snug tracking-wide mt-5">
    //                     {list?.caption?.text}
    //                   </h4>
    //                 </CardHeader>
    //                 {list.video_url ? (
    //                   <CardBody className="overflow-hidden justify-center p-0 relative">
    //                     {/* <video autoPlay muted loop preload="auto" className="w-full h-[320px] z-0">
    //           <source src="/reel.mp4" type="video/mp4" />
    //         </video> */}
    //                     <InstaClip videoSrc={list?.video_url} />
    //                   </CardBody>
    //                 ) : (
    //                   <CardBody className="overflow-hidden justify-center p-0">
    //                     <Image
    //                       alt="Card background"
    //                       className="object-cover object-center hover:scale-110 transition-all duration-1000 ease-in-out !rounded-none"
    //                       src={list?.thumbnail_url}
    //                       // width={270}
    //                       height={250}
    //                     />
    //                   </CardBody>
    //                 )}
    //               </Card>
    //             </Link>
    //           ))}
    //         </>
    //       ))}
    //     </div>
    //   )}
    // </>
    <div className="flex items-center gap-5 flex-wrap pb-10">
      {clip.map((list,idx) => (
        <Link href={"#"} key={idx}>
          <Card className="pt-4 bg-black text-white w-full sm:w-[320px] min-h-[225px] font-Lato">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start mb-5">
              <p className="text-tiny uppercase font-bold">Instagram post</p>
              <small className="text-default-500 mt-1.5">Prithvi_bytes</small>
              <h4 className="font-bold text-lg leading-snug tracking-wide mt-5">
                {list?.desc}
              </h4>
            </CardHeader>
            {list.videoSrc ? (
              <CardBody className="overflow-hidden justify-center p-0 relative">
                <InstaClip videoSrc={list?.videoSrc} />
              </CardBody>
            ) : (
              <CardBody className="overflow-hidden justify-center p-0">
                <Image
                  alt="Card background"
                  className="object-cover object-center hover:scale-110 transition-all duration-1000 ease-in-out !rounded-none"
                  src={list?.img}
                  // width={270}
                  height={250}
                />
              </CardBody>
            )}
          </Card>
        </Link>
      ))}
    </div>
  );
};
