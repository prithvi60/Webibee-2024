"use client";
import { animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface Props {
    num: number;
    suffix: string;
    decimals?: number;
    subheading: string;
    isActive?: boolean;
}

export const Stats = ({
    num,
    suffix,
    decimals = 0,
    subheading,
    isActive = false,
}: Props) => {
    const ref = useRef<HTMLSpanElement | null>(null);
    const isInView = useInView(ref);

    useEffect(() => {
        if (!isInView) return;

        animate(0, num, {
            duration: 2.5,
            onUpdate(value) {
                if (!ref.current) return;

                ref.current.textContent = value.toFixed(decimals);
            },
        });
    }, [num, decimals, isInView]);

    return (
        <div
            className={`flex w-full h-52 md:w-72 md:h-80 flex-col justify-center items-center transition-all duration-500 gap-4 ease-in-out rounded-md ${isActive ? "bg-[#FFD909]" : "bg-transparent"
                }`}
        >
            <p
                className={`mb-2 text-center md:text-6xl text-5xl xl:text-8xl font-semibold sm:text-6xl transition-colors duration-500 ${isActive ? "text-white" : "text-info"
                    }`}
            >
                <span ref={ref}></span>
                {suffix}
            </p>
            <p
                className={`max-w-48 text-center text-lg md:text-xl xl:text-2xl transition-colors duration-500 font-medium`}
            >
                {subheading}
            </p>
        </div>
    );
};
