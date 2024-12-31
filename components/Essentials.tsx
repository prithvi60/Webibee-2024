import Image from "next/image";
import React from "react";

const Essentials = ({ data, title }: { data: any; title: string }) => {
    return (
        <section className="md:pb-28 p-10 sm:px-20 xl:px-64 sm:pt-16 xl:pt-28 space-y-20">
            <h3 className="font-EbGaramond font-medium text-5xl w-full sm:text-7xl xl:text-9xl tracking-wide !leading-tight text-center">
                <strong className="font-extrabold text-info">{title}</strong>Essentials
            </h3>
            <div className="grid grid-cols-1 place-items-center place-content-center sm:grid-cols-2 xl:grid-cols-3 gap-20 lg:gap-14">
                {data.map((list: any, idx: any) => (
                    <div
                        key={idx}
                        className="p-8 max-w-96 lg:max-w-full hover:scale-110 h-96 transition-all transform duration-500 ease-in-out space-y-5 shadow-xl rounded-md shadow-info/50"
                    >
                        <div className="relative size-16">
                            <Image alt="icon" fill src={list.img} />
                        </div>
                        <h5 className="font-EbGaramond tracking-wider font-semibold text-lg sm:text-xl lg:text-2xl">
                            {list.title}
                        </h5>
                        <p className="font-SourceCodePro !leading-snug text-sm lg:text-base">
                            {list.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Essentials;
