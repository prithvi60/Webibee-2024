"use client";
import { motion } from "framer-motion";
import { variant1 } from "@/libs/Variants";
import Image from "next/image";

type DataType = {
    title: React.ReactNode;
    desc: string;
    img: string;
};

const AboutPage = ({
    data,
    reverse,
    category,
    location,
}: {
    data: DataType;
    reverse?: boolean;
    category: string;
    location?: string | null;
}) => {
    const country = `in ${location}`;

    const renderedDesc = data?.desc
        .replace("{{Country}}", location ? country : "")
        .trim();
    return (
        <section
            className={`p-10 sm:px-20 xl:px-64 sm:py-16 xl:py-28 flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"
                } gap-10 md:gap-16 lg:justify-between`}
        >
            <div className="w-full lg:w-1/2 h-fit-content text-pretty">
                <motion.div
                    variants={variant1}
                    viewport={{ once: true }}
                    initial="initial"
                    whileInView="animate"
                    className="lg:sticky lg:top-5 space-y-12"
                >
                    <h4
                        className={`font-EbGaramond text-4xl xl:text-6xl tracking-wider font-medium text-center ${reverse ? "md:text-end" : "md:text-start"}`}
                    >
                        {data.title}
                    </h4>
                    <p className="text-lg leading-relaxed sm:text-xl lg:text-2xl font-SourceCodePro text-justify hyphens-auto">
                        {renderedDesc}
                    </p>
                </motion.div>
            </div>
            <div className="w-full lg:w-1/2">
                <Image
                    width={450}
                    height={450}
                    loading="lazy"
                    alt={category + " image"}
                    className="object-contain object-center w-full h-fit rounded-md"
                    src={data.img}
                />
            </div>
        </section>
    );
};

export default AboutPage;
