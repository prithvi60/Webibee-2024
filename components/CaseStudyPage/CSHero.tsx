"use client";
import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";
import { parentVariant, variant1, variantGrid } from "@/libs/Variants";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const CSHero = ({
    data,
    title,
    bgImg,
    bgVideo,
    slides,
    summary,
}: {
    data: any;
    title: string;
    bgImg: string;
    bgVideo?: string;
    slides: any;
    summary: string;
}) => {
    const [loading, setLoading] = useState(true);
    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        // autoplay: true,
        // autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow loading={loading} />,
        prevArrow: <SamplePrevArrow loading={loading} />,
    };

    const handleImageLoad = () => {
        setLoading(false);
    };
    return (
        <section className="block w-full h-full space-y-10 md:space-y-28">
            <div className="relative overflow-hidden w-full h-[35vh] md:h-[65vh] xl:min-h-screen sm:px-20 xl:px-64">
                {bgVideo ? (
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        onLoad={handleImageLoad}
                        className="object-cover object-center w-full m-auto h-full"
                    >
                        <source src={bgVideo} type="video/mp4" />
                    </video>
                ) : (
                    <Image
                        fill
                        alt="bg image"
                        quality={100}
                        title="background image"
                        src={bgImg}
                        className="object-contain xl:object-cover object-center"
                    />
                )}
            </div>
            <div className="p-10 sm:px-20 xl:px-64 sm:pb-16 xl:pb-28 block space-y-10">
                <motion.div
                    variants={variant1}
                    viewport={{ once: true }}
                    initial="initial"
                    whileInView="animate"
                    className="font-EbGaramond font-bold tracking-wider text-4xl md:text-5xl xl:text-6xl text-[#464959]"
                >
                    {title}
                </motion.div>
                <motion.div
                    variants={variant1}
                    viewport={{ once: true }}
                    initial="initial"
                    whileInView="animate"
                    className="font-SourceCodePro font-medium !leading-tight text-base md:text-lg xl:text-xl"
                >
                    {summary}
                </motion.div>
                <div className="flex flex-col md:gap-10 gap-6">
                    <div className="slider-container relative w-full h-64 md:h-80 xl:h-96">
                        <Slider {...settings}>
                            {slides.map(
                                (
                                    slide: { img?: string; video?: string; alt: string },
                                    index: number
                                ) => (
                                    <div
                                        className="relative overflow-hidden w-full h-64 md:h-96 xl:h-[520px]"
                                        key={index}
                                    >
                                        {slide.video ? (
                                            <video
                                                autoPlay
                                                loop
                                                muted
                                                playsInline
                                                controls
                                                onLoad={handleImageLoad}
                                                className="object-contain object-center w-max mx-auto h-full"
                                            >
                                                <source src={slide.video} type="video/mp4" />
                                            </video>
                                        ) : (
                                            <Image
                                                title="slide image"
                                                fill
                                                alt={slide.alt}
                                                src={slide.img!}
                                                className="object-contain object-center"
                                                onLoad={handleImageLoad}
                                            />
                                        )}
                                    </div>
                                )
                            )}
                        </Slider>
                    </div>
                    <motion.div
                        variants={parentVariant}
                        viewport={{ amount: 0.3, once: true }}
                        initial="initial"
                        whileInView="animate"
                        className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:mt-24 xl:mt-44"
                    >
                        {data.map((item: any, index: number) => (
                            <motion.div
                                variants={variantGrid}
                                initial="initial"
                                whileInView="animate"
                                custom={index}
                                viewport={{ once: true }}
                                key={index}
                                className="space-y-4 "
                            >
                                <h2 className="relative ml-2 font-EbGaramond font-bold tracking-wider text-xl md:text-2xl p-1 xl:text-3xl before:absolute before:top-0.5 before:-left-2 before:w-2 before:h-full text-[#464959] before:bg-secondary before:rounded-full capitalize">
                                    {item.title}
                                </h2>
                                <ul className="">
                                    {item.title === "services" ? (
                                        <li className="font-SourceCodePro font-medium text-base md:text-lg xl:text-xl pl-10 pr-4 py-3.5 mr-2 bg-[#FFD70033]">
                                            {item.list.map((val: any, idx: number) => (
                                                <h3 key={idx}>{val}</h3>
                                            ))}
                                        </li>
                                    ) : (
                                        <>
                                            <li className="font-SourceCodePro font-medium text-base md:text-lg xl:text-xl pl-10 pr-4 py-3.5 mr-2 bg-[#FFD70033]">
                                                {item.list}
                                            </li>
                                        </>
                                    )}
                                </ul>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CSHero;

function SampleNextArrow(props: any) {
    const { onClick, loading } = props;
    return (
        <div
            className={`${loading && "hidden"
                } absolute top-1/2 -translate-y-1/2 -right-9 sm:-right-10 xl:-right-32 rounded-full p-2.5 cursor-pointer hover:bg-info bg-secondary backdrop-blur-xl`}
            onClick={onClick}
        >
            <FaArrowRight className="text-xs sm:text-base xl:text-2xl text-white" />
        </div>
    );
}

function SamplePrevArrow(props: any) {
    const { onClick, loading } = props;
    return (
        <div
            className={`${loading && "hidden"
                } absolute p-2.5 cursor-pointer hover:bg-info top-1/2 -translate-y-1/2 -left-9 sm:-left-10 xl:-left-32 rounded-full z-30 bg-secondary backdrop-blur-xl`}
            onClick={onClick}
        >
            <FaArrowLeft className="text-xs sm:text-base xl:text-2xl text-white" />
        </div>
    );
}
