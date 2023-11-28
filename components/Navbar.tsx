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
import { Link } from "react-scroll";
const NavBar = () => {
  return (
    <Navbar
      shouldHideOnScroll
      isBordered
      isBlurred
      maxWidth="2xl"
      className="py-2 bg-white font-body"
    >
      <NavbarContent className="md:hidden" justify="start">
        <NavbarMenuToggle className="text-primary" />
      </NavbarContent>

      <NavbarContent className="md:hidden" justify="center">
        <NavbarBrand className="mr-5 animate-drip-expand">
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
          <p className="font-extrabold text-3xl font-header text-gradient tracking-wider hidden lg:block">
            Webibee
          </p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent
        className="hidden md:flex md:gap-5 lg:gap-10"
        justify="end"
      >
        {Navlinks.map((link, idx) => (
          <NavbarItem key={idx}>
            <Link
              key={idx}
              to={link.title}
              spy={true}
              smooth={true}
              duration={500}
              color="secondary"
              aria-current="page"
              className="text-lg hover:text-primary cursor-pointer"
            >
              {link.title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            className="bg-gradient font-bold text-white text-sm lg:text-lg capitalize"
            href="#"
            variant="flat"
            size="md"
          >
            Free consultation
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-secondary bg-opacity-90 mt-6">
        {Navlinks.map((link, idx) => (
          <NavbarMenuItem key={`${link}-${idx}`} className="">
            <Button
              as={Link}
              className="w-full p-2 font-body font-semibold text-lg"
              // color={
              // }
              href={link.href}
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
