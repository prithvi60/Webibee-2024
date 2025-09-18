import { LGEMarketingNeeds } from "@/libs/data";
import React from "react";

const AllMarketingNeeds = () => {
    return (
        <section
            className={`w-full p-10 sm:px-20 sm:py-16 xl:py-28 space-y-4 block md:space-y-7 text-center`}
        >
            <h2 className="font-EbGaramond font-medium capitalize text-5xl sm:text-6xl xl:text-7xl">
                We cover all your marketing needs
            </h2>
            <div className="grid gap-6 lg:grid-cols-3 xl:grid-cols-4 pt-10 md:pt-16">
                {LGEMarketingNeeds.map((item, index) => (
                    <div
                        className="border border-[#E5E5EA] rounded-3xl shadow-sm overflow-hidden last:lg:col-span-3 last:xl:col-span-1"
                        key={index}
                    >
                        <h3 className="font-EbGaramond font-semibold text-center px-3 pt-4 pb-8 md:pt-6 md:pb-12 bg-[#FFD700] text-xl sm:text-2xl xl:text-[28px]">
                            {item.title}
                        </h3>
                        <p className="font-SourceCodePro flex flex-col items-center justify-center bg-primary -mt-5 rounded-t-3xl text-center p-4 md:p-6 font-normal text-base sm:text-lg !leading-normal">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AllMarketingNeeds;
