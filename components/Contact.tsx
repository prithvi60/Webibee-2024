"use client";
import React from "react";
import DotExpandButton from "./buttons/DotExpandButton";
import { usePathname } from "next/navigation";

const Contact = () => {
    const path = usePathname();
    return (
        <section
            className={`${path === "/contact" ? "hidden" : "block"
                } w-full p-10 sm:px-12 xl:pt-12 xl:pb-6 max-w-5xl mx-auto text-center`}
        >
            <div className="block space-y-12 lg:space-y-16">
                {path === "/works" ? (
                    <h4 className="font-EbGaramond text-2xl tracking-wider capitalize sm:text-5xl  xl:text-6xl">
                        Ready to take your project to the{" "}
                        <strong className="font-extrabold text-info">next level?</strong>{" "}
                        Let’s talk about your goals!
                    </h4>
                ) : (
                    <h4 className="font-EbGaramond text-2xl tracking-wider capitalize sm:text-5xl  xl:text-6xl">
                        Ignite Your{" "}
                        <strong className="font-extrabold text-info">Vision</strong> Today
                    </h4>
                )}

                <div className="block space-y-6 lg:space-y-10">
                    <h6 className="font-SourceCodePro tracking-wide text-lg sm:text-2xl xl:text-3xl">
                        Feel the Impact
                    </h6>
                    <p className="text-sm sm:text-lg xl:text-xl font-SourceCodePro text-[#868686]">
                        Ready to Elevate Your Brand?
                    </p>
                    <DotExpandButton text="GET IN TOUCH" href="/contact" />
                    {/* <button>
                        <Link
                            href={"/contact"}
                            className="uppercase font-SourceCodePro text-base sm:text-lg xl:text-xl py-3 px-6 rounded-md hover:bg-info/80 hover:text-white transition duration-300 ease-in-out border-2"
                        >
                            GET IN TOUCH
                        </Link>
                    </button> */}
                </div>
            </div>
        </section>
    );
};

export default Contact;
