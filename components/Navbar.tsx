"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import Image from "next/image";
const NavBar = () => {
  const menuItems = ["Portfolio", "Testimonials", "Team", "Services"];

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

      <NavbarContent className="md:hidden pr-3" justify="center">
        <NavbarBrand className="mr-5 animate-drip-expand">
          <div className="relative h-12 w-12 animate-pulse">
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

      <NavbarContent className="hidden md:flex gap-6" justify="end">
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
          <p className="font-extrabold text-3xl font-header text-gradient tracking-wider">
            Webibee
          </p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden md:flex gap-10" justify="end">
        <NavbarItem isActive>
          <Link
            color="primary"
            href="#"
            aria-current="page"
            className="text-lg hover:text-purple-300"
          >
            Portfolio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className="text-lg text-black hover:text-purple-300">
            Testimonials
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className="text-lg text-black hover:text-purple-300">
            Team
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className="text-lg text-black hover:text-purple-300">
            Services
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            className="bg-gradient font-bold text-white text-base md:text-lg"
            href="#"
            variant="flat"
            size="md"
          >
            Book A Meeting
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-secondary bg-opacity-90 mt-6">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`} className="">
            <Link
              className="w-full p-2 font-body font-semibold text-lg"
              // color={
              // }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavBar;
