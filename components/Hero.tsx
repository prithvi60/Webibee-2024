"use client";
import { LogoTypeWriterAnimation } from "./LogoTypeWriterAnimation";
import { variant1, variantTitle } from "@/libs/Variants";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import LoadingPage from "./LoadingPage";
const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("hasLoaded");
    if (!hasLoaded) {
      const timeout = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem("hasLoaded", "true");
      }, 4000);
      return () => clearTimeout(timeout);
    } else {
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return (
      <LoadingPage />
    );
  }

  return (
    <section className="px-10 xl:px-64 sm:py-16 xl:py-28 block space-y-6 md:space-y-10">
      <motion.div
        variants={variant1}
        viewport={{ once: true }}
        initial="initial"
        whileInView="animate"
        className="flex justify-center items-center gap-3 font-SourceCodePro font-semibold tracking-wider flex-col sm:flex-row md:gap-6 text-xs sm:text-lg"
      >
        <h5>Reliable Process.</h5>
        <h5>Accelerated Growth.</h5>
      </motion.div>
      <div className="flex flex-col justify-center items-center gap-10">
        <motion.h3
          variants={variantTitle}
          viewport={{ once: true }}
          initial="initial"
          whileInView="animate"
          className="uppercase font-EbGaramond tracking-widest font-bold text-xl sm:text-3xl xl:text-4xl text-center"
        >
          {" "}
          Business Tech for Small Medium Enterprises
        </motion.h3>
        {/* <div className="relative overflow-hidden w-full h-72">
          <Image fill src={"/webibee logo.svg"} alt="logo" className="object-contain object-center " />
        </div> */}
        <LogoTypeWriterAnimation text={"webibee"} />
      </div>
    </section>
  );
};

export default Hero;
