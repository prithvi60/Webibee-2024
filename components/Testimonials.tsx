"use client";
import { motion } from "framer-motion";
import { testimonials } from "@/libs/data";
import Image from "next/image";
import { useEffect, useState } from "react";
import { HiMiniSpeakerWave, HiMiniPause } from "react-icons/hi2";
import {
  parentVariant,
  variant1,
  variant2,
  variantGrid2,
} from "@/libs/Variants";

export default function Testimonials({ userCountry, lge }: { userCountry: string, lge?: boolean }) {
  const [locTestimonials, setLocTestimonials] = useState(testimonials);
  const isIndia = userCountry === "IN";
  useEffect(() => {
    setLocTestimonials(
      isIndia
        ? testimonials.slice(0, 3)
        : testimonials.slice(3, testimonials.length)
    );
  }, [isIndia]);

  const [isActive, setIsActive] = useState(locTestimonials[0].id);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    speechSynthesis.cancel();
    setIsPlaying(false);
  }, [isActive]);

  const handlePlayPause = (review: string): void => {
    if (!isPlaying) {
      const voices = speechSynthesis.getVoices();
      const femaleVoices = voices.filter(
        (voice) =>
          voice.name.includes("Google US English Female") ||
          voice.name.includes("Microsoft Zira") ||
          voice.name.includes("Microsoft Hazel")
      );

      const professionalVoice =
        femaleVoices.length > 0 ? femaleVoices[0] : null;

      const utterance = new SpeechSynthesisUtterance(review);
      utterance.lang = "en-US";
      if (professionalVoice) {
        utterance.voice = professionalVoice;
      }
      utterance.pitch = 1.2;
      utterance.rate = 0.8;
      utterance.volume = 1;
      utterance.onend = () => {
        setIsPlaying(false);
      };
      speechSynthesis.speak(utterance);
      setIsPlaying(true);
    } else {
      speechSynthesis.cancel(); // Stop the speech if it is currently playing
      setIsPlaying(false); // Reset the play state
    }
  };

  return (
    <section className="py-10 pr-10 sm:pr-20 xl:pr-64 sm:py-16 xl:py-28 overflow-hidden  md:py-12 block space-y-20 relative z-0">
      <motion.div
        variants={variant1}
        viewport={{ once: true }}
        initial="initial"
        whileInView="animate"
        className="relative z-0"
      >
        <h2 className={`font-EbGaramond font-medium text-4xl sm:text-5xl xl:text-7xl px-10 sm:px-20 xl:px-64 w-full ${lge ? "text-center ml-7 md:ml-14 xl:ml-40 mx-auto" : "text-center md:text-start"}`}>
          Testimonials
        </h2>
        <div className={`${lge ? "left-64 xl:left-[620px]" : "left-48 xl:left-[480px]"} absolute -top-5 md:-top-10 size-32 md:size-56 -z-10`}>
          <Image
            title="svg image"
            src={"https://cdn.webibee.com/Webibee/svg%202.svg"}
            alt="svg"
            className="object-contain object-center"
            fill
            quality={100}
          />
        </div>
      </motion.div>
      <div className="flex flex-col-reverse md:flex-row justify-between gap-5 md:gap-20">
        <motion.ul
          variants={parentVariant}
          viewport={{ amount: 0.3, once: true }}
          initial="initial"
          whileInView="animate"
          className="block space-y-5 w-full md:w-[55%] md:pb-5"
        >
          {locTestimonials.map((testimonial) => (
            <motion.li
              variants={variantGrid2}
              initial="initial"
              whileInView="animate"
              custom={testimonial.id}
              viewport={{ once: true }}
              className={`flex min-w-80 md:min-w-full p-5 items-center cursor-pointer justify-end md:mb-0 lg:px-10 gap-2.5 lg:gap-5 ${isActive === testimonial.id && "shadow-xl rounded-md"
                }`}
              key={testimonial.id}
              onClick={() => setIsActive(testimonial.id)}
            >
              <div className="flex items-center gap-6 w-full lg:w-11/12 xl:w-4/5">
                {/* <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-28 lg:h-28">
                  <Image
                    title={testimonial.reviewer}
                    src={testimonial.img}
                    alt="avatar"
                    className="object-cover object-top rounded-full"
                    fill
                    quality={100}
                  />
                </div> */}
                <div className="relative size-14 sm:size-14 lg:size-16 bg-info rounded-full"></div>

                <div className="block space-y-2">
                  <h5 className="capitalize font-EbGaramond font-medium tracking-wider text-lg sm:text-xl xl:text-2xl">
                    {testimonial.company}
                  </h5>
                  {/* <p className="text-sm capitalize  xl:text-lg tracking-wide font-SourceCodePro font-normal">
                    {testimonial.position}
                  </p> */}
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>
        <motion.div
          variants={parentVariant}
          viewport={{ amount: 0.3, once: true }}
          initial="initial"
          whileInView="animate"
          className="block space-y-5 md:py-5 w-full md:w-[45%]"
        >
          {locTestimonials.map((testimonial) => (
            <motion.div
              variants={variant2}
              // viewport={{ once: true }}
              initial="initial"
              whileInView="animate"
              key={testimonial.id}
            >
              {isActive === testimonial.id ? (
                <motion.div
                  key={testimonial.review}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ ease: "easeOut", duration: 0.5 }}
                  className="pl-10 sm:pl-0 space-y-6"
                >
                  <p className="hidden md:block !leading-9 text-base font-SourceCodePro font-normal sm:text-lg lg:text-xl">{`${testimonial.review}`}</p>
                  <div className="flex justify-center sm:justify-start items-center md:gap-2.5">
                    {/* <audio
                      ref={audioRef}
                      src={"/sample-audio.wav"}
                      className="hidden"
                      onEnded={handleAudioEnded}
                    /> */}

                    {isPlaying ? (
                      <HiMiniPause
                        className="text-[#2D1C55] text-2xl sm:text-4xl cursor-pointer"
                        onClick={() => handlePlayPause(testimonial.review)}
                      />
                    ) : (
                      <HiMiniSpeakerWave
                        className="text-[#2D1C55] text-2xl sm:text-4xl cursor-pointer"
                        onClick={() => handlePlayPause(testimonial.review)}
                      />
                    )}
                    {isPlaying ? (
                      <div className="w-32 h-8 sm:w-48 sm:h-12 relative">
                        <Image
                          title="sound gif"
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
                          title="sound svg"
                          fill
                          src={"https://cdn.webibee.com/Webibee/sound.svg"}
                          alt="image"
                          className="object-contain object-center"
                        />
                      </div>
                    )}
                    <div className="hidden md:block text-info text-xl">
                      {" "}
                      ( Tired of Reading? Try the audio version )
                    </div>
                  </div>
                  <div className="md:hidden text-info text-sm text-center">
                    {" "}
                    Tired of reading LONG reviews? <br /> Try our audio
                    testimonial
                  </div>
                </motion.div>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
