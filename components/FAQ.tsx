"use client"
import { Faq } from "@/libs/data";
import {Accordion, AccordionItem} from "@nextui-org/react";
import { type } from "os";
import { IoIosArrowDropleftCircle } from "react-icons/io";
// type box = {
//   name: string;
// };

export default function FAQ() {
  return (
    <section className="py-16 mb-28 px-5" id="FAQ">
      <div className="pb-14 mx-auto">
        <h2 className="font-header text-5xl md:text-7xl text-center text-white">
        Frequently Asked Questions
        </h2>
        <hr className="w-80 mt-4 mx-auto p-[1px] bg-gradient" />
      </div>
      <div className="w-full md:w-4/5 md:mx-auto">
    <Accordion variant="splitted">
      {Faq.map((item,idx)=>(
      <AccordionItem key={idx} aria-label="Accordion 1" indicator={<IoIosArrowDropleftCircle className="h-7 w-7 text-black"/>} title={item.title} className="bg-gradient font-medium">
        {/* {item.content} */}
        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
      </AccordionItem>
      ))}
    </Accordion>
    </div>
    </section>
  )
}
