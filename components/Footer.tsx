import Link from "next/link";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full p-10 sm:px-20 xl:px-64 sm:py-16 xl:py-28 block space-y-10 md:space-y-20 font-EbGaramond text-[#868686] tracking-wide text-lg md:text-xl xl:text-2xl">
      <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start sm:justify-between gap-6 sm:gap-0">
        <div className="block space-y-3 text-center sm:text-start">
          <h5>Webibee</h5>
          <a href="mailto:support@webibee.com">support@webibee.com</a>
        </div>
        <ul className="flex items-center gap-5">
          <li className="hover:animate-pulse">
            <Link
              href={"https://www.instagram.com/prithvi_bytes/?hl=en"}
              className="text-xl md:text-2xl xl:text-3xl text-[#323031]"
            >
              <FaLinkedinIn />
            </Link>
          </li>
          <li className="hover:animate-pulse">
            <Link
              href={"https://www.instagram.com/prithvi_bytes/?hl=en"}
              className="text-xl md:text-2xl xl:text-3xl text-[#323031]"
            >
              <FaInstagram />
            </Link>
          </li>
        </ul>
      </div>
      <ul className="flex flex-col sm:flex-row justify-center sm:justify-start items-center gap-2 sm:gap-4">
        <li><Link href={"/"}>Home</Link></li>
        <li><Link href={"/caseStudies"}>CaseStudies</Link></li>
        <li></li>
      </ul>
    </footer>
  );
};

export default Footer;
