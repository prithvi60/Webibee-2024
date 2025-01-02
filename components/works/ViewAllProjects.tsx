import { allProjectsLists } from "@/libs/data";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const ViewAllProjects = () => {
    return (
        <section className="block space-y-10 md:space-y-20 p-10 sm:px-20 xl:px-64 sm:py-16 xl:py-28">
            <h5 className="font-EbGaramond text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium text-[#1B1B1CCC]">
                View all <span className="font-bold text-info/60">Projects</span>
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-content-center place-items-center gap-10">
                {allProjectsLists.map((list, idx) => (
                    <div
                        key={idx}
                        className="block space-y-8 max-w-72 md:max-w-[480px] pb-5 border-2 border-info shadow-md p-5 rounded-lg"
                    >
                        <div className="size-24 md:size-48 relative mx-auto">
                            <Image
                                alt="icon"
                                src={list.img}
                                fill
                                className="object-contain object-center"
                            />
                        </div>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center font-EbGaramond font-bold tracking-wider text-[#1B1B1CCC]">
                                <h4 className="md:text-3xl sm:text-2xl text-xl truncate w-[15ch]">
                                    {list.title.length > 12
                                        ? `${list.title.substring(0, 12)}...`
                                        : list.title}
                                </h4>
                                <h5 className="md:text-xl text-lg ">{list.year}</h5>
                            </div>
                            <p className="font-SourceCodePro text-justify md:text-start text-base sm:text-lg !leading-normal">
                                {list.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <Marquee autoFill speed={60} pauseOnHover>
                {allProjectsLists.map((list, idx) => (
                    <div key={idx} className="relative mx-4 md:mx-8 overflow-hidden h-24 w-32">
                        <Image alt="logo" src={list.img} fill />
                    </div>
                ))}
            </Marquee>
        </section>
    );
};

export default ViewAllProjects;
