"use client";
import { faq } from "@/libs/data";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Image from "next/image";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { motion } from "framer-motion"
import { variant1, variant2 } from "@/libs/Variants";

const FAQ = () => {
    const itemClasses = {
        base: "w-full overflow-hidden",
        heading: "p-2 md:p-5 data-[open=true]:bg-gradient-to-r from-[#FFF3B3] to-[#FFD700]",
        title:
            "font-SourceCodePro text-lg md:text-xl text-default focus-within:outline-none focus-within:border-none focus-within:ring-0",
        trigger: "h-auto lg:h-10",
        indicator: "text-xl md:text-2xl text-default",
        content:
            "p-4 md:p-5 font-SourceCodePro text-base md:text-lg text-default font-medium",
    };
    return (
        <section className="space-y-10 overflow-visible min-h-screen p-10 sm:px-20 xl:px-64 sm:py-16 xl:py-28 flex flex-col md:flex-row justify-between md:gap-16">
            <motion.div
                variants={variant1}
                viewport={{ once: true }}
                initial="initial"
                whileInView="animate" className="w-full md:w-1/2 space-y-6 md:sticky md:top-2 h-full">
                <div className="block space-y-2 ">
                    <h3 className="block tracking-wider font-EbGaramond text-center md:text-start text-4xl md:text-5xl text-default font-medium">
                        FAQ
                    </h3>
                    <p className="font-SourceCodePro text-sm md:text-base font-light text-justify">At Webibee, we craft intuitive, user-centered designs that blend creativity with functionality. Our focus on quality ensures precision, innovation, and solutions that exceed client expectations.</p>
                </div>
                <div className="relative w-64 h-64 md:w-full md:h-80">
                    <Image
                        alt="illustration"
                        src={"https://ik.imagekit.io/webibee/Webibee/illustration-2.svg?updatedAt=1735894417887"}
                        fill
                        className="object-contain object-center"
                    />
                </div>
            </motion.div>

            <motion.div
                variants={variant2}
                viewport={{ once: true }}
                initial="initial"
                whileInView="animate" className="w-full md:w-1/2 overflow-y-auto space-y-4">
                <p className="text-xs p-2 md:p-5 md:text-sm font-SourceCodePro font-normal">Based on the business focus and customer needs, here's a recommended order for the FAQs, keeping it concise with the most essential questions:</p>
                <Accordion variant="light" itemClasses={itemClasses} defaultExpandedKeys={["0"]}>
                    {faq.map((item, idx) => (
                        <AccordionItem
                            key={`${idx}`}
                            aria-label="Accordion 1"
                            indicator={({ isOpen }) =>
                                isOpen ? (
                                    <AiOutlineMinus className="h-5 w-5 text-default rotate-90" />
                                ) : (
                                    <AiOutlinePlus className="h-5 w-5 text-default" />
                                )
                            }
                            title={item.title}
                        >
                            <div
                                className="font-medium flex justify-between items-center"
                            >
                                <p className="font-SourceCodePro tracking-wider font-medium !leading-7 text-sm md:text-base" dangerouslySetInnerHTML={{ __html: item.desc }} />
                            </div>
                        </AccordionItem>
                    ))}
                </Accordion>
            </motion.div>
        </section>
    )
}

export default FAQ
