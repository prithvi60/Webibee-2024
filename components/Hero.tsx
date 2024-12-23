"use client";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import Services from "./Services";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [loader, setLoader] = useState(false);

  return (
    <>
      <section
        className="relative padding-variable py-6 md:py-10 lg:py-[60px] text-center text-default h-screen"
        style={{
          zIndex: 2,
        }}
      >
        <h1 className="w-full mx-auto mt-8 text-6xl font-medium tracking-wide capitalize md:text-8xl font-Caveat md:mt-10 ">
          Websites that stand out
        </h1>
        <h2 className="w-full mx-auto font-medium capitalize text-md md:text-xl font-Lato ">
          Elevate SEO, Drive Sales, and Set the Standard for Cutting-Edge
          Quality with Our Performance-Optimized Designs
        </h2>
        <div className="py-12 md:pt-24 ">
          <Button
            size="lg"
            radius="lg"
            className="rounded-2xl border-2 border-dashed border-success bg-danger md:text-xl shadow-lg px-6 py-5 md:px-28 md:py-8 font-Lato font-bold uppercase text-default transition-all duration-300 hover:animate-pulse active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
          >
            <Link
              passHref={true}
              target="blank"
              href={"https://calendar.app.google/dUU7BcdHo1Y61M1v6"}
              title="google calendar"
            >
              Book a Free Consultation
            </Link>
          </Button>
        </div>
        {/* <Services /> */}
      </section>
      <div className="absolute top-0 left-0 w-full h-screen pointer-events-none">
        <Image
          title="bg gif"
          src={"https://ik.imagekit.io/webibee/Agency/bg_webibee.gif?tr:q-100"}
          loading="lazy"
          quality={100}
          alt="bg gif"
          onLoad={() => {
            setLoader(true);
          }}
          fill
          style={{ filter: "brightness(0.6)" }}
        />
        {!loader && (
          <Image
            title="bg gif"
            src={"/placeholder.png"}
            quality={30}
            alt="bg gif"
            priority
            fill
            style={{ filter: "brightness(0.6)" }}
          />
        )}
      </div>
    </>
  );
};

export default Hero;
