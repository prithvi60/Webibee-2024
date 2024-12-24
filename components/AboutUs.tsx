import Image from "next/image";
import React from "react";

const AboutUs = () => {
    return (
        <section className="w-full">
            <div className="flex flex-col md:flex-row justify-between items-center gap-14 md:gap-5 overflow-hidden md:pb-28 p-10 sm:px-20 xl:px-64 sm:pt-16 xl:pt-28 font-SourceCodePro">
                <div className="relative basis-full md:basis-3/5 pb-20 md:pb-0">
                    <p className="font-normal text-base sm:text-lg xl:text-xl !leading-10">
                        At Webibee, we empower small and medium-sized enterprises (SMEs) by
                        providing essential Business Tech that help them thrive in the
                        modern business landscape. Our mission is to{" "}
                        <span className="font-extrabold italic tracking-wide">
                            deliver tailored, cutting-edge technologies and compelling digital
                            experiences
                        </span>
                        that transform how businesses operate, engage with customers, and
                        scale effectively.
                    </p>
                    <div className="absolute -bottom-20 md:-bottom-60 left-0 h-64 w-full md:h-80">
                        <Image
                            alt=""
                            src={"/bg svg.svg"}
                            fill
                            className="object-contain object-center"
                        />
                    </div>
                </div>
                <div className="relative w-64 h-64 md:w-full md:h-80 md:basis-2/5">
                    <Image
                        alt=""
                        src={"/illustration-1.svg"}
                        fill
                        className="object-contain object-center"
                    />
                </div>
            </div>
            <div className="relative bg-secondary">
                <div className="flex flex-col-reverse md:flex-row md:items-start justify-between items-center gap-14 md:gap-16 p-10 sm:px-20 xl:px-64 sm:py-16 xl:py-28">
                    <div className="w-full md:w-1/2">
                        <div className="sticky top-20">
                            <video
                                src="/sample.mp4"
                                controls
                                muted
                                className="rounded-md"
                            ></video>
                        </div>
                    </div>
                    <p className="font-normal text-base sm:text-lg xl:text-xl basis-full md:basis-1/2 !leading-10">
                        Webibee began with a shared desire to make complex technology
                        accessible to businesses of all sizes. With a focus on simplicity,
                        innovation, and quality, we started as a small team working with SMEs,
                        helping them digitize and streamline operations. Over the years, we've
                        built a reputation for delivering high-quality web development, custom
                        SaaS solutions, and digital marketing that drive results.
                        <br />
                        Our journey began by recognizing the challenges entrepreneurs face
                        when navigating the fast-changing tech landscape. We set out to create
                        affordable, efficient, and scalable solutions that help businesses not
                        only survive but thrive. Whether you’re looking to build your first
                        website, optimize processes, or scale rapidly, Webibee offers the
                        perfect blend of technology, creativity, and strategic insights to
                        turn your ideas into reality
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
