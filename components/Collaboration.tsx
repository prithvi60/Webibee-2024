"use client";
import { collaboration } from "@/libs/data";
import { Accordion, AccordionItem } from "@heroui/react";

export default function Collaboration() {
  const itemClasses = {
    base: "w-full overflow-hidden",
    heading: "p-2 md:p-5 data-[open=true]:bg-gradient-to-r from-[#FFF3B3] to-[#FFD700]",
    title:
      "font-EbGaramond text-lg md:text-2xl text-default focus-within:outline-none focus-within:border-none focus-within:ring-0",
    trigger: "h-auto lg:h-10",
    indicator: "text-xl md:text-2xl text-default",
    content:
      "p-4 md:p-5 font-SourceCodePro text-base md:text-lg text-default font-medium",
  };


  return (
    <section id="collaboration" className="block space-y-10  p-10 sm:px-20 xl:px-64 sm:py-16 xl:py-28">
      {/* <h1 className="block tracking-wider font-EbGaramond text-center md:text-start text-4xl md:text-5xl text-default font-medium">
        Collaboration
      </h1> */}
      <h3 className="font-EbGaramond font-medium text-4xl sm:text-5xl xl:text-7xl text-center md:text-start">
        Collaboration
      </h3>
      <div className="w-full">
        <Accordion variant="light" itemClasses={itemClasses} defaultExpandedKeys={["0"]}>
          {collaboration.map((item, idx) => (
            <AccordionItem
              key={`${idx}`}
              aria-label="Accordion 1"
              // indicator={({ isOpen }) =>
              //   isOpen ? (
              //     <AiOutlineMinus className="h-5 w-5 text-default rotate-90" />
              //   ) : (
              //     <AiOutlinePlus className="h-5 w-5 text-default" />
              //   )
              // }
              title={item.title}
              className="font-normal"
            >
              <div
                className="font-medium flex justify-between items-center"
              >
                <p className="font-SourceCodePro tracking-wider font-medium !leading-7 text-lg md:text-xl">{item.desc}</p>
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
