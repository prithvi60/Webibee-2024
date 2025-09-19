"use client";

import { variantTitle } from "@/libs/Variants";
import { motion } from "framer-motion";
import DotExpandButton from "../buttons/DotExpandButton";
import ContactForm from "./ContactForm";

type DataProps = {
    title: React.ReactNode;
    desc: string;
    btn: string;
};

const ContactData = ({
    seo,
    data,
    location,
}: {
    seo?: boolean;
    data?: DataProps;
    location?: string | null;
}) => {
    const country = `in ${location}`;


    const renderedDesc = data?.desc
        .replace("{{Country}}", location ? country : "")
        .trim();
    return (
        <section
            className={`w-full p-10 sm:px-20 xl:px-64 sm:py-16 xl:py-28 flex flex-col md:flex-row ${seo ? "items-start gap-10" : "items-center gap-20"}`}
        >
            <div className="w-full md:w-1/2">
                {seo ? (
                    <motion.div
                        variants={variantTitle}
                        viewport={{ once: true }}
                        initial="initial"
                        whileInView="animate"
                        className="w-full space-y-7 md:space-y-14"
                    >
                        <h1 className="font-EbGaramond font-medium capitalize text-5xl sm:text-6xl xl:text-7xl">
                            {data?.title} {`${location ? country : ""}`}
                        </h1>
                        <p className="font-SourceCodePro font-normal text-sm sm:text-base !leading-tight">
                            {renderedDesc}
                        </p>
                        <DotExpandButton text={data?.btn || ""} href="/contact" />
                    </motion.div>
                ) : (
                    <motion.div
                        variants={variantTitle}
                        viewport={{ once: true }}
                        initial="initial"
                        whileInView="animate"
                        className="w-full space-y-7 md:space-y-14"
                    >
                        <h2 className="font-EbGaramond font-medium text-5xl sm:text-7xl xl:text-8xl ">
                            Let’s <strong className="text-info">talk</strong>
                        </h2>
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
    );
};

export default ContactData;
