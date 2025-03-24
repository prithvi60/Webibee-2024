"use client";
import { services } from "@/libs/data";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { parentVariant, variantGrid, variantTitle } from "@/libs/Variants";

export default function Services() {
  return (
    <section className="block space-y-10 md:space-y-10 p-10 sm:px-20 xl:px-60 sm:py-16 xl:py-28">
      <motion.h3
        variants={variantTitle}
        viewport={{ once: true }}
        initial="initial"
        whileInView="animate"
        className=" text-[26px] lg:text-[56px] xl:text-[72px]  w-full !leading-tight h-full font-EbGaramond  tracking-wider font-medium text-center "
      >
        Fueling Business with{" "}
        <span className="font-extrabold uppercase text-info">
          tailored, agile, & creative
        </span>{" "}
        Solutions
      </motion.h3>
      {/* <h4 className='font-EbGaramond text-4xl xl:text-6xl tracking-wider font-medium text-center md:text-start'>Crafting Impact Across <strong className='text-info'>Industries</strong></h4> */}
      <motion.div
        variants={parentVariant}
        viewport={{ amount: 0.3, once: true }}
        initial="initial"
        whileInView="animate"
        className="flex md:justify-center max-w-sm sm:flex-wrap sm:max-w-full overflow-x-scroll md:overflow-x-auto gap-5 py-20 no_scrollbar"
      >
        {services.map((service, idx) => (
          <motion.a
            href={service.href}
            variants={variantGrid}
            initial="initial"
            whileInView="animate"
            custom={idx}
            viewport={{ once: true }}
            key={idx}
            className="px-5 min-w-60 sm:w-52 sm:justify-center md:w-60 lg:w-[280px] border-4 border-[#DFE3E8] h-full sm:h-80 xl:h-96 py-14 xl:py-20 lg:hover:!scale-110 lg:hover:!rounded-lg transition-all duration-500 cursor-pointer lg:hover:border-2 lg:hover:border-info lg:hover:shadow-lg lg:hover:shadow-info/30"
          >
            <div className="block space-y-10">
              <div className="text-[#404040] text-lg tracking-wider sm:text-xl xl:text-3xl block space-y-1.5 text-center uppercase font-EbGaramond font-bold">
                <h4 className="text-info scale-110">{service.title}</h4>
                <h4>Essentials</h4>
              </div>
              <hr className="w-full h-1.5 bg-[#404040] rounded-md" />
              <TypeText service={service} />
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}

const TypeText = ({ service }: { service: any }) => {
  const sequence = service.summary.flatMap((value: string) => [
    value,
    2500, // delay after each value
  ]);
  return (
    <div className="min-h-16 sm:min-h-20 w-full">
      <TypeAnimation
        sequence={sequence}
        speed={75}
        className="text-[#868686] font-SourceCodePro font-semibold text-sm xl:text-base text-center"
        repeat={Infinity}
      />
    </div>
  );
};
