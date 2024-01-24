"use client"
import { Faq } from "@/libs/data";
import {Accordion, AccordionItem} from "@nextui-org/react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Element } from "react-scroll";

export default function FAQ() {
  const itemClasses = {
    base: "mb-2 !px-0 w-full !rounded-[20px] !bg-primary overflow-hidden",
    heading: "p-4 md:p-5",
    title:
      "font-Montserrat text-xl md:text-2xl text-white focus-within:outline-none focus-within:border-transparent focus-within:ring-0 font-bold",
    trigger: "h-auto lg:h-10",
    indicator: "text-xl md:text-2xl text-white",
    content:
      "p-4 md:p-5 font-Lato text-base md:text-lg text-primary bg-white font-medium",
  };
  return (
    <Element className="padding-variable" name="FAQ">
      <div className="pb-14 mx-auto">
        <h2 className="font-Montserrat text-5xl md:text-7xl text-center text-white pb-6">
        Frequently Asked Questions
        </h2>
        <hr className="w-[17rem] mx-auto p-0.5 bg-gradient border-t-0 rounded-md" />
      </div>
      <div className="w-full md:w-4/5 md:mx-auto">
    <Accordion variant="splitted" itemClasses={itemClasses}>
      {Faq.map((item,idx)=>(
      <AccordionItem key={idx} aria-label="Accordion 1" indicator={({ isOpen }) =>
      isOpen ? (
        <AiOutlineMinus className="h-5 w-5 text-white rotate-90" />
      ) : (
        <AiOutlinePlus className="h-5 w-5 text-white" />
      )
    } title={item.title} className="font-medium">
        {/* {item.content} */}
        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
      </AccordionItem>
      ))}
    </Accordion>
    </div>
    </Element>
  )
}
