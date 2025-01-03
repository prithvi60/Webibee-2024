"use client";
import { portfolioImages } from "@/libs/data";
import Image from "next/image";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { useState } from "react";
import { motion } from "framer-motion";
import { variantContact, variantTitle } from "@/libs/Variants";

const WorksHeroSection = () => {
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
        <section className="block w-full space-y-10">
            <div className="px-10 pt-10 sm:px-20 space-y-6 xl:px-64 sm:pt-16 xl:pt-28">
                <motion.h3
                    variants={variantTitle}
                    viewport={{ once: true }}
                    initial="initial"
                    whileInView="animate" className="text-xl sm:text-2xl md:text-[40px] lg:text-[56px] xl:text-[72px] w-full font-EbGaramond uppercase font-medium tracking-wide !leading-tight h-full">
                    Portfolio <span className="font-bold text-secondary">spotlight</span>
                </motion.h3>
                <motion.p
                    variants={variantContact}
                    viewport={{ once: true }}
                    initial="initial"
                    whileInView="animate" className="font-SourceCodePro text-lg sm:text-xl lg:text-2xl !leading-snug capitalize">
                    See How We Help Growing Businesses Succeed and Stand Out.
                </motion.p>
            </div>
            <div className="pb-10 sm:pb-16 xl:pb-28">
                <div className="slider-container relative">
                    <Slider {...settings}>
                        {portfolioImages.map((image, index) => (
                            <div
                                // href={`/caseStudy/${image.href}`}
                                className="relative w-full h-[35vh] sm:h-[50vh] md:h-[80vh]  lg:h-screen"
                                key={index}
                            >
                                <Image
                                    fill
                                    alt="image"
                                    src={image.img}
                                    className="object-contain object-center"
                                    onLoad={handleImageLoad}
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default WorksHeroSection;

function SampleNextArrow(props: any) {
    const { onClick, loading } = props;
    return (
        <div
            className={`${loading && "hidden"
                } absolute bottom-8 sm:bottom-0 lg:bottom-2 right-4 sm:right-4 xl:right-16 rounded-full p-1.5 cursor-pointer hover:bg-secondary bg-info/60 backdrop-blur-xl`}
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
                } absolute p-1.5 cursor-pointer hover:bg-secondary bottom-8 sm:bottom-0 lg:bottom-2 right-12 sm:right-16 xl:right-32 rounded-full z-30 bg-info/60 backdrop-blur-xl`}
            onClick={onClick}
        >
            <FaArrowLeft className="text-xs sm:text-base xl:text-2xl text-white" />
        </div>
    );
}
