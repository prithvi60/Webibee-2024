"use client";
import { variant2 } from "@/libs/Variants";
import Spline from "@splinetool/react-spline";
import { motion, useTransform, useScroll } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const HowItWorks = ({
    data,
    title,
    styles,
}: {
    data: any;
    title: string;
    styles: string;
}) => {
    return <HorizontalScrollCarousel data={data} title={title} styles={styles} />;
};

export const WeShine = ({
    data,
    title,
    styles,
}: {
    data: any;
    title: string;
    styles: string;
}) => {
    return <HorizontalScrollCarousel data={data} title={title} styles={styles} />;
};

const HorizontalScrollCarousel = ({
    data,
    title,
    styles,
}: {
    data: any;
    title: string;
    styles: string;
}) => {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });
    const path = usePathname();
    const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
    const isTablet = useMediaQuery({
        query: "(min-width: 641px) and (max-width: 1024px)",
    });

    const x = useTransform(
        scrollYProgress,
        [0, 1],
        isMobile ? ["1%", "-85%"] : isTablet ? ["1%", "-75%"] : ["1%", "-65%"]
    );

    return (
        <section className="w-full h-full">
            <div className={`${path === "/proficiency" && "space-y-5"}`}>
                <motion.h5
                    variants={variant2}
                    viewport={{ once: true }}
                    initial="initial"
                    whileInView="animate"
                    className={`${styles}`}
                    dangerouslySetInnerHTML={{ __html: title }}
                />
                {path === "/proficiency" && (
                    <div className="space-y-5">
                        <p className="text-base sm:text-lg xl:text-xl font-SourceCodePro md:!leading-[1.5] !text-justify">
                            At Webibee, we thrive at the intersection of design, technology, and
                            intelligence. Our strength lies in crafting custom digital
                            experiences that go beyond aesthetics—experiences that think, adapt,
                            and evolve. Whether it’s AI-enhanced user flows, interactive 3D web
                            design, or high-performance web applications, we build solutions
                            that aren’t just functional but intuitive, immersive, and
                            future-ready. With every project, we push the limits of what’s
                            possible, ensuring that our clients don’t just get a website—they
                            get a digital experience that sets them apart.
                        </p>
                        <div className="cursor-copy hidden lg:block h-screen">
                            <Spline scene="https://prod.spline.design/WQe4Ao8qsc5DUXaN/scene.splinecode" />
                        </div>
                    </div>
                )}
            </div>
            <div
                ref={targetRef}
                className={`relative ${path === "/proficiency" ? "h-[300vh]" : "h-[300vh]"
                    } `}
            >
                <div
                    className={`${path === "/proficiency"
                        ? "top-60 space-y-5"
                        : path === "/whyCode"
                            ? "top-32 space-y-8"
                            : "top-32 space-y-10"
                        } sticky`}
                >
                    <div
                        className={`items-center flex ${path === "/proficiency"
                            ? "h-[45vh]"
                            : path === "/whyCode"
                                ? "h-[80vh]"
                                : "h-[80vh]"
                            } overflow-hidden`}
                    >
                        {path === "/proficiency" ? (
                            <motion.div style={{ x }} className="flex gap-10">
                                {data.map((card: string, idx: number) => {
                                    return <Card2 card={card} key={idx} />;
                                })}
                            </motion.div>
                        ) : (
                            <motion.div style={{ x }} className="flex gap-10">
                                {data.map((card: string, idx: number) => {
                                    return <Card card={card} key={idx} />;
                                })}
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

const Card = ({ card }: { card: any }) => {
    return (
        <div className="block space-y-8 min-w-72 md:min-w-[480px] pb-5">
            <div className="size-24 md:size-36 relative mx-auto">
                <Image
                    title="icon"
                    alt="icon"
                    src={card.img}
                    fill
                    className="object-contain object-center"
                />
            </div>
            <div className="space-y-4">
                <h2 className="font-EbGaramond text-center md:text-start font-bold tracking-wider md:text-3xl sm:text-2xl text-xl text-[#1B1B1CCC] xl:text-4xl">
                    {card.title}
                </h2>
                <p className="font-SourceCodePro text-justify md:text-start text-base sm:text-lg xl:text-xl !leading-tight">
                    {card.desc}
                </p>
            </div>
        </div>
    );
};

const Card2 = ({ card }: { card: any }) => {
    return (
        <div className="block space-y-8 min-w-[480px] pb-6">
            <div className="space-y-4">
                <h2 className="font-EbGaramond font-bold tracking-wider md:text-3xl sm:text-2xl text-xl text-[#1B1B1CCC] xl:text-4xl">
                    {card.title}
                </h2>
                <p className="font-SourceCodePro text-base sm:text-lg xl:text-xl !leading-tight">
                    {card.desc}
                </p>
            </div>
        </div>
    );
};

export default HowItWorks;

