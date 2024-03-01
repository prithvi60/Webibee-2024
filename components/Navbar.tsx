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
import React from "react";
import { Link } from "react-scroll";
const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [hideNav, setHideNav] = React.useState(true);
  
  return (
    <Navbar
    // shouldHideOnScroll
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      isBordered
      isBlurred
      maxWidth="full"
      style={{ display: hideNav ? "none" : "block" }}
      onScrollPositionChange={(position) =>
        position > 160 ? setHideNav(false) : setHideNav(true)
      }
      className={`transform transition duration-700 ease-linear bg-primary font-Lato border-b-2 border-warning py-2 xl:px-8`}
    >
      <NavbarContent className="md:hidden !flex-grow-0" justify="start">
        {/* <NavbarMenuToggle className="text-primary" /> */}
        <NavbarMenuToggle
          className="text-default"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="md:hidden z-[1000] !grow-0 !basis-0">
        <NavbarBrand className=" mx-2 animate-drip-expand">
          <div className="relative h-11 w-11 animate-pulse">
            <Image
              src={"https://ik.imagekit.io/webibee/Agency/brain-logo.svg"}
              alt="Webibee logo"
              title="Webibee logo"
              fill
              aria-label="Webibee logo"
              className="absolute object-contain object-center"
            />
          </div>
          {/* <p className="font-extrabold text-3xl font-logo_header">WEBIBEE</p> */}
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end" className="flex md:hidden">
        <Link
          to={"Contact"}
          href={"Contact"}
          spy={true}
          offset={-50}
          smooth={true}
          duration={500}
          // color="secondary"
          aria-current="page"
          className="flex items-center gap-2 text-sm sm:text-xl hover:opacity-50 cursor-pointer font-Caveat text-[#904BF6] py-1.5 px-2 bg-default rounded-lg font-bold z-10"
        >
          {/* <span><FaPhoneVolume className="text-default text-base  md:text-lg animate-bounce"/></span> */}
          <span>Contact Us</span>
        </Link>
      </NavbarContent>

      <NavbarContent className="hidden md:flex gap-6" justify="center">
        <NavbarBrand className="space-x-2 animate-drip-expand">
          <div className="relative h-14 w-14 animate-pulse">
            <Image
              src={"https://ik.imagekit.io/webibee/Agency/brain-logo.svg"}
              alt="Webibee logo"
              title="Webibee logo"
              fill
              aria-label="Webibee logo"
              className="absolute object-contain object-center"
            />
          </div>
          {/* <p className="font-extrabold text-2xl xl:text-4xl font-Caveat text-gradient tracking-wider hidden lg:block capitalize">
            Webibee
          </p> */}
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
              href={link.href}
              spy={true}
              offset={-30}
              smooth={true}
              duration={500}
              aria-current="page"
              className="text-lg hover:opacity-50 cursor-pointer 
              font-Montserrat text-default"
            >
              {link.title}
            </Link>
          </NavbarItem>
        ))}
        <NavbarItem>
          <Link
            to={"Contact"}
            spy={true}
            offset={-30}
            smooth={true}
            duration={500}
            // color="secondary"
            aria-current="page"
            className="flex items-center gap-2 text-sm sm:text-xl hover:opacity-50 cursor-pointer font-Caveat  py-1.5 px-2 text-[#904BF6] bg-white rounded-lg font-semibold"
          >
            {/* <span><FaPhoneVolume className="text-default text-base  md:text-lg animate-bounce"/></span> */}
            <span>Contact Us</span>
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-secondary bg-opacity-90 pt-10">
        {Navlinks.map((link, idx) => (
          <NavbarMenuItem key={`${link}-${idx}`} className="">
            <Button
              as={Link}
              key={idx}
              to={link.href}
              spy={true}
              offset={-50}
              smooth={true}
              duration={500}
              className="w-full p-2 font-Lato font-semibold text-lg bg-primary text-default"
              href={link.href}
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
