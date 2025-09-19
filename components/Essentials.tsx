"use client";
import Image from "next/image";
import React from "react";
import { parentVariant, variantGrid, variantTitle } from "@/libs/Variants";
import { motion } from "framer-motion";

const Essentials = ({ data, title }: { data: any; title: string }) => {
    return (
        <section className="md:pb-28 p-10 sm:px-20 xl:px-64 sm:pt-16 xl:pt-28 space-y-20">
            <motion.h1
                variants={variantTitle}
                viewport={{ once: true }}
                initial="initial"
                whileInView="animate"
                className="font-EbGaramond font-medium text-5xl w-full sm:text-7xl xl:text-9xl tracking-wide !leading-tight text-center"
            >
                <strong className="font-extrabold text-info">{title}</strong>Essentials
            </motion.h1>
            <motion.div
                variants={parentVariant}
                viewport={{ amount: 0.3, once: true }}
                initial="initial"
                whileInView="animate"
                className="grid grid-cols-1 place-items-center place-content-center sm:grid-cols-2 xl:grid-cols-3 gap-20 lg:gap-14"
            >
                {data.map((list: any, idx: any) => (
                    <motion.div
                        variants={variantGrid}
                        initial="initial"
                        whileInView="animate"
                        custom={idx}
                        viewport={{ once: true }}
                        key={idx}
                        className="p-8 max-w-96 lg:max-w-full hover:scale-110 h-96 transition-all transform duration-500 ease-in-out space-y-5 shadow-xl rounded-md shadow-info/50"
                    >
                        <div className="relative size-16">
                            <Image title="icon" alt="icon" fill src={list.img} />
                        </div>
                        <h2 className="font-EbGaramond tracking-wider font-semibold text-lg sm:text-xl lg:text-2xl">
                            {list.title}
                        </h2>
                        <p className="font-SourceCodePro !leading-snug text-sm lg:text-base">
                            {list.desc}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Essentials;
