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

  return (
    <Navbar
      shouldHideOnScroll
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      isBordered
      isBlurred
      maxWidth="2xl"
      className=" bg-primary font-Lato opacity-80"
    >
      <NavbarContent className="md:hidden !flex-grow-0" justify="start">
        {/* <NavbarMenuToggle className="text-primary" /> */}
        <NavbarMenuToggle
          className="text-white"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="md:hidden z-[1000]" justify="start">
        <NavbarBrand className=" mx-2 animate-drip-expand">
          <div className="relative h-11 w-11 animate-pulse">
            <Image
              src={"/brain-logo.svg"}
              alt="Webibee logo"
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
          spy={true}
          offset={-50}
          smooth={true}
          duration={500}
          // color="secondary"
          aria-current="page"
          className="text-sm sm:text-xl hover:opacity-50 cursor-pointer font-Caveat text-yellow font-normal py-1.5 px-2 bg-white text-primary rounded-lg"
        >
          +91-7358023088
        </Link>
      </NavbarContent>

      <NavbarContent className="hidden md:flex gap-6" justify="center">
        <NavbarBrand className="space-x-2 animate-drip-expand">
          <div className="relative h-14 w-14 animate-pulse">
            <Image
              src={"/brain-logo.svg"}
              alt="Webibee logo"
              fill
              aria-label="Webibee logo"
              className="absolute object-contain object-center"
            />
          </div>
          <p className="font-extrabold text-2xl xl:text-4xl font-Caveat text-gradient tracking-wider hidden lg:block capitalize">
            Webibee
          </p>
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
              spy={true}
              offset={-30}
              smooth={true}
              duration={500}
              aria-current="page"
              className="text-lg hover:opacity-50 cursor-pointer 
              font-Montserrat text-white"
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
            className="text-base sm:text-xl rounded-lg hover:opacity-50 cursor-pointer 
              font-Caveat font-normal py-2 px-2.5 bg-white text-primary"
          >
            {/* Contact Us */}
            +91-7358023088
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
              className="w-full p-2 font-Lato font-semibold text-lg bg-primary text-white"
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
