"use client";
import { howItWorks, shine } from "@/libs/data";
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
    return (
        <HorizontalScrollCarousel data={data} title={title} styles={styles} />
    );
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
        <section
            ref={targetRef}
            className={`relative ${path === "/proficiency" ? "h-[150vh]" : "h-[300vh]"
                } `}
        >
            <div className={`${path === "/proficiency" ? "top-32 space-y-20" : path === "/whyCode" ? "top-5 space-y-8" : "top-10 space-y-10"} sticky`}>
                <h5 className={`${styles}`}>
                    {title}
                </h5>
                <div className={`items-center flex ${path === "/proficiency" ? "h-[45vh]" : path === "/whyCode" ? "h-[80vh]" : "h-[80vh]"} overflow-hidden`}>
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
        </section>
    );
};

const Card = ({ card }: { card: any }) => {
    return (
        <div className="block space-y-8 min-w-72 md:min-w-[480px] pb-5">
            <div className="size-24 md:size-36 relative mx-auto">
                <Image
                    alt="icon"
                    src={card.img}
                    fill
                    className="object-contain object-center"
                />
            </div>
            <div className="space-y-4">
                <h4 className="font-EbGaramond text-center md:text-start font-bold tracking-wider md:text-3xl sm:text-2xl text-xl text-[#1B1B1CCC] xl:text-4xl">
                    {card.title}
                </h4>
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
                <h4 className="font-EbGaramond font-bold tracking-wider md:text-3xl sm:text-2xl text-xl text-[#1B1B1CCC] xl:text-4xl">
                    {card.title}
                </h4>
                <p className="font-SourceCodePro text-base sm:text-lg xl:text-xl !leading-tight">
                    {card.desc}
                </p>
            </div>
        </div>
    );
};

export default HowItWorks;

type CardType = {
    url: string;
    title: string;
    id: number;
};
