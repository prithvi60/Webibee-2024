"use client";
import Link from "next/link";
import React from "react";
// import { FaSquareFacebook,FaSquareXTwitter,FaSquareInstagram,FaSquareWhatsapp, FaLinkedinIn } from "react-icons/fa6";
import { FaLinkedin, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Navlink from "./Navlinks";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black pt-7 md:pt-12 pb-6 ">
      <div className="flex flex-col justify-center items-center gap-8">
        <div className="flex justify-center items-center gap-5 cursor-pointer">
          <Link
            target="_blank"
            title="linkedIn"
            href={"https://www.linkedin.com/in/prithvi-n/"}
          >
            <FaLinkedinIn className="h-6 md:h-8 w-6 md:w-8 text-default rounded-md hover:opacity-70 hover:animate-pulse hover:text-default/60" />
          </Link>
          <Link
            target="_blank"
            title="instagram"
            href={"https://www.instagram.com/prithvi_bytes/?hl=en"}
          >
            <FaInstagram className="h-6 md:h-8 w-6 md:w-8 text-default rounded-md hover:opacity-70 hover:animate-pulse hover:text-default/60" />
          </Link>
        </div>
        <Navlink />
        <div className="text-default flex flex-col md:flex-row items-center justify-center gap-2.5 md:gap-10 font-normal">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="relative h-8 w-8 animate-pulse ">
              <Image
                src={"https://ik.imagekit.io/webibee/Agency/brain-logo.svg"}
                alt="Webibee logo"
                fill
                title="Webibee logo"
                aria-label="Webibee logo"
                className="absolute object-contain object-center"
              />
            </div>
            <span className="font-semibold text-2xl animate-pulse font-Caveat capitalize">
              Webibee
            </span>
          </div>
          <span className="font-Merri">
            &copy;{`Copyright ${new Date().getFullYear()}`} - All rights
            reserved
          </span>{" "}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
