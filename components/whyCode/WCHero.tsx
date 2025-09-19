"use client"
import React from "react";
import DotExpandButton from "../buttons/DotExpandButton";
import { motion } from "framer-motion";
import { variantTitle, variantTitle2 } from "@/libs/Variants";
const WorksHero = () => {
  return (
    <section className="md:pb-28 p-10 sm:px-20 xl:px-64 sm:pt-16 xl:pt-28 space-y-20">
      <motion.h1
        variants={variantTitle}
        viewport={{ once: true }}
        initial="initial"
        whileInView="animate" className="font-EbGaramond font-medium text-5xl w-full sm:text-7xl xl:text-9xl tracking-wide !leading-tight text-center md:text-start">
        Craft with{" "}
        <strong className="font-extrabold text-info">CODE, SCALE </strong>with
        Confidence
      </motion.h1>
      <motion.div
        variants={variantTitle2}
        viewport={{ once: true }}
        initial="initial"
        whileInView="animate" className="w-full flex flex-col md:flex-row justify-between items-center gap-10 md:gap-5">
        <p className="font-SourceCodePro w-full md:w-3/5 text-lg md:text-xl xl:text-2xl">Coding unlocks full control, customization, and long-term growth.</p>
        <DotExpandButton href="/works" text="Check out our Works" />
      </motion.div>
    </section>
  );
};

export default WorksHero;
