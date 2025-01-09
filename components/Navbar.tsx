"use client";
import { navLinks } from "@/libs/data";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import MobileNav from "./MobileNav";
const NavBar = () => {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  // w-full backdrop-blur-xl overflow-hidden sticky top-0 left-0 right-0 z-50 bg-white/80 shadow-md
  return (
    <header className="px-5 py-4 md:px-8 xl:px-12 ">
      <nav className="flex justify-between w-full items-center font-EbGaramond">
        <Link href={"/"} className="size-14 sm:size-20 overflow-hidden relative">
          <Image
            fill
            alt="logo"
            src={"https://ik.imagekit.io/webibee/Webibee/webibeepurplelogo.png?updatedAt=1735897013322"}
            className="object-contain object-center"
          />
        </Link>
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link, idx) => (
            <li
              key={idx}
              className={` ${(link.href === path && link.href !== "/contact") && "underline underline-offset-[14px]"} tracking-wide font-bold hover:text-info/80 relative text-base md:text-xl xl:text-2xl hover:decoration-dashed hover:transition-colors hover:duration-300 hover:ease-in-out" ${link.title =="Talk to an Expert →" && "capitalize font-bold text-info  hover:animate-pulse"}`}
            >
              <Link href={`${link.href}`}>{link.title}</Link>
            </li>
          ))}
        </ul>
        {/* Mobile View */}
        <button
          onClick={() => setOpen(true)}
          className="absolute flex md:hidden right-8"
        >
          <FaBarsStaggered size={30} className="" />
        </button>
        <MobileNav open={open} setOpen={setOpen} path={path} />
      </nav>
    </header>
  );
};

export default NavBar;
