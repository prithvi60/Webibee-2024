"use client";
import { Faq } from "@/libs/data";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Element } from "react-scroll";

export default function FAQ() {
  const itemClasses = {
    base: "mb-2 !px-0 w-full !rounded-[20px] !bg-success overflow-hidden",
    heading: "p-2 md:p-5 border border-warning",
    title:
      "font-Montserrat text-lg md:text-2xl text-default focus-within:outline-none focus-within:border-transparent focus-within:ring-0",
    trigger: "h-auto lg:h-10",
    indicator: "text-xl md:text-2xl text-default",
    content:
      "p-4 md:p-5 font-Lato text-base md:text-lg text-default bg-secondary font-medium",
  };
  return (
    <Element className="padding-variable bg-primary" name="FAQ">
      <div className="pb-14 mx-auto">
        <h2 className="hidden md:block font-Montserrat text-5xl md:text-7xl text-center text-default pb-6 font-medium">
          Frequently Asked Questions
        </h2>
        <h2 className="md:hidden font-Montserrat text-5xl md:text-7xl text-center text-default pb-6">
          FAQ
        </h2>
        <hr className="w-[17rem] mx-auto p-0.5 bg-default border-t-0 rounded-md" />
      </div>
      <div className="w-full md:w-4/5 md:mx-auto">
        <Accordion variant="splitted" itemClasses={itemClasses}>
          {Faq.map((item, idx) => (
            <AccordionItem
              key={idx}
              aria-label="Accordion 1" 
              indicator={({ isOpen }) =>
                isOpen ? (
                  <AiOutlineMinus className="h-5 w-5 text-default rotate-90" />
                ) : (
                  <AiOutlinePlus className="h-5 w-5 text-default" />
                )
              }
              title={item.title}
              className="font-normal"
            >
              <div
              className="font-medium"
              >
              {item.content !== ""
                ? item.content
                : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
         </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Element>
  );
}
