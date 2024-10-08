"use client";
import { Navlinks } from "@/libs/data";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import NavBtn from "./NavBtn";
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
    <Navbar
      // shouldHideOnScroll
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      isBordered
      isBlurred={false}
      maxWidth="full"
      style={
        {
          // opacity: hideNav ? 0 : 1,
          // pointerEvents: hideNav ? "none" : "all",
          // position: hideNav ? "absolute" : "sticky",
          // display:hideNav ? "none" : "block",
        }
      }
      // onScrollPositionChange={(position) => {
      //   // console.log("pos", position);
      //   position > 160 ? setHideNav(false) : setHideNav(true);
      // }}
      classNames={{
        base: [
          `${
            percent >= 0 && percent <= 12
              ? "!bg-transparent shadow-none border-b-0"
              : "bg-primary shadow-md border-b-2 border-warning"
          } fixed top-0 left-0 transform transition duration-700 ease-linear font-Merri py-2 xl:px-8`,
        ],
      }}
      // className={``}
    >
  
      <NavbarContent className="md:hidden z-[1000] !grow-0 !basis-0">
        <NavbarBrand className=" mx-2 animate-drip-expand">
          <div
            className="relative  text-white text-4xl font-Caveat font-bold"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            {/* <Image
              src={"https://ik.imagekit.io/webibee/Agency/brain-logo.svg"}
              alt="Webibee logo"
              title="Webibee logo"
              fill
              aria-label="Webibee logo"
              className="absolute object-contain object-center"
            /> */}
            Webibee
          </div>
          {/* <p className="font-extrabold text-3xl font-logo_header">WEBIBEE</p> */}
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end" className="flex md:hidden">
        <a
                 href={"https://calendly.com/webibee/consultation"}
          aria-current="page"
          className="flex items-center gap-2 text-xs hover:opacity-50 cursor-pointer font-Merri bg-indigo-100 text-green-800 tracking-wider py-3 px-2  rounded-md font-bold z-10 hover:animate-pulse"
        >
  Expert Advice in 15 Minutes
        </a>
        {/* <NavBtn text={"Get Expert Advice in Just 15 Minutes"}/> */}

      </NavbarContent>

      <NavbarContent className="hidden md:flex gap-6" justify="center">
        <NavbarBrand className="space-x-2 animate-drip-expand">
    
          <div className="relative text-5xl font-bold text-white font-Caveat">
          {/* <Image
              src={"https://ik.imagekit.io/webibee/webibeepurplelogo.png?updatedAt=1728135622562"}
              alt="Webibee logo"
              title="Webibee logo"
              fill
              aria-label="Webibee logo"
              className="absolute object-contain object-center"
            /> */}
            <div>
            Webibee
            </div>
          </div>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent
        className="hidden md:flex md:gap-5 lg:gap-10"
        justify="center"
      >
        {Navlinks.map((link, idx) => (
          <NavbarItem key={idx}>
            <Link
              key={idx}
              to={link.href}
              href={`#${link.href}`}
              title={link.title}
              spy={true}
              offset={-30}
              smooth={true}
              duration={500}
              aria-current="page"
              className="text-xl hover:opacity-50 cursor-pointer 
              font-Merri text-default hover:animate-pulse"
            >
              {link.title}
            </Link>
          </NavbarItem>
        ))}
        <NavbarItem>
          <NavBtn text={"Get Expert Advice in Just 15 Minutes"}/>
          {/* <a
            href={"https://calendly.com/webibee/consultation"}
            title="Contact"
       
            aria-current="page"
            className="flex items-center gap-2 text-lg md:text-xl hover:opacity-50 cursor-pointer font-Merri py-1.5 px-2 text-[#31a327] bg-white rounded-lg font-semibold hover:animate-pulse"
          >
       Get Expert Advice in Just 15 Minutes
          </a> */}
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-secondary bg-opacity-90 pt-10">
        {Navlinks.map((link, idx) => (
          <NavbarMenuItem key={`${link}-${idx}`} className="">
            <Button
              as={Link}
              key={idx}
              to={link.href}
              href={`#${link.href}`}
              title={link.title}
              spy={true}
              offset={-50}
              smooth={true}
              duration={500}
              className="w-full p-2 font-Merri font-semibold text-xl bg-primary text-default"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.title}
            </Button>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavBar;
