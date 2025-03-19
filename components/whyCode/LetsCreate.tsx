"use client";
import { motion } from "framer-motion";
import { variant1, variantTitle } from "@/libs/Variants";
import DotExpandButton from "../buttons/DotExpandButton";
import { outPerforms } from "@/libs/data";
import Slider from "react-slick";
import { useEffect, useRef, useState } from "react";

const LetsCreate = () => {
    const [isInView, setIsInView] = useState<boolean>(false);
    const [isActive, setIsActive] = useState<number>(0);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const sliderRef = useRef<Slider | null>(null);

    // Slick slider settings
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        centerMode: true,
        centerPadding: "0px",
        autoplay: isInView,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        arrows: false,
        beforeChange: (current: number, next: number) => {
            setIsActive(next);
        },
        // afterChange: (currentSlide: number) => {
        //     setIsActive(currentSlide)
        // },
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                },
            },
        ],
    };

    // Detect if component is in viewport
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            { threshold: 0.5 } // Adjust threshold as needed
        );

        const currentRef = containerRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
            observer.disconnect();
        };
    }, []);

    // Control slider autoplay based on visibility
    useEffect(() => {
        if (sliderRef.current) {
            if (isInView) {
                sliderRef.current.slickPlay();
            } else {
                sliderRef.current.slickPause();
            }
        }
    }, [isInView]);
    return (
        <div className="block text-center space-y-10 lg:space-y-20 p-10 sm:px-20 xl:px-64 sm:py-16 xl:py-28">
            <h4 className="font-EbGaramond text-4xl xl:text-6xl tracking-wider font-medium text-center md:text-start">
                Why Custom Code <strong className="text-info">Outperforms</strong>{" "}
                No-Code Solutions
            </h4>
            <div className="flex flex-col justify-center lg:flex-row lg:justify-between items-center lg:items-start gap-12 lg:gap-6">
                <motion.div
                    variants={variant1}
                    viewport={{ once: true }}
                    initial="initial"
                    whileInView="animate"
                    className="lg:sticky lg:top-5 w-full lg:w-3/5"
                >
                    <p className="text-sm md:text-start md:text-lg font-SourceCodePro md:!leading-[2] !text-justify">
                        Custom-coded solutions offer unparalleled{" "}
                        <span className="font-bold px-1">
                            flexibility, scalability, and performance
                        </span>{" "}
                        compared to no-code platforms. While no-code tools are quick to
                        deploy, they often come with limitations in{" "}
                        <span className="font-bold px-1">
                            customization, integrations, and long-term scalability.
                        </span>
                        With coding, businesses can build tailored solutions that meet
                        specific needs, ensuring a seamless user experience, optimized
                        performance, and enhanced security. Unlike no-code platforms, which
                        rely on predefined templates and third-party dependencies, coded
                        solutions provide{" "}
                        <span className="font-bold px-1">
                            complete control, allowing for continuous improvements and unique
                            branding.
                        </span>
                        Additionally, as businesses grow, coded applications adapt easily
                        without the constraints of platform restrictions or rising
                        subscription costs. Investing in coding ensures a future-proof,
                        efficient, and competitive digital presence.
                    </p>
                </motion.div>
                <div
                    ref={containerRef}
                    className="h-[520px] py-4 md:py-8 overflow-hidden w-full lg:w-2/5"
                >
                    <Slider ref={sliderRef} {...settings}>
                        {outPerforms.map((list: string, idx: number) => (
                            <div key={idx} className="py-2 outline-none">
                                <h2
                                    className={`rounded-lg font-EbGaramond transition-all transform py-3 text-lg lg:text-xl xl:text-2xl max-w-60 sm:max-w-72 xl:max-w-80 mx-auto text-center duration-700 ease-in-out font-extrabold italic slick-center:scale-125 ${isActive === idx
                                        ? "text-info border-2 border-secondary scale-110"
                                        : "text-info/50 opacity-65"
                                        }`}
                                >
                                    {list}
                                </h2>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default LetsCreate;

{/* <motion.div
variants={variantTitle}
viewport={{ once: true }}
initial="initial"
whileInView="animate"
className="space-y-4 md:space-y-7"
>
<h4 className="font-EbGaramond text-xl font-medium text-[#181B30] capitalize sm:text-2xl xl:text-[40px]">
    If this aligns with your vision?
</h4>
<h4 className="font-EbGaramond !leading-20 text-4xl sm:text-5xl lg:text-[70px] flex flex-col gap-5">
    let's create something together{" "}
    <strong className="font-extrabold text-info tracking-wide">
        Exceptional!
    </strong>
</h4>
<DotExpandButton text="GET IN TOUCH" href="/contact" />
</motion.div> */}