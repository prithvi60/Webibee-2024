"use client";
import { portfolioImages, portfolioImagesMob } from "@/libs/data";
import Image from "next/image";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const PortfolioSlider = () => {
    const [loading, setLoading] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const videoRefs = useRef([]);
    // Detect screen width and update state
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // Mobile: width < 768px
        };

        handleResize(); // Check initial screen width
        window.addEventListener("resize", handleResize); // Update on resize

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const video = videoRefs.current[0];
        if (video) {
            const tryPlay = () => {
                if (video.readyState >= 2) {
                    video.play();
                } else {
                    video.addEventListener("loadedmetadata", () => video.play(), { once: true });
                }
            };
            tryPlay();
        }
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: (current) => {
            videoRefs.current.forEach((video, idx) => {
                if (video) {
                    video.pause();
                    video.currentTime = 0;

                    if (idx === current) {
                        const playVideo = () => {
                            const playPromise = video.play();
                            if (playPromise !== undefined) {
                                playPromise.catch((error) => {
                                    console.error("Play prevented:", error);
                                });
                            }
                        };

                        // If metadata already loaded, play immediately
                        if (video.readyState >= 2) {
                            playVideo();
                        } else {
                            // Wait for video to be ready
                            video.addEventListener("loadedmetadata", playVideo, { once: true });
                        }
                    }
                }
            });
        },
        nextArrow: <SampleNextArrow loading={loading} />,
        prevArrow: <SamplePrevArrow loading={loading} />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1, // Makes sure one image is fully shown on mobile
                },
            },
        ],
    };

    const handleImageLoad = () => {
        setLoading(false);
    };
    // Select images based on device type
    const imagesToShow = isMobile ? portfolioImagesMob : portfolioImages;
    return (
        <section className="py-10 sm:py-16 xl:py-28 w-full h-full">
            <div className="slider-container relative">
                <Slider {...settings} className="portfolio">
                    {imagesToShow.map((image, index) => (
                        <Link
                            href={`/caseStudy/${image.href}`}
                            className="relative w-full h-[35vh] md:h-[80vh]  lg:h-screen"
                            key={index}
                        >
                            {image.video ? (
                                <video
                                    autoPlay
                                    ref={el => (videoRefs.current[index] = el)}
                                    loop
                                    muted
                                    webkit-playsinline="true"
                                    playsInline
                                    className="object-cover object-center w-full h-full"
                                >
                                    <source src={image.video} type="video/mp4" />
                                </video>
                            ) : (

                                <Image
                                    fill
                                    alt="image"
                                    src={image.img}
                                    className="object-contain md:object-contain object-center"
                                    onLoad={handleImageLoad}
                                />
                            )}
                        </Link>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default PortfolioSlider;

function SampleNextArrow(props) {
    const { onClick, loading } = props;
    return (
        <div
            className={`${loading && "hidden"
                } absolute top-2 sm:top-28 lg:top-28 right-2 sm:right-4 xl:right-16 rounded-full p-2.5 cursor-pointer hover:bg-info bg-secondary backdrop-blur-xl`}
            onClick={onClick}
        >
            <FaArrowRight className="text-xs sm:text-base xl:text-2xl text-white" />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick, loading } = props;
    return (
        <div
            className={`${loading && "hidden"
                } absolute p-2.5 cursor-pointer hover:bg-info top-2 sm:top-28 right-12 sm:right-16 xl:right-32 lg:top-28 rounded-full z-30 bg-secondary backdrop-blur-xl`}
            onClick={onClick}
        >
            <FaArrowLeft className="text-xs sm:text-base xl:text-2xl text-white" />
        </div>
    );
}
