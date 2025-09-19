"use client";

import { variantTitle } from "@/libs/Variants";
import { motion } from "framer-motion";
import DotExpandButton from "../buttons/DotExpandButton";
import ContactForm from "../contact/ContactForm";
import CalendlyLink from "../CalendlyButton";

export const LGEHero = () => {
    return (
        <section
            className={`w-full p-10 sm:px-20 xl:px-64 sm:py-16 xl:py-28 flex flex-col md:flex-row items-start gap-10 `}
        // bg-cover bg-center bg-no-repeat
        // style={{ backgroundImage: "url('/heroLGE.svg')" }}
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
                        Spend less time on marketing, and more on running your business with our {" "}
                        <strong className="text-info">Lead Generation Engine</strong>
                    </h1>
                    <p className="font-SourceCodePro font-normal text-sm sm:text-base !leading-tight">
                        Our Lead Generation Engine handles the planning, content, and tools, so you stop worrying about execution and stay focused on growth.
                    </p>
                    <CalendlyLink btn />
                </motion.div>
            </div>
            <div className="w-full md:w-1/2">
                <ContactForm seo lge />
            </div>
        </section>
    );
};
