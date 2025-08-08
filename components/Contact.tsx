"use client";
import React from "react";
import DotExpandButton from "./buttons/DotExpandButton";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { variantTitle } from "@/libs/Variants";
const Contact = () => {
    const path = usePathname();
    // console.log(path);

    return (
        <section
            className={`${path === "/contact" || path === "/thankyou" ? "hidden" : "block"
                } w-full p-10 sm:px-12 xl:pt-12 xl:pb-6 max-w-5xl mx-auto text-center`}
        >
            {path.startsWith("/caseStudy") ? (
                <motion.div
                    variants={variantTitle}
                    viewport={{ once: true }}
                    initial="initial"
                    whileInView="animate" className="flex flex-col md:flex-row md:justify-between gap-10 md:gap-5">
                    <div className="space-y-10 w-full md:w-3/5">
                        <h4 className="font-EbGaramond text-2xl !leading-snug tracking-wider capitalize sm:text-[32px]">
                            Ready to take your project to the{" "}
                            <strong className="font-extrabold text-info">next level?</strong>{" "}
                            Let’s talk about your goals!
                        </h4>
                        <DotExpandButton text="GET IN TOUCH" href="/contact" />
                    </div>
                    <div className="space-y-10 w-full md:w-2/5">
                        <h4 className="font-EbGaramond text-2xl !leading-snug tracking-wider capitalize sm:text-[32px]">
                            See all our creative{" "}
                            <strong className="font-extrabold text-info">
                                designs and projects
                            </strong>{" "}
                            in one place!
                        </h4>
                        <DotExpandButton text="Our Works" href="/works" />
                    </div>
                </motion.div>
            ) : path === "/ITEssentials" ||
                path === "/digitalEssentials" ||
                path === "/creativeEssentials" || path === "/whyCode" ? (
                <motion.div
                    variants={variantTitle}
                    viewport={{ once: true }}
                    initial="initial"
                    whileInView="animate" className={`flex flex-col md:flex-row  gap-10 md:gap-5 ${path !== "/whyCode" ? "md:justify-between" : "md:justify-center"}`}>
                    <div className="space-y-10 w-full md:w-3/5">
                        <h4 className="font-EbGaramond text-2xl !leading-snug tracking-wider capitalize sm:text-[32px]">
                            Ready to take your project to the{" "}
                            <strong className="font-extrabold text-info">next level?</strong>{" "}
                            Let’s talk about your goals!
                        </h4>
                        <DotExpandButton text="GET IN TOUCH" href="/contact" />
                    </div>
                    {path !== "/whyCode" && (
                        <div className="space-y-10 w-full md:w-2/5">
                            <h4 className="font-EbGaramond text-2xl !leading-snug tracking-wider capitalize sm:text-[32px]">
                                Take a look at our{" "}
                                <strong className="font-extrabold text-info">
                                    Business essential services
                                </strong>{" "}
                                too!
                            </h4>
                            <DotExpandButton text="Our Works" href="/works" />
                        </div>
                    )}
                </motion.div>
            ) : (
                <motion.div
                    variants={variantTitle}
                    viewport={{ once: true }}
                    initial="initial"
                    whileInView="animate" className="block space-y-12 lg:space-y-16">
                    {path === "/works" ? (
                        <h4 className="font-EbGaramond text-2xl tracking-wider capitalize sm:text-5xl xl:text-6xl">
                            Ready to take your project to the{" "}
                            <strong className="font-extrabold text-info">next level?</strong>{" "}
                            Let’s talk about your goals!
                        </h4>
                    ) : (
                        <h4 className="font-EbGaramond text-2xl tracking-wider capitalize sm:text-5xl xl:text-6xl">
                            We build your{" "}
                            <strong className="font-extrabold text-info">Vision</strong>
                        </h4>
                    )}
                    {(path === "/" || path === "/about" || path === "/proficiency" || path) && (
                        <div className="block space-y-6 lg:space-y-10">
                            {/* <h6 className="font-SourceCodePro tracking-wide text-lg sm:text-2xl xl:text-3xl">
                                Feel the Impact
                            </h6> */}
                            <p className="text-sm sm:text-lg xl:text-xl font-SourceCodePro text-[#868686]">
                                Ready for boost your Business Tech?
                            </p>
                        </div>
                    )}
                    <DotExpandButton text="GET IN TOUCH" href="/contact" />
                </motion.div>
            )}
        </section>
    );
};

export default Contact;

// const caseStudyContact = [
//     {
//         title1: "Ready to take your project to the",
//         title2: "next level?",
//         title3: "Let’s talk about your goals!",
//         btn: "GET IN TOUCH",
//         href: "/contact",
//     },
//     {
//         title1: "See all our creative",
//         title2: "designs and projects",
//         title3: "in one place!",
//         btn: "Our Works",
//         href: "/works",
//     },
// ];

// const essentialsContact = [
//     {
//         title1: "",
//         title2: "",
//         title3: "",
//         btn: "",
//     },
//     {
//         title1: "",
//         title2: "",
//         title3: "",
//         href: "",
//     },
// ];
