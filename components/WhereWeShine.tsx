import { howItWorks, shine } from "@/libs/data";
import React from "react";

const WhereWeShine = () => {
    return (
        <section className="md:pb-28 p-10 sm:px-20 xl:px-64 sm:pt-16 xl:pt-28 space-y-20">
            <h5 className="font-EbGaramond text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold !leading-tight text-[#1B1B1CCC]">
                Where we SHINE?
            </h5>
            <div className="flex flex-col overflow-x-scroll md:flex-row justify-between items-center gap-10">
                {shine.map((work, index) => (
                    <div key={index} className="block space-y-8 min-w-[480px] pb-6">
                        <div className="space-y-4">
                            <h4 className="font-EbGaramond font-bold tracking-wider md:text-3xl sm:text-2xl text-xl text-[#1B1B1CCC] xl:text-4xl">
                                {work.title}
                            </h4>
                            <p className="font-SourceCodePro text-base sm:text-lg xl:text-xl !leading-tight">
                                {work.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhereWeShine;
