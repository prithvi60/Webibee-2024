"use client";
import { categories, categories2 } from "@/libs/data";
import Image from "next/image";
import React from "react";
import { parentVariant, variant1, variantGrid } from "@/libs/Variants";
import { motion } from "framer-motion";
import Link from "next/link";

const Categories = () => {
    return (
        <section className="p-10 overflow-visible min-h-screen sm:px-20 xl:px-64 sm:py-16 xl:py-28 flex flex-col lg:flex-row gap-10 lg:justify-between">
            <div className="w-full lg:w-[45%] h-fit-content md:mr-6 xl:mr-7">
                <motion.div
                    variants={variant1}
                    viewport={{ once: true }}
                    initial="initial"
                    whileInView="animate"
                    className="lg:sticky lg:top-5 space-y-12"
                >
                    <h2 className="font-EbGaramond text-4xl xl:text-6xl tracking-wider font-medium text-center md:text-start">
                        Crafting Impact Across{" "}
                        <strong className="text-info">Industries</strong>
                    </h2>
                    <p className="text-sm text-left md:text-start md:text-lg font-SourceCodePro">
                        Our work transforms visions into digital realities, elevating brands
                        across diverse industries. Whether designing sleek portfolios for
                        clothing brands or crafting immersive experiences for interior
                        designers, we blend creativity with functionality. Every project is
                        a testament to innovation and attention to detail.
                    </p>
                </motion.div>
            </div>
            <div className="flex no_scrollbar md:justify-center flex-row md:flex-col lg:flex-row gap-5 max-w-2xl md:max-w-full lg:w-[55%] overflow-x-scroll lg:overflow-x-visible h-full">
                <motion.div
                    variants={parentVariant}
                    viewport={{ amount: 0.3, once: true }}
                    initial="initial"
                    whileInView="animate"
                    className="flex flex-row lg:flex-col gap-5 lg:gap-10"
                >
                    {categories.map((category, idx) => (
                        <motion.div
                            variants={variantGrid}
                            initial="initial"
                            whileInView="animate"
                            custom={idx}
                            viewport={{ once: true }}
                            key={idx}
                            className="p-5 w-52 md:w-64 lg:w-[280px] border-4 border-[#DFE3E8] h-full sm:h-72 xl:h-96"
                        >
                            <Link
                                title={category.title}
                                href={category.href}
                                className="flex flex-col items-center justify-center gap-10"
                            >
                                <div className="relative mx-auto w-40 h-20 md:w-60 md:h-40">
                                    <Image
                                        title="logo"
                                        fill
                                        alt="logo"
                                        className="object-contain object-center"
                                        src={category.logo}
                                    />
                                </div>
                                <hr className="w-full h-1 bg-secondary rounded-md" />
                                <div className="text-[#404040] text-base tracking-wider md:text-lg block space-y-1.5 text-center uppercase font-EbGaramond font-bold">
                                    <h4>{category.title}</h4>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
                <motion.div
                    variants={parentVariant}
                    viewport={{ amount: 0.3, once: true }}
                    initial="initial"
                    whileInView="animate"
                    className="flex flex-row lg:flex-col gap-5 lg:gap-10 lg:mt-24"
                >
                    {categories2.map((category, idx) => (
                        <motion.div
                            variants={variantGrid}
                            initial="initial"
                            whileInView="animate"
                            custom={idx}
                            viewport={{ once: true }}
                            key={idx}
                            className="p-5 w-52 md:w-64 lg:w-[280px] border-4 border-[#DFE3E8] h-full sm:h-72 xl:h-96"
                        >
                            <Link
                                title={category.title}
                                href={category.href}
                                className="flex flex-col items-center justify-center gap-10"
                            >
                                <div className="relative mx-auto w-40 h-20 md:w-60 md:h-40">
                                    <Image
                                        title="logo"
                                        fill
                                        alt="logo"
                                        className="object-contain object-center"
                                        src={category.logo}
                                    />
                                </div>
                                <hr className="w-full h-1 bg-secondary rounded-md" />
                                <div className="text-[#404040] text-base tracking-wider md:text-lg block space-y-1.5 text-center uppercase font-EbGaramond font-bold">
                                    <h4>{category.title}</h4>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Categories;
