"use client";
import { footerNavLinks } from "@/libs/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";

const Footer = () => {
  const path = usePathname();
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full p-10 sm:px-20 xl:px-64 sm:py-16 xl:py-28 block space-y-10 md:space-y-20 font-EbGaramond text-[#868686] tracking-wide text-lg md:text-xl xl:text-2xl">
      <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start sm:justify-between gap-6 sm:gap-0">
        <div className="block space-y-3 text-center sm:text-start">
          <h5 className="text-info font-bold font-EbGaramond">Webibee</h5>
          <a href="mailto:support@webibee.com">support@webibee.com</a>
        </div>
        <ul className="flex items-center gap-10">
          {path !== "/lead-generation-engine" && (
            <li className="hover:animate-pulse">
              <Link
                href={"https://www.upwork.com/freelancers/~01d7976a7b95d87d71"}
                className="text-xl md:text-2xl xl:text-3xl text-[#323031]"
              >
                <FaUpwork />
              </Link>
            </li>
          )}
          <li className="hover:animate-pulse">
            <Link
              href={"https://www.linkedin.com/in/prithvi-n/"}
              className="text-xl md:text-2xl xl:text-3xl text-[#323031]"
            >
              <FaLinkedinIn />
            </Link>
          </li>
          {path !== "/lead-generation-engine" && (
            <li className="hover:animate-pulse">
              <Link
                href={"https://www.instagram.com/prith.bytes"}
                className="text-xl md:text-2xl xl:text-3xl text-[#323031]"
              >
                <FaInstagram />
              </Link>
            </li>
          )}
        </ul>
      </div>
      <div className="flex justify-center md:justify-start text-center md:text-start gap-10">
        <ul className="block space-y-3">
          {footerNavLinks.slice(0, 4).map((link, idx) => (
            <li
              key={idx}
              className="hover:text-info transition-colors duration-300 ease-in-out"
            >
              <Link href={link.href}>{link.title}</Link>
            </li>
          ))}
        </ul>
        <ul className="block space-y-3">
          {footerNavLinks.slice(4, 8).map((link, idx) => (
            <li
              key={idx}
              className="hover:text-info transition-colors duration-300 ease-in-out"
            >
              <Link href={link.href}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full mx-auto text-center">
        <p>
          {`© ${currentYear} All rights reserved by`}{" "}
          <strong className="italic tracking-wider text-info">Webibee</strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
