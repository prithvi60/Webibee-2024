"use client";
import { howItWorks } from "@/libs/data";
import { motion, useTransform, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const HowItWorks = () => {
    return (
        <div className="md:pb-28 p-10 sm:px-20 xl:px-64 sm:pt-16 xl:pt-28">
            <HorizontalScrollCarousel />
        </div>
    );
};

const HorizontalScrollCarousel = () => {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
    const isTablet = useMediaQuery({ query: "(min-width: 641px) and (max-width: 1024px)" });

    const x = useTransform(
        scrollYProgress,
        [0, 1],
        isMobile ? ["1%", "-85%"] : isTablet ? ["1%", "-75%"] : ["1%", "-65%"]
    );

    return (
        <section ref={targetRef} className="relative h-[300vh] ">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-10">
                    {howItWorks.map((card, idx) => {
                        return <Card card={card} key={idx} />;
                    })}
                </motion.div>
            </div>
        </section>
    );
};

const Card = ({ card }: { card: any }) => {
    return (
        <div className="block space-y-8 min-w-72 md:min-w-[480px] pb-5">
            <div className="size-24 md:size-48 relative mx-auto">
                <Image
                    alt=""
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

export default HowItWorks;

type CardType = {
    url: string;
    title: string;
    id: number;
};

const cards: CardType[] = [
    {
        url: "/imgs/abstract/1.jpg",
        title: "Title 1",
        id: 1,
    },
    {
        url: "/imgs/abstract/2.jpg",
        title: "Title 2",
        id: 2,
    },
    {
        url: "/imgs/abstract/3.jpg",
        title: "Title 3",
        id: 3,
    },
    {
        url: "/imgs/abstract/4.jpg",
        title: "Title 4",
        id: 4,
    },
    {
        url: "/imgs/abstract/5.jpg",
        title: "Title 5",
        id: 5,
    },
    {
        url: "/imgs/abstract/6.jpg",
        title: "Title 6",
        id: 6,
    },
    {
        url: "/imgs/abstract/7.jpg",
        title: "Title 7",
        id: 7,
    },
];
