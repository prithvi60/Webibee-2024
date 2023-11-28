"use client";
import { Navlinks } from "@/libs/data";
import { Link } from "react-scroll";

export default function Navlink() {
  return (
    <div className="flex flex-wrap gap-5 justify-center items-center text-white">
      {Navlinks.map((link, idx) => (
        <Link key={idx} to={link.title} spy={true} smooth={true} duration={500}>
          <h4 className="text-base md:text-lg hover:text-primary cursor-pointer">
            {link.title}
          </h4>
        </Link>
      ))}
    </div>
  );
}
