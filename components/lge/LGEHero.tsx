"use client";

import { variantTitle } from "@/libs/Variants";
import { motion } from "framer-motion";
import DotExpandButton from "../buttons/DotExpandButton";
import ContactForm from "../contact/ContactForm";
import CalendlyLink from "../CalendlyButton";

export const LGEHero = () => {
    return (
        <section
            className={`w-full p-10 sm:px-20 xl:px-64 sm:py-16 xl:py-28 flex flex-col md:flex-row items-start gap-10 bg-cover bg-center bg-no-repeat`}
            style={{ backgroundImage: "url('/heroLGE.svg')" }}
        >
            <div className="w-full md:w-1/2">
                <motion.div
                    variants={variantTitle}
                    viewport={{ once: true }}
                    initial="initial"
                    whileInView="animate"
                    className="w-full space-y-7 md:space-y-14"
                >
                    <h1 className="font-EbGaramond font-medium capitalize text-5xl sm:text-6xl xl:text-7xl">
                        Get more qualified leads online with our{" "}
                        <strong className="text-info">Lead Generation Engine</strong>
                    </h1>
                    <p className="font-SourceCodePro font-normal text-sm sm:text-base !leading-tight">
                        We make marketing simpler for SMEs with a powerful blend of design,
                        technology, and automation—so you get more leads and nurture them
                        while saving time and money.
                    </p>
                    <CalendlyLink btn />
                </motion.div>
            </div>
            <div className="w-full md:w-1/2">
                <ContactForm seo />
            </div>
        </section>
    );
};
