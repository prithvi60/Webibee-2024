"use client";
import { Footerlinks } from "@/libs/data";
import { Link } from "react-scroll";

export default function Navlink() {
  return (
    <div className="flex flex-wrap gap-3.5 md:gap-5 justify-center items-center text-default font-Lato">
      {Footerlinks.map((link, idx) => (
        <Link
          key={idx}
          title={link.title}
          to={link.href}
          href={`#${link.href}`}
          spy={true}
          offset={-50}
          smooth={true}
          duration={500}
        >
          <h2 className="text-base md:text-lg hover:text-default/50 hover:animate-pulse cursor-pointer">
            {link.title}
          </h2>
        </Link>
      ))}
    </div>
  );
}
