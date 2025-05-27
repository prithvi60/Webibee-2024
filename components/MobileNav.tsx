"use client";
import { navLinks } from "@/libs/data";
import Image from "next/image";
import Link from "next/link";
import { RxCross1 } from "react-icons/rx";

const MobileNav = ({
    open,
    setOpen,
    path,
}: {
    open: boolean;
    setOpen: Function;
    path: any;
}) => {
    return (
        <section
            className={`fixed top-0 transition-all duration-500 ease-in-out ${open ? "right-0 opacity-100" : "right-[-100%] opacity-0"
                } z-[9999] bg-white backdrop-blur-md h-dvh w-full flex flex-col gap-7 p-5 md:gap-3 font-Montserrat font-medium`}
        >
            <div className="flex justify-between items-center">
                <Link
                    href={"/"}
                    onClick={() => {
                        setOpen(false);
                    }}
                    className="relative size-14"
                >
                    <Image
                        fill
                        src={"https://cdn.webibee.com/Webibee/webibeepurplelogo.png"}
                        alt="Logo"
                        className="object-contain object-center"
                    />
                </Link>
                <div className="flex items-center gap-7 pr-3">
                    <RxCross1
                        className={`h-7 w-7 text-black cursor-pointer hover:text-black/50`}
                        onClick={() => {
                            setOpen(false);
                        }}
                    />
                </div>
            </div>
            <div className="flex justify-center md:justify-between items-center p-5 md:px-[60px] md:py-[24px]">
                <ul className="w-full space-y-4 md:space-y-6 lg:space-y-10">
                    {navLinks.map((link, idx) => (
                        <li
                            key={idx}
                            className={`capitalize text-2xl ${link.href === path ? "font-bold underline underline-offset-8" : "opacity-50"
                                }`}
                        >
                            <Link
                                passHref
                                className="flex items-center gap-2 group"
                                href={link.href}
                                onClick={() => setOpen(!open)}
                            >
                                <span className="text-black rounded-lg">{link.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default MobileNav;
