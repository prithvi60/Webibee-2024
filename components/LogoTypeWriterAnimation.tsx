"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const LogoTypeWriterAnimation = ({ text }: { text: string }) => {

    return (
        <Typewrite text={text} />
    );
};

const LETTER_DELAY = 0.25;
const BOX_FADE_DURATION = 1.75;

const FADE_DELAY = 5;
const MAIN_FADE_DURATION = 0.75;

const SWAP_DELAY_IN_MS = 5500;

const Typewrite = ({ text }: { text: string }) => {
    const [showText, setShowText] = useState(false);

    useEffect(() => {
        // Trigger to show text after the animation completes
        const timer = setTimeout(() => setShowText(true), text.length * LETTER_DELAY * 1000);
        return () => clearTimeout(timer);
    }, [text]);

    return (
        <div className="mb-2.5 font-EbGaramond font-semibold text-[64px] md:text-9xl xl:text-[180px] uppercase text-info tracking-widest">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: BOX_FADE_DURATION }}
                className="typewriter-box"
            >
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: LETTER_DELAY,
                            },
                        },
                    }}
                >
                    {text.split("").map((letter, index) => (
                        <motion.span
                            key={index}
                            variants={{
                                hidden: { opacity: 0 },
                                visible: { opacity: 1 },
                            }}
                        >
                            {letter}
                        </motion.span>
                    ))}
                </motion.div>
            </motion.div>

            {/* {showText && (
                <div className="final-text" style={{ opacity: 1 }}>
                    {text}
                </div>
            )} */}
            {/* <span className="inline-block size-10 bg-neutral-950" /> */}
            {/* <span className="ml-3">
                    <motion.span
                        initial={{
                            opacity: 1,
                        }}
                        animate={{
                            opacity: 0,
                        }}
                        transition={{
                            delay: FADE_DELAY,
                            duration: MAIN_FADE_DURATION,
                            ease: "easeInOut",
                        }}
                        key={`${exampleIndex}-${i}`}
                        className="relative"
                    >
                        <motion.span
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            transition={{
                                delay: i * LETTER_DELAY,
                                duration: 0,
                            }}
                        >
                            {l}
                        </motion.span>
                        <motion.span
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: [0, 1, 0],
                            }}
                            transition={{
                                delay: i * LETTER_DELAY,
                                times: [0, 0.1, 1],
                                duration: BOX_FADE_DURATION,
                                ease: "easeInOut",
                            }}
                            className="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-info/60"
                        />
                    </motion.span>
            </span> */}
        </div>
    );
};
