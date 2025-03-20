"use client";
import { motion } from "framer-motion";
import { variant1, variant2, variantTitle } from "@/libs/Variants";
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
        slidesToShow: 3,
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
            <div className="flex flex-col justify-center lg:flex-row lg:justify-between items-center lg:items-start gap-12 lg:gap-6 relative">
                <motion.div
                    variants={variant1}
                    viewport={{ once: true }}
                    initial="initial"
                    whileInView="animate"
                    className="w-full lg:w-3/5 space-y-5 md:space-y-10"
                >
                    <p className="text-base sm:text-lg lg:text-xl font-SourceCodePro md:!leading-[1.5] !text-justify text-[#404040]">
                        At Webibee, code isn’t just about building websites—it’s a mindset.
                        It’s about solving problems, designing better experiences, and
                        pushing the boundaries of what’s possible. In a world where
                        technology evolves faster than ever, coding is the language that
                        powers innovation, automation, and intelligent systems.
                    </p>
                    <p className="text-base sm:text-lg lg:text-xl font-SourceCodePro md:!leading-[1.5] !text-justify flex flex-col gap-1.5 text-[#404040]">
                        <span className="font-extrabold tracking-normal text-black">
                            A Mindset of Exploration & Problem-Solving
                        </span>
                        Coding isn’t just technical—it’s creative problem-solving. Every
                        project starts with a challenge, and our job is to engineer
                        solutions that seamlessly blend design, function, and user
                        experience. It’s about breaking down complex problems into simple,
                        intuitive interactions.
                    </p>
                    <p className="text-base sm:text-lg lg:text-xl font-SourceCodePro md:!leading-[1.5] !text-justify flex flex-col gap-1.5 text-[#404040]">
                        <span className="font-extrabold tracking-normal text-black">
                            AI: The Next Creative Leap
                        </span>
                        The web is no longer just about static content—it’s becoming
                        smarter, more interactive, and AI-driven. At Webibee, we embrace AI
                        to enhance user experiences, automate workflows, and make websites
                        more than just digital brochures. From AI-powered booking flows to
                        intelligent UI personalization, we see code as a way to bring
                        adaptive, intuitive technology to businesses.
                    </p>
                    <p className="text-base sm:text-lg lg:text-xl font-SourceCodePro md:!leading-[1.5] !text-justify flex flex-col gap-1.5 text-[#404040]">
                        <span className="font-extrabold tracking-normal text-black">
                            Building for the Future
                        </span>
                        Technology is constantly evolving, and we’re not just following
                        trends—we’re exploring new paradigms. Whether it’s 3D interactions,
                        AI-assisted design, or creative coding experiments, we push the web
                        forward with innovative, future-ready solutions.
                    </p>
                    <p className="text-base sm:text-lg lg:text-xl font-SourceCodePro md:!leading-[1.5] !text-justify flex flex-col gap-1.5 text-[#404040]">
                        <span className="font-extrabold tracking-normal text-black">
                            BCode Beyond the Screen
                        </span>
                        The way we code reflects the way we think—logical yet creative,
                        structured yet adaptable. This mindset doesn’t just shape our work,
                        it shapes how we approach challenges in life and business.
                    </p>
                    <p className="text-base sm:text-lg lg:text-xl font-SourceCodePro md:!leading-[1.5] !text-justify text-[#404040]">
                        Want to build something beyond the ordinary? Let’s create together.
                        🚀
                    </p>
                </motion.div>
                <motion.div
                    variants={variant2}
                    viewport={{ once: true }}
                    initial="initial"
                    whileInView="animate"
                    ref={containerRef}
                    className="h-full py-4 md:py-8 overflow-hidden w-full lg:w-2/5 lg:sticky lg:top-5"
                >
                    <Slider ref={sliderRef} {...settings}>
                        {outPerforms.map((list: string, idx: number) => (
                            <div key={idx} className="py-2 outline-none">
                                <h2
                                    className={`rounded-lg font-EbGaramond transition-all transform py-3 text-lg lg:text-xl xl:text-2xl max-w-60 sm:max-w-72 xl:max-w-80 mx-auto text-center duration-700 ease-in-out font-extrabold ${isActive === idx
                                        ? "text-black border-2 border-info scale-110"
                                        : "text-black/50 opacity-65"
                                        }`}
                                >
                                    {list}
                                </h2>
                            </div>
                        ))}
                    </Slider>
                </motion.div>
            </div>
        </div>
    );
};

export default LetsCreate;

{
    /* <motion.div
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
      </motion.div> */
}
