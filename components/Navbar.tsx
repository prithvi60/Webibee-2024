"use client";
import { navLinks } from "@/libs/data";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import MobileNav from "./MobileNav";
import CalendlyLink from "./CalendlyButton";
const NavBar = () => {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  // w-full backdrop-blur-xl overflow-hidden sticky top-0 left-0 right-0 z-50 bg-white/80 shadow-md
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const hasLoaded = sessionStorage.getItem('hasLoaded');
    if (!hasLoaded) {
      const timeout = setTimeout(() => {
        setIsLoading(false);
        // sessionStorage.setItem('hasLoaded', 'true');
      }, 1000);
      return () => clearTimeout(timeout);
    } else {
      setIsLoading(false);
    }
  }, []);
  if (isLoading) {
    return null;
  }
  return (
    <header className="px-5 py-4 md:px-8 xl:px-12 ">
      <nav className="flex justify-between w-full items-center font-EbGaramond">
        <Link
          title="Go to Home"
          href={"/"}
          className="size-14 sm:size-20 overflow-hidden relative"
        >
          <Image
            title="Webibee Logo - Business Tech for Small Medium Enterprises across the globe"
            fill
            alt="logo"
            src={
              "/webibeepurplelogo.png"
            }
            className="object-contain object-center"
          />
        </Link>
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link, idx) => (
            <li
              key={idx}
              className={`tracking-wide font-bold hover:text-info/80 relative text-base md:text-xl xl:text-2xl hover:decoration-dashed hover:transition-colors hover:duration-300 hover:ease-in-out ${link.title == "Talk to an Expert →" &&
                "capitalize font-bold text-info  hover:animate-pulse"
                }`}
            >
              <Link title={link.title} href={`${link.href}`}>{link.title}</Link>
            </li>
          ))}
          <li>
            <CalendlyLink />
          </li>
        </ul>
        {/* Mobile View */}
        <button
          onClick={() => setOpen(true)}
          className="absolute flex md:hidden right-8"
        >
          <FaBarsStaggered size={24} className="" />
        </button>
        <MobileNav open={open} setOpen={setOpen} path={path} />
      </nav>
    </header>
  );
};

export default NavBar;
