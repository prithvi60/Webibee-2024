"use client";

import { useRef, useState } from "react";

export const InstaClip = ({videoSrc}) => {
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
    <div className="relative shadow-md shadow-text-50 p-10 w-full h-full">
      <video
        loop
        preload="auto"
        className={`w-full h-full max-h-[380px] 2xl:max-h-[560px] aspect-clip object-contain`}
        ref={videoRef}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div
        className={`absolute top-0 left-0 w-full h-full cursor-pointer !z-50`}
        onMouseEnter={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
      </div>
    </div>
  );
};

export const LinkedInClip = ({videoSrc}) => {
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
    <div className="!z-30 relative shadow-md shadow-text-50 p-10 w-full h-full">
      <video
        // muted
        // controls
        loop
        preload="metadata"
        className={`w-full h-full max-h-[380px] 2xl:max-h-[560px] aspect-clip object-contain`}
        ref={videoRef}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div
        className={`absolute top-0 left-0 w-full h-full cursor-pointer !z-50`}
        onMouseEnter={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
      </div>
    </div>
  );
};
