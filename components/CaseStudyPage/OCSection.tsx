"use client"
import React from "react";
import { parentVariant, variantGrid2, variantTitle } from "@/libs/Variants";
import { motion } from "framer-motion";

const OCSection = ({ OCLists }: { OCLists: any }) => {
    return (
        <section className="p-10 space-y-6 flex flex-col md:flex-row justify-between items-center sm:px-20 xl:px-64 gap-10 md:gap-5 xl:gap-10 sm:py-16 xl:py-28">
            <motion.h2
                variants={variantTitle}
                viewport={{ once: true }}
                initial="initial"
                whileInView="animate" className="font-EbGaramond font-bold text-info text-4xl tracking-wider md:text-6xl xl:text-8xl basis-full md:basis-1/2 xl:basis-1/4">
                Objective & Challenges
            </motion.h2>
            <motion.div
                variants={parentVariant}
                viewport={{ amount: 0.3, once: true }}
                initial="initial"
                whileInView="animate" className="basis-full md:basis-1/2 xl:basis-3/4 space-y-6">
                {OCLists.map((item: { title: string, desc: string }, index: number) => (
                    <motion.div
                        variants={variantGrid2}
                        initial="initial"
                        whileInView="animate"
                        custom={index}
                        viewport={{ once: true }} key={index} className="space-y-2.5">
                        <h3 className="font-EbGaramond font-bold tracking-wider text-xl md:text-2xl p-1 xl:text-3xl text-[#464959]">
                            {item.title}
                        </h3>
                        <p className="font-SourceCodePro text-base md:text-lg xl:text-xl !leading-snug">
                            {item.desc}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default OCSection;
