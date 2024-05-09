"use client";

import Image from "next/image";
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
    <div className="relative shadow-md shadow-text-50">
      <video
        muted
        loop
        preload="auto"
        className={`w-full aspect-clip object-cover object-top`}
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
    <div className="relative shadow-md shadow-text-50">
      <video
        // muted
        // controls
        loop
        preload="metadata"
        className={`w-full aspect-clip object-cover object-top`}
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

// export default InstaClip;
