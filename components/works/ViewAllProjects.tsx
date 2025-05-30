"use client";
import { allProjectsLists } from "@/libs/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import {
    parentVariant,
    variant2,
    variantGrid,
} from "@/libs/Variants";

const ViewAllProjects = () => {
    return (
        <section className="block space-y-10 md:space-y-20 p-10 sm:px-20 md:px24 xl:px-60 sm:py-16 xl:py-28 overflow-hidden">
            <motion.h5
                variants={variant2}
                viewport={{ once: true }}
                initial="initial"
                whileInView="animate"
                className="font-EbGaramond text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium text-[#1B1B1CCC]"
            >
                View all <span className="font-bold text-info/60">Projects</span>
            </motion.h5>
            <motion.div
                variants={parentVariant}
                viewport={{ amount: 0.3, once: true }}
                initial="initial"
                whileInView="animate"
                className="flex overflow-x-scroll md:overflow-x-auto md:grid max-w-lg md:max-w-full w-full md:grid-cols-2 xl:grid-cols-3 no_scrollbar md:place-content-center md:place-items-center gap-10 xl:gap-5 pb-10"
            >
                {allProjectsLists.map((list, idx) => (
                    <motion.div
                        variants={variantGrid}
                        initial="initial"
                        whileInView="animate"
                        custom={idx}
                        viewport={{ once: true }}
                        key={idx}
                        className="block min-w-60 md:max-w-[480px] pb-5 shadow-md rounded-lg overflow-hidden h-[520px] md:h-[640px]"
                    >
                        <Link
                            href={`/caseStudy/${list.href}`}
                            passHref
                            className="space-y-8"
                        >
                            <div
                                className={`h-32 overflow-hidden w-full md:h-64 relative mx-auto`}
                                style={{ backgroundColor: list.bg }}
                            >
                                <Image
                                    alt="icon"
                                    src={list.img}
                                    fill
                                    className="object-contain object-center p-5"
                                />
                            </div>
                            <div className="space-y-4  p-5">
                                <div className="flex justify-between items-center font-EbGaramond font-bold tracking-wider text-[#1B1B1CCC]">
                                    <h4 className="md:text-3xl sm:text-2xl text-xl truncate w-[15ch]">
                                        {list.title.length > 15
                                            ? `${list.title.substring(0, 15)}...`
                                            : list.title}
                                    </h4>
                                    <h5 className="md:text-xl text-lg ">{list.year}</h5>
                                </div>
                                <p className="font-SourceCodePro text-base sm:text-lg !leading-normal">
                                    {list.desc}
                                </p>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </motion.div>

            <Marquee autoFill speed={60} pauseOnHover>
                {allProjectsLists.map((list, idx) => (
                    <div
                        key={idx}
                        className="relative mx-4 md:mx-8 overflow-hidden h-24 w-32"
                    >
                        <Image alt="logo" src={list.img} fill />
                    </div>
                ))}
            </Marquee>
        </section>
    );
};

export default ViewAllProjects;
