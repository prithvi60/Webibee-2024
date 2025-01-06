"use client";
import { motion } from "framer-motion";
import { variantContact, variantTitle } from "@/libs/Variants";

const AboutClient = ({ about, title }: { about: string; title: string }) => {
    return (
        <section className="p-10 space-y-6 sm:px-20 xl:px-64 sm:py-16 xl:py-28">
            <motion.h5
                variants={variantTitle}
                viewport={{ once: true }}
                initial="initial"
                whileInView="animate"
                className="relative ml-2 font-EbGaramond font-bold tracking-wider text-3xl md:text-4xl p-1 xl:text-5xl before:absolute before:top-0.5 before:-left-2.5 before:w-2 before:h-full text-[#464959] before:bg-secondary before:rounded-full"
            >
                About {title}
            </motion.h5>
            <motion.p
                variants={variantContact}
                viewport={{ once: true }}
                initial="initial"
                whileInView="animate"
                className="font-SourceCodePro text-base md:text-lg xl:text-xl !leading-normal"
            >
                {about}
            </motion.p>
        </section>
    );
};

export default AboutClient;
