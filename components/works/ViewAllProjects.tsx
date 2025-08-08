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
} from "@/libs/Variants";
import { BlogCard } from "../blog/BlogCard";

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
                    <BlogCard list={list} key={idx} />
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
