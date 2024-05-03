"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const InstaClip = ({videoSrc}) => {
  const [play, setPlay] = useState("false");
  const videoRef = useRef();

  const handleMouseOver = () => {
    videoRef.current.play(undefined);
    setPlay("true");
  };
  const handleMouseOut = () => {
    videoRef.current.pause();
    setPlay("false");
  };
  return (
    <div className="relative shadow-md shadow-text-50">
      <video
        muted
        loop
        preload="auto"
        className={`w-full h-[320px] object-cover object-center`}
        ref={videoRef}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div
        className={`absolute top-0 left-0 w-full h-full cursor-pointer !z-50`}
        onMouseEnter={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        {/* <h4
          className={`w-full h-full p-3 text-xl font-medium flex justify-center items-center text-white bg-text-50 bg-opacity-50 ${
            !play
              ? "hover: hover:opacity-80"
              : " hover:bg-opacity-0 hover:opacity-0"
          } transition-all duration-500 ease-in`}
        >
          hello post
        </h4> */}
        {/* <Image
              alt="Card background"
              className={`object-cover object-center hover:scale-110 transition-all duration-1000 ease-in-out !rounded-none ${ !play ? "block" : "hidden"}`}
              src="/img1.jpg"
              width={270}
              height={250}
            /> */}
      </div>
    </div>
  );
};

export default InstaClip;
