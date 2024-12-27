"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const SmoothScroll: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    // Get height information of window and content
    const contentRef = useRef<HTMLDivElement>(null);
    const [contentHeight, setContentHeight] = useState(0);
    const [windowHeight, setWindowHeight] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            if (contentRef.current) {
                setContentHeight(contentRef.current.scrollHeight);
            }
            setWindowHeight(window.innerHeight);
        };

        // Initial call
        handleResize();

        // Setup listeners for window resizing
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Use Framer Motion's scroll hooks for smooth transformation
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -(contentHeight - windowHeight)]);

    return (
        <>
            {/* Placeholder to simulate the total scroll height */}
            <div style={{ height: contentHeight }} />
            {/* Motion div for scrolling */}
            <motion.div
                // className="w-screen fixed top-0 flex flex-col"
                ref={contentRef}
                style={{ y: y }}
            >
                {children}
            </motion.div>
        </>
    );
};

export default SmoothScroll;
