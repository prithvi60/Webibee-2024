"use client";

import { variantTitle } from "@/libs/Variants";
import { motion } from "framer-motion";
import DotExpandButton from "../buttons/DotExpandButton";
import ContactForm from "./ContactForm";

const ContactData = ({ seo }: { seo?: boolean }) => {
    return (
        <section className={`w-full p-10 sm:px-20 xl:px-64 sm:py-16 xl:py-28 flex flex-col md:flex-row gap-20 ${seo ? "items-start" : "items-center"}`}>
            <div className="w-full md:w-1/2 space-y-7 md:space-y-14">
                {seo ? (
                    <motion.div
                        variants={variantTitle}
                        viewport={{ once: true }}
                        initial="initial"
                        whileInView="animate" className="w-full space-y-7 md:space-y-14">
                        <h3 className="font-EbGaramond font-medium text-5xl sm:text-7xl xl:text-8xl ">
                            Transform Your <strong className="text-info">Digital Presence</strong>
                        </h3>
                        <p className="font-SourceCodePro font-normal text-sm sm:text-base !leading-tight">
                            From clicks to conversions — our tailored digital marketing strategies drive measurable results.
                        </p>
                        <DotExpandButton text="GET IN TOUCH" href="/contact" />
                    </motion.div>
                ) : (
                    <motion.div
                        variants={variantTitle}
                        viewport={{ once: true }}
                        initial="initial"
                        whileInView="animate" className="w-full md:w-2/5 space-y-7 md:space-y-14">
                        <h3 className="font-EbGaramond font-medium text-5xl sm:text-7xl xl:text-8xl ">
                            Let’s <strong className="text-info">talk</strong>
                        </h3>
                        <p className="font-SourceCodePro font-normal text-sm sm:text-base !leading-tight">
                            Have a project to discuss?
                            <br /> Looking to partner with us?
                        </p>
                        <p className="font-SourceCodePro font-normal text-sm sm:text-base">
                            Drop us a line...
                        </p>
                    </motion.div>
                )}
            </div>
            <div className="w-full md:w-1/2">
                <ContactForm seo />
            </div>
        </section>
    )
}

export default ContactData