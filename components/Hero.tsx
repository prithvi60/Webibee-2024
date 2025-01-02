import Image from "next/image";
import { LogoTypeWriterAnimation } from "./LogoTypeWriterAnimation";

const Hero = () => {

  return (
    <section className="p-10 sm:px-20 xl:px-64 sm:py-16 xl:py-28 block space-y-10">
      <div className="flex justify-center items-center gap-3 font-SourceCodePro font-semibold tracking-wider flex-col sm:flex-row md:gap-6 text-base sm:text-lg">
        <h5>Limitless vision.</h5>
        <h5>Limitless Progress.</h5>
      </div>
      <div className="flex flex-col justify-center items-center gap-10">
        <h3 className="uppercase font-EbGaramond tracking-widest font-bold text-2xl sm:text-3xl xl:text-4xl text-center"> Business Tech to Small Medium Enterprises (SME)</h3>
        {/* <div className="relative overflow-hidden w-full h-72">
          <Image fill src={"/webibee logo.svg"} alt="logo" className="object-contain object-center " />
        </div> */}
        <LogoTypeWriterAnimation text={"webibee"} />
      </div>
    </section>
  );
};

export default Hero;
