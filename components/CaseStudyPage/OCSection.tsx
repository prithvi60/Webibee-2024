import { ObjectiveLists } from "@/libs/data";
import React from "react";

const OCSection = () => {
    return (
        <section className="p-10 space-y-6 flex flex-col md:flex-row justify-between items-center sm:px-20 xl:px-64 gap-10 md:gap-5 xl:gap-10 sm:py-16 xl:py-28">
            <h2 className="font-EbGaramond font-bold text-[#464959] text-4xl tracking-wider md:text-6xl xl:text-8xl basis-full md:basis-1/2 xl:basis-1/4">
                Objective & Challenges
            </h2>
            <div className="basis-full md:basis-1/2 xl:basis-3/4 space-y-6">
                {ObjectiveLists.map((item, index) => (
                    <div key={index} className="space-y-2.5">
                        <h4 className="font-EbGaramond font-bold tracking-wider text-xl md:text-2xl p-1 xl:text-3xl text-[#464959]">
                            {item.title}
                        </h4>
                        <p className="font-SourceCodePro text-base md:text-lg xl:text-xl !leading-snug">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OCSection;
