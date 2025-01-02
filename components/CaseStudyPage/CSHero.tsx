import { caseStudyList } from "@/libs/data";
import Image from "next/image";
import React from "react";

const CSHero = () => {
    return (
        <section className="block w-full h-full space-y-28">
            <div className="relative overflow-hidden w-full h-[35vh] md:h-[65vh] xl:h-[90vh]">
                <Image
                    fill
                    alt="bg image"
                    quality={100}
                    title="background image"
                    src={"/CSHeroBg.png"}
                    className="object-contain xl:object-cover object-center"
                />
            </div>
            <div className="p-10 sm:px-20 xl:px-64 sm:pb-16 xl:pb-28 block space-y-10">
                <h4 className="font-EbGaramond font-bold tracking-wider text-4xl md:text-5xl xl:text-6xl text-[#464959]">
                    VBCC Instruments
                </h4>
                <p className="font-SourceCodePro font-medium !leading-tight text-base md:text-lg xl:text-xl">
                    A Website revamp to explore International Market and improve
                    Conversion Optimization (CRO).
                </p>
                <div className="flex flex-col space-y-4 md:flex-row md:gap-10 gap-6">
                    <div className="relative overflow-hidden w-full md:w-3/5 h-64 md:h-80 xl:h-96">
                        <Image
                            fill
                            alt="bg image"
                            quality={100}
                            title="background image"
                            src={"/CS-1.png"}
                            className="object-contain xl:object-cover object-center"
                        />
                    </div>
                    <div className="w-full md:w-2/5 space-y-6 overflow-y-scroll no_scrollbar max-h-96">
                        {caseStudyList.map((item, index) => (
                            <div key={index} className="space-y-4">
                                <h5 className="relative ml-2 font-EbGaramond font-bold tracking-wider text-xl md:text-2xl p-1 xl:text-3xl before:absolute before:top-0.5 before:-left-2 before:w-2 before:h-full text-[#464959] before:bg-[#20427D] before:rounded-full">
                                    {item.title}
                                </h5>
                                <ul className="list-disc  font-SourceCodePro font-medium text-base md:text-lg xl:text-xl pl-10 pr-4 py-3.5 mr-2 bg-secondary">
                                    {item.lists.map((list, idx) => (
                                        <li key={idx}>{list}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CSHero;
