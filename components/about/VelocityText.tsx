"use client";
import {
    motion,
    useScroll,
    useVelocity,
    useTransform,
    useSpring,
} from "framer-motion";
import React, { useRef } from "react";

export const VelocityText = () => {
    const targetRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"],
    });

    const scrollVelocity = useVelocity(scrollYProgress);

    const skewXRaw = useTransform(
        scrollVelocity,
        [-0.5, 0.5],
        ["45deg", "-45deg"]
    );
    const skewX = useSpring(skewXRaw, { mass: 3, stiffness: 400, damping: 50 });

    // const xRaw = useTransform(scrollYProgress, [0, 1], [0, -4000]);
    // const x = useSpring(xRaw, { mass: 3, stiffness: 400, damping: 50 });

    // Right-to-left scrolling
    const xRawRightToLeft = useTransform(scrollYProgress, [0, 1], [0, -4000]);
    const xRightToLeft = useSpring(xRawRightToLeft, {
        mass: 3,
        stiffness: 400,
        damping: 50,
    });

    // Left-to-right scrolling
    const xRawLeftToRight = useTransform(scrollYProgress, [0, 1], [0, 4000]);
    const xLeftToRight = useSpring(xRawLeftToRight, {
        mass: 3,
        stiffness: 400,
        damping: 50,
    });

    return (
        <section
            ref={targetRef}
            className="h-[80vh] bg-secondary text-neutral-950 p-10 sm:px-20 xl:px-64"
        >
            <div className="sticky top-10 justify-between flex-col h-[40vh] gap-10 items-center overflow-hidden">
                <motion.p
                    style={{ skewX, x: xRightToLeft }}
                    className="origin-bottom-left font-EbGaramond font-bold tracking-wider whitespace-nowrap text-5xl uppercase leading-[0.85] md:text-7xl md:leading-[0.85]"
                >
                    Create <span className="text-white">Connect</span> Cultivate,Collaborate <span className="text-white">Compete</span> Conquer.Create Connect Cultivate
                </motion.p>
                <motion.p
                    style={{ skewX, x: xLeftToRight }}
                    className="origin-bottom-left font-EbGaramond font-bold tracking-wider whitespace-nowrap text-5xl uppercase leading-[0.85] md:text-7xl md:leading-[0.85]"
                >
                    Create <span className="text-white">Connect</span> Cultivate,Collaborate <span className="text-white">Compete</span> Conquer.Create Connect Cultivate
                </motion.p>
            </div>
        </section>
    );
};
