"use client"
import { services } from "@/libs/data";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

export default function Services() {
  return (
    <section className="block space-y-10 md:space-y-20 p-10 sm:px-20 xl:px-64 sm:py-16 xl:py-28">
      <h3 className="text-xl sm:text-2xl md:text-[40px] lg:text-[56px] xl:text-[72px] text-center w-full font-EbGaramond font-medium tracking-wide !leading-tight h-full">
        Fueling Business with{" "}
        <span className="font-extrabold uppercase text-info">
          tailored, agile, & creative
        </span>{" "}
        Solutions
      </h3>
      <div className="flex flex-wrap lg:flex-nowrap justify-center gap-5">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="p-5 w-full max-w-72 md:max-w-96 border-4 border-[#DFE3E8] h-full sm:min-h-72 xl:min-h-96"
          >
            <Link href={service.href} className="block space-y-10">
              <div className="text-[#404040] text-lg tracking-wider sm:text-xl xl:text-3xl block space-y-1.5 text-center uppercase font-EbGaramond font-bold">
                <h4>{service.title}</h4>
                <h4>Essentials</h4>
              </div>
              <hr className="w-full h-1.5 bg-[#404040] rounded-md" />
              <TypeText service={service} />
            </Link>
          </div>
        ))}
      </div>
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
