import Link from "next/link";
import React from "react";
import { FiArrowRight } from "react-icons/fi";

const DotExpandButton = ({ text, href }: { text: string, href: string }) => {
    return (
        <section className="grid place-items-center">
            <Link href={href}>
                <button className="group flex h-10 items-center gap-2 rounded-md pl-8 pr-8 transition-all duration-300 ease-in-out hover:bg-info/80 uppercase hover:pl-2 py-8 font-SourceCodePro text-base border-2 sm:text-lg xl:text-xl hover:text-white active:bg-neutral-700">
                    <span className="rounded-full bg-info/80 p-1 text-sm transition-colors duration-300 group-hover:bg-white">
                        <FiArrowRight className="-translate-x-[200%] text-[0px] transition-all duration-300 group-hover:translate-x-0 group-hover:text-lg group-hover:text-black group-active:-rotate-45" />
                    </span>
                    <span>{text}</span>
                </button>
            </Link>
        </section>
    );
};

export default DotExpandButton;