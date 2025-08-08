"use client";
import { motion } from "framer-motion";
import { variant1 } from "@/libs/Variants";
import Image from "next/image";

type DataType = {
    mainTitle: string;
    highlight: string;
    about: string;
    img: string;
    alt: string;
};

const AboutPage = ({
    data,
    reverse,
}: {
    data: DataType;
    reverse?: boolean;
}) => {
    return (
        <section
            className={`p-10 sm:px-20 xl:px-64 sm:py-16 xl:py-28 flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"
                } gap-10 md:gap-16 lg:justify-between`}
        >
            <div className="w-full lg:w-1/2 h-fit-content">
                <motion.div
                    variants={variant1}
                    viewport={{ once: true }}
                    initial="initial"
                    whileInView="animate"
                    className="lg:sticky lg:top-5 space-y-12"
                >
                    <h4 className={`font-EbGaramond text-4xl xl:text-6xl tracking-wider font-medium text-center ${reverse ? "md:text-end" : "md:text-start"}`}>
                        {data.mainTitle}{" "}
                        <strong className="text-info">{data.highlight}</strong>
                    </h4>
                    <p className="text-lg text-left md:text-start sm:text-xl lg:text-2xl font-SourceCodePro">
                        {data.about}
                    </p>
                </motion.div>
            </div>
            <div className="w-full lg:w-1/2">
                <Image
                    width={450}
                    height={450}
                    loading="lazy"
                    alt={data.alt}
                    className="object-contain object-center w-full h-fit rounded-md"
                    src={data.img}
                />
            </div>
        </section>
    );
};

export default AboutPage;
