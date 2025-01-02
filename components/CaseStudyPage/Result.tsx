import Image from "next/image";
import React from "react";
import HowItWorks from "../whyCode/HorizontalScrollCarousel";

interface ResultProps {
    results: any;
    testimonialImg?: string;
    testimonialName?: string;
    testimonialPosition?: string;
    testimonials?: any;
    data: any;
}

const Result: React.FC<ResultProps> = ({
    results,
    data,
    testimonialImg,
    testimonialName,
    testimonialPosition,
    testimonials,
}) => {
    return (
        <section className="p-10 space-y-6 sm:px-20 xl:px-64 sm:py-16 xl:py-28">
            {/* <h4 className="font-EbGaramond font-bold tracking-wider text-4xl md:text-5xl xl:text-6xl text-[#464959]">
                Result
            </h4> */}
            {/* <div className='flex items-center gap-8 md:gap-8 w-full overflow-x-scroll'>
                {resultLists.map((card, idx) => (
                    <div key={idx} className="block space-y-8 min-w-72 md:min-w-[480px] pb-5">
                        <div className="size-24 md:size-48 relative mx-auto">
                            <Image
                                alt="icon"
                                src={card.img}
                                fill
                                className="object-contain object-center"
                            />
                        </div>
                        <div className="space-y-4">
                            <h4 className="font-EbGaramond text-center md:text-start font-bold tracking-wider md:text-3xl sm:text-2xl text-xl text-[#1B1B1CCC] xl:text-4xl">
                                {card.title}
                            </h4>
                            <p className="font-SourceCodePro text-justify md:text-start text-base sm:text-lg xl:text-xl !leading-tight">
                                {card.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div> */}
            <HowItWorks
                data={results}
                title="Result"
                styles={
                    "font-EbGaramond font-bold tracking-wider text-4xl md:text-5xl xl:text-6xl text-info"
                }
            />
            <div className="space-y-6 block">
                {data.map((img: { img: string; alt: string }, idx: number) => (
                    <div
                        className="relative overflow-hidden w-full h-40 md:h-96 xl:h-[28rem]"
                        key={idx}
                    >
                        <Image
                            fill
                            alt={img.alt}
                            className="object-contain object-center"
                            src={img.img}
                        />
                    </div>
                ))}
            </div>
            {testimonialImg &&
                testimonialName &&
                testimonialPosition &&
                testimonials && (
                    <div className="bg-[#FFD70026] flex !mt-32 flex-col lg:flex-row gap-10 p-8">
                        <div className="basis-full md:basis-2/5">
                            <div className="relative overflow-hidden w-60 sm:w-80 mx-auto lg:w-full h-60 sm:h-96">
                                <Image
                                    fill
                                    alt="client image"
                                    className="object-cover object-center bg-[#ffe44c]"
                                    src={testimonialImg}
                                />
                                <div className="font-SourceCodePro bg-[#88720166] backdrop-blur-md font-medium w-full text-white absolute bottom-0 left-0 px-6 space-y-3 py-3">
                                    <h5 className="text-lg md:text-xl">{testimonialName}</h5>
                                    <p className="text-xs md:text-sm">{testimonialPosition}</p>
                                </div>
                            </div>
                        </div>
                        <p
                            className="font-SourceCodePro text-base md:text-lg !leading-tight text-[#181B30] basis-full md:basis-3/5"
                            dangerouslySetInnerHTML={{ __html: testimonials }}
                        />
                    </div>
                )}
        </section>
    );
};

export default Result;
