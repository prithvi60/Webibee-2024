import { howItWorks, resultLists } from "@/libs/data";
import Image from "next/image";
import React from "react";
import HowItWorks from "../whyCode/HorizontalScrollCarousel";

const Result = () => {
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
            <HowItWorks data={resultLists} title="Result" styles={"font-EbGaramond font-bold tracking-wider text-4xl md:text-5xl xl:text-6xl text-[#464959]"} />
            <div className="relative overflow-hidden w-full h-40 md:h-96 xl:h-[28rem]">
                <Image
                    fill
                    alt="client website image"
                    className="object-contain object-center"
                    src={"/CS -2.png"}
                />
            </div>
            <div className="bg-[#2A3E5E26] flex !mt-32 flex-col lg:flex-row gap-10 p-8">
                <div className="basis-full md:basis-2/5">
                    <div className="relative overflow-hidden w-60 sm:w-80 mx-auto lg:w-full h-60 sm:h-96">
                        <Image
                            fill
                            alt="client image"
                            className="object-cover object-center"
                            src={"/CS page ceo.png"}
                        />
                        <div className="font-SourceCodePro bg-[#20427D66] backdrop-blur-md font-medium w-full text-white absolute bottom-0 left-0 px-6 space-y-3 py-3">
                            <h5 className="text-lg md:text-xl">Naveen V</h5>
                            <p className="text-xs md:text-sm">Founder & CEO, VBCC Instruments</p>
                        </div>
                    </div>
                </div>
                <p className="font-SourceCodePro text-base md:text-lg !leading-tight text-[#181B30] basis-full md:basis-3/5">
                    Our group of companies faced a big challenge one time before engaging
                    with Webibee, which was improving our online presence. In this light,
                    we sought for some assistance in developing websites that were
                    beautiful to look at and featured that were tailor-made for our
                    requirements as well as technical help and a long-term commitment to
                    cooperate with our SEO and content teams. Not only did{" "}
                    <span className="font-bold">
                        Webibee meet our expectations, but also surpassed them by far.
                    </span>
                    <br />
                    <br />
                    They followed closely to the design guidelines we provided giving
                    useful suggestions on how to improve the functionality of our site.
                    For now, we have reached the point where these websites have an
                    attractive look due to timely delivery of the project. This was
                    facilitated by their integration into my team members. Also, it is
                    worth mentioning that{" "}
                    <span className="font-bold">
                        they are knowledgeable about various aspects of online presence
                        management.
                    </span>
                    <br />
                    <br />
                    I highly recommend Prithvi together with his team at Webibee
                    because they do very good work. To put it simply, they didn’t just
                    develop websites; instead{" "}
                    <span className="font-bold">
                        they optimized them leading to extremely high scores in Google’s
                        website optimization metrics.
                    </span>{" "}
                    On top of that, during the revision process, they always supported us
                    until we were all satisfied with their work. I believe that Webibee is
                    a reliable partner for current and future projects since they make me
                    feel confident enough to tackle even bigger assignments going
                    forward.”
                </p>
            </div>
        </section>
    );
};

export default Result;
