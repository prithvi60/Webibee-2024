"use client";
import { variantGrid } from "@/libs/Variants";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const BlogCard = ({ list, blog }: { list: any; blog?: boolean }) => {
    return (
        <motion.div
            variants={variantGrid}
            initial="initial"
            whileInView="animate"
            custom={list.title}
            viewport={{ once: true }}
            key={list.title}
            className={`block shadow-md rounded-lg ${blog ? "" : "min-w-60 md:max-w-[480px] pb-5 overflow-hidden h-[520px] md:h-[640px]"}`}
        >
            <Link
                href={blog ? `/blog/${list.slug.current}` : `/caseStudy/${list.href}`}
                passHref
                className={`${!blog && "space-y-6"}`}
            >
                {blog ? (
                    // <div
                    //     // className={`h-32 overflow-hidden w-full md:h-64 relative mx-auto`}
                    // >
                    <Image
                        alt={`${list.imageAlt} || blog post image`}
                        src={list.img || list.imageUrl}
                        width={250}
                        height={250}
                        className="object-cover rounded-md object-center w-full h-64"
                    />
                ) : (
                    <div
                        className={`h-32 overflow-hidden w-full md:h-64 relative mx-auto`}
                        style={{ backgroundColor: list.bg }}
                    >
                        <Image
                            alt={`image`}
                            src={list.img}
                            fill
                            className="object-contain object-center p-5"
                        />
                    </div>
                )}

                <div className="space-y-4 p-5">
                    <div className="flex justify-between items-center font-EbGaramond font-bold tracking-wider text-[#1B1B1CCC]">
                        <h4 className="md:text-3xl sm:text-2xl text-xl truncate w-[15ch]">
                            {list.title.length > 15
                                ? `${list.title.substring(0, 15)}...`
                                : list.title}
                        </h4>
                        <h5 className="md:text-xl text-lg ">{list.year || "2025"}</h5>
                    </div>
                    <p className="font-SourceCodePro text-base sm:text-lg !leading-normal">
                        {list.desc || list.summary.substring(0, 50)}
                    </p>
                </div>
            </Link>
        </motion.div>
    );
};
