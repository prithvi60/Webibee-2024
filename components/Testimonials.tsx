"use client";

import { testimonials } from "@/libs/data";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { HiMiniSpeakerWave, HiMiniPause } from "react-icons/hi2";

export default function Testimonials() {
  const [isActive, setIsActive] = useState(testimonials[0].id);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const handlePlayPause = (): void => {
    setIsPlaying(prevState => !prevState);
  };

  const handleAudioEnded = (): void => {
    setIsPlaying(false);
  };

  return (
    <section className="py-10 pr-10 sm:pr-20 xl:pr-64 sm:py-16 xl:py-28 overflow-hidden  md:py-12 block space-y-20 relative z-0">
      <div className="relative z-0">
        <h3 className="font-EbGaramond font-medium text-4xl sm:text-5xl xl:text-7xl px-10 sm:px-20 xl:px-64 text-center md:text-start">
          Testimonials
        </h3>
        <div className="absolute -top-5 md:-top-10 left-48 xl:left-[480px] size-32 md:size-56 -z-10">
          <Image
            src={"/svg 2.svg"}
            alt="svg"
            className="object-contain object-center"
            fill
            quality={100}
          />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between gap-5 md:gap-20">
        <ul className="flex flex-row overflow-x-scroll sm:overflow-x-auto sm:flex-col gap-5 w-full md:w-[55%] sm:pb-5">
          {testimonials.map((testimonial) => (
            <li
              className={`flex min-w-52 sm:min-w-full first:ml-10 sm:first:ml-0 p-5 items-center cursor-pointer justify-end py-5 mb-5 sm:mb-0 pr-3 lg:pr-10 gap-2.5 lg:gap-5 ${isActive === testimonial.id && "shadow-xl rounded-md"
                }`}
              key={testimonial.id}
              onClick={() => setIsActive(testimonial.id)}
            >
              <Image
                src={testimonial.img}
                alt="avatar"
                className="object-contain object-center rounded-full"
                width={60}
                quality={100}
                height={60}
              />
              <div className="block space-y-2">
                <h5 className="capitalize font-EbGaramond font-medium tracking-wider text-lg sm:text-xl xl:text-2xl">
                  {testimonial.reviewer}
                </h5>
                <p className="text-sm capitalize  xl:text-lg tracking-wide font-SourceCodePro font-normal">
                  {testimonial.position}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <div className="block space-y-5 w-full md:w-[45%]">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id}>
              {isActive === testimonial.id ? (
                <div className="pl-10 sm:pl-0 space-y-6">
                  <p className="!leading-9 text-justify text-base font-SourceCodePro font-normal sm:text-lg lg:text-xl">{`${testimonial.review}`}</p>
                  <div className="flex justify-center sm:justify-start items-center gap-2.5">
                    <audio
                      ref={audioRef}
                      src={"/sample-audio.wav"}
                      className="hidden"
                      onEnded={handleAudioEnded}
                    />
                    {isPlaying ? (
                      <HiMiniPause
                        className="text-[#2D1C55] text-2xl sm:text-4xl cursor-pointer"
                        onClick={handlePlayPause}
                      />
                    ) : (
                      <HiMiniSpeakerWave
                        className="text-[#2D1C55] text-2xl sm:text-4xl cursor-pointer"
                        onClick={handlePlayPause}
                      />
                    )}
                    {isPlaying ? (
                      <div className="w-32 h-8 sm:w-48 sm:h-12 relative">
                        <Image
                          fill
                          src={"/sound-gif.gif"}
                          alt="image"
                          quality={100}
                          className="object-contain object-center"
                        />
                      </div>
                    ) : (
                      <div className="w-32 h-8 sm:w-48 sm:h-12 relative">
                        <Image
                          fill
                          src={"/sound.svg"}
                          alt="image"
                          className="object-contain object-center"
                        />
                      </div>
                    )}
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
