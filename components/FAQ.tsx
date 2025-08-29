"use client";
import { FaqWestern, FaqIndia } from "@/libs/data";
import { Accordion, AccordionItem } from "@heroui/react";
import Image from "next/image";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { motion } from "framer-motion";
import { variant1, variant2 } from "@/libs/Variants";
import { useEffect, useState } from "react";

const itemClasses = {
    base: "w-full overflow-hidden",
    heading:
        "p-2 md:p-5 data-[open=true]:bg-gradient-to-r from-[#FFF3B3] to-[#FFD700]",
    title:
        "font-SourceCodePro text-lg md:text-xl text-default focus-within:outline-none focus-within:border-none focus-within:ring-0",
    trigger: "h-auto lg:h-10",
    indicator: "text-xl md:text-2xl text-default",
    content:
        "p-4 md:p-5 font-SourceCodePro text-base md:text-lg text-default font-medium",
};

type FAQProps = {
    lists?: { title: string; desc: string }[];
    location?: string | null;
};

const FAQ = ({ lists, location }: FAQProps) => {
    const [isIndia, setIsIndia] = useState(false);
    useEffect(() => {
        // Fetch user's location
        fetch("https://ipapi.co/json/")
            .then((response) => response.json())
            .then((data) => {
                // Check if the country is India
                setIsIndia(data.country === "IN");
            });
    }, []);

    const faq = [
        {
            title: "What does Webibee offer?",
            desc: "We provide a variety of services under IT, Digital, and Creative Essentials that takes of the end to end needs of an SME",
        },
        {
            title: "How much does it cost?",
            desc: isIndia
                ? `Our cost is carefully catered to meet the budget of SMEs and start from <strong class="text-info">₹1Lakh</strong>`
                : `Our cost is carefully catered to meet the budget of SMEs and start from <strong class="text-info">$2500</strong>`,
        },
        {
            title: "What information do you need to prepare an estimate?",
            desc: "We would need a project brief - what business features you are looking for, references if any, and your valuable questions for our initial consultation",
        },
        {
            title: "How can we get started with Webibee?",
            desc: "Please book an initial consultation call to take our collaboration to the next step <a href='/contact' class='tags'>Talk to an Expert</a>",
        },
        {
            title: "Do I own the IP?",
            desc: "Whatever services we offer is totally owned by you and we have an NDA to make sure your business information is kept confidential",
        },
        {
            title: "Is there a refund policy?",
            desc: " We rarely face that but we'll understand your situation and got your back. We guarantee a 50% refund from the Advance payment within 3 weeks of cancellation including our work resources till that period.",
        },
        {
            title: "How long does it usually take for a startup?",
            desc: "We have multiple timeline formats based on your needs <a href='/about/#collaboration' class='tags'>Process</a>",
        },
        {
            title: "Why Webibee?",
            desc: "We are custom software specialists. We can strategies and make solutions that scales your business needs and look great while doing it .",
        },
    ];

    return (
        <section className="space-y-10 overflow-visible min-h-screen p-10 sm:px-20 xl:px-64 sm:py-16 xl:py-28 flex flex-col md:flex-row justify-between md:gap-16">
            <motion.div
                variants={variant1}
                viewport={{ once: true }}
                initial="initial"
                whileInView="animate"
                className="w-full md:w-1/2 space-y-6 md:sticky md:top-2 h-full"
            >
                <div className="block space-y-2 ">
                    <h3 className="block tracking-wider font-EbGaramond text-center md:text-start text-4xl md:text-5xl text-default font-medium mb-8">
                        FAQ
                    </h3>
                    <p className="font-SourceCodePro text-sm md:text-base font-light text-justify">
                        At Webibee, we craft intuitive, user-centered designs that blend
                        creativity with functionality. Our focus on quality ensures
                        precision, innovation, and solutions that exceed client
                        expectations.
                    </p>
                </div>
                <div className="relative w-64 h-64 md:w-full md:h-80">
                    <Image
                        alt="illustration"
                        src={"https://cdn.webibee.com/Webibee/illustration-2.svg"}
                        fill
                        className="object-contain object-center"
                    />
                </div>
            </motion.div>

            <motion.div
                variants={variant2}
                viewport={{ once: true }}
                initial="initial"
                whileInView="animate"
                className="w-full md:w-1/2 overflow-y-auto space-y-4"
            >
                <p className="text-xs p-2 md:p-5 md:text-lg  font-SourceCodePro font-normal mt-4">
                    Need Help? Start Here
                </p>
                <AccordionComponent data={lists ? lists : faq} location={location} />
            </motion.div>
        </section>
    );
};

export default FAQ;

type AccordionComponentProps = {
    data: { title: string; desc: string }[];
    location?: string | null;
};

const AccordionComponent = ({ data, location }: AccordionComponentProps) => {
    // console.log(location);
    return (
        <Accordion
            variant="light"
            itemClasses={itemClasses}
            defaultExpandedKeys={["0"]}
        >
            {data.map((item, idx) => {
                const country = `in ${location}`;
                const renderedTitle = item?.title
                    .replace("{{Country}}", location ? country : "")
                    .trim();
                const renderedDesc = item?.desc
                    .replace("{{Country}}", location ? country : "")
                    .trim();

                return (
                    <AccordionItem
                        key={`${idx}`}
                        aria-label={`Accordion ${idx + 1}`}
                        indicator={({ isOpen }) =>
                            isOpen ? (
                                <AiOutlineMinus className="h-5 w-5 text-default rotate-90" />
                            ) : (
                                <AiOutlinePlus className="h-5 w-5 text-default" />
                            )
                        }
                        title={renderedTitle}
                    >
                        <div className="font-medium flex justify-between items-center">
                            <p
                                className="font-SourceCodePro tracking-wider font-medium !leading-7 text-sm md:text-base"
                                dangerouslySetInnerHTML={{ __html: renderedDesc }}
                            />
                        </div>
                    </AccordionItem>
                );
            })}
        </Accordion>
    );
};
