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
  return (
    <header className="p-5 md:px-8 xl:px-12 md:py-8">
      <nav className="flex justify-between items-center font-EbGaramond">
        <Link href={"/"} className="size-14 sm:size-20 overflow-hidden relative">
          <Image
            fill
            alt="logo"
            src={"/webibee logo.svg"}
            className="object-contain object-center"
          />
        </Link>
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link, idx) => (
            <li
              key={idx}
              className={` ${(link.href === path && link.href !== "/contact") && "underline underline-offset-[14px]"} tracking-wide font-bold hover:text-info/80 relative text-base md:text-xl xl:text-2xl hover:decoration-dashed hover:transition-colors hover:duration-300 hover:ease-in-out" ${link.title === "Contact Us" && "after:absolute after:-bottom-2 after:left-0 after:w-full after:h-1 after:bg-[#2D1C55] after:hover:bg-info after:transition-width after:duration-300 after:ease-in-out"}`}
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
