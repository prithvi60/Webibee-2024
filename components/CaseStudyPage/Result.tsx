"use client";
import { motion } from "framer-motion";
import { variant1, variants, variantTitle } from "@/libs/Variants";
import Image from "next/image";
import React, { useState } from "react";
import HowItWorks from "../whyCode/HorizontalScrollCarousel";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

interface ResultProps {
    results: any;
    testimonialImg?: string;
    testimonialName?: string;
    testimonialPosition?: string;
    testimonials?: any;
    data: any;
}

const Result: React.FC<ResultProps> = ({
    results,
    data,
    testimonialImg,
    testimonialName,
    testimonialPosition,
    testimonials,
}) => {
    const [loading, setLoading] = useState(true);
    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow loading={loading} />,
        prevArrow: <SamplePrevArrow loading={loading} />,
    };

    const handleImageLoad = () => {
        setLoading(false);
    };
    return (
        <section className="p-10 space-y-6 sm:px-20 xl:px-64 sm:py-16 xl:py-28">
            <HowItWorks
                data={results}
                title="Result"
                styles={
                    "font-EbGaramond font-bold tracking-wider text-4xl md:text-5xl xl:text-6xl text-info"
                }
            />
            <div className="slider-container relative">
                {data.length < 2 ? (
                    <>
                        {data.map((img: { img: string; alt: string }, idx: number) => (
                            <div
                                className="relative overflow-hidden w-full h-40 md:h-96 xl:h-[28rem]"
                                key={idx}
                            >
                                <Image
                                    fill
                                    alt={img.alt}
                                    className="object-contain object-center"
                                    src={img.img}
                                    onLoad={handleImageLoad}
                                />
                            </div>
                        ))}
                    </>
                ) : (
                    <Slider {...settings}>
                        {data.map((img: { img: string; alt: string }, idx: number) => (
                            <div
                                className="relative overflow-hidden w-full h-40 md:h-96 xl:h-[28rem]"
                                key={idx}
                            >
                                <Image
                                    fill
                                    alt={img.alt}
                                    className="object-contain object-center"
                                    src={img.img}
                                    onLoad={handleImageLoad}
                                />
                            </div>
                        ))}
                    </Slider>
                )}
            </div>
            {testimonialImg &&
                testimonialName &&
                testimonialPosition &&
                testimonials && (
                    <div className="bg-[#FFD70026] flex !mt-32 flex-col lg:flex-row gap-10 p-8">
                        <div className="basis-full md:basis-2/5">
                            <motion.div
                                variants={variantTitle}
                                viewport={{ once: true }}
                                initial="initial"
                                whileInView="animate"
                                className="relative overflow-hidden w-60 sm:w-80 mx-auto lg:w-full h-60 sm:h-96"
                            >
                                <Image
                                    fill
                                    alt="client image"
                                    className="object-cover 2xl:object-contain object-center bg-[#ffe44c]"
                                    src={testimonialImg}
                                />
                                <motion.div
                                    variants={variants}
                                    viewport={{ once: true }}
                                    initial="initial"
                                    whileInView="animate"
                                    className="font-SourceCodePro bg-[#88720166] backdrop-blur-md font-medium w-full text-white absolute bottom-0 left-0 px-6 space-y-3 py-3"
                                >
                                    <h5 className="text-lg md:text-xl">{testimonialName}</h5>
                                    <p className="text-xs md:text-sm">{testimonialPosition}</p>
                                </motion.div>
                            </motion.div>
                        </div>
                        <motion.div
                            variants={variant1}
                            viewport={{ once: true }}
                            initial="initial"
                            whileInView="animate"
                            className="font-SourceCodePro text-base md:text-lg !leading-tight text-[#181B30] basis-full md:basis-3/5"
                            dangerouslySetInnerHTML={{ __html: testimonials }}
                        />
                    </div>
                )}
        </section>
    );
};

export default Result;

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
