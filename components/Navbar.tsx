"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [hideNav, setHideNav] = useState(true);
  const [percent, setPercent] = useState<number>(0);

  const handleScroll = () => {
    const ele = document.body;
    const scrollPosition = window.scrollY; // => scroll position
    let percentage =
      ((scrollPosition + window.innerHeight) / ele.clientHeight) * 100;
    setPercent(Math.trunc(percentage));
    // console.log(Math.trunc(percentage));
  };

  // Scroll based color change side effect

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [percent]);

  return (
    <header className="p-5 md:px-8 xl:px-12 md:py-10">
      <nav className="flex justify-between items-center font-EbGaramond">
        <div className="size-20 overflow-hidden relative">
          <Image fill alt="logo" src={"/webibee logo.svg"} className="object-contain object-center" />
        </div>
        <ul>
          <li className="underline underline-offset-8 tracking-wide font-bold hover:text-info/80  text-lg md:text-xl xl:text-2xl hover:decoration-dashed hover:transition-colors hover:duration-300 hover:ease-in-out">
            <Link href={""}>Ready to ignite?</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
