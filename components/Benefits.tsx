"use client";
import { benefits } from "@/libs/data";
import { BenefitCard } from "./BenefitCard";
import { Marquee } from "@webibee/react-marquee";

export default function Benefits() {
  
  return (
    <section className="padding-variable py-6 md:py-10 lg:py-[60px] bg-primary">
      <div className="pb-14 mx-auto">
        <h1 className="hidden md:block font-Montserrat text-5xl md:text-6xl text-center text-default pb-6 capitalize">
          Benefits of getting a website built from us
        </h1>
        <h1 className="md:hidden font-Montserrat text-5xl md:text-7xl text-center text-default pb-6 capitalize">
          Benefits
        </h1>
        <hr className="w-12 md:w-60 mx-auto  bg-default p-0.5 border-t-0 rounded-md" />
      </div>
      {/* <div className="flex justify-center items-center flex-wrap gap-10 w-4/5 mx-auto"> */}
      <Marquee >
      {/* <div className="flex items-center gap-5 w-full h-full py-5 first:ms-5"> */}
        {benefits.map((item,idx)=>(
      <BenefitCard item={item} key={idx}/>
        ))}
        {/* </div> */}
    </Marquee>
    </section>
  );
}
