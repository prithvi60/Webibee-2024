import { benefits } from "@/libs/data";
import { BenefitCard } from "./BenefitCard";
import Marquee from "react-fast-marquee";

export default function Benefits() {
  return (
    <section className="padding-variable bg-primary">
      <div className="pb-14 mx-auto">
        <h1 className="hidden md:block font-Montserrat text-5xl md:text-6xl text-center text-default pb-6 capitalize">
        Benefits of getting a website built from us
        </h1>
        <h2 className="md:hidden font-Montserrat text-5xl md:text-7xl text-center text-default pb-6 capitalize">
        Benefits
        </h2>
        <hr className="w-60 mx-auto  bg-default p-0.5 border-t-0 rounded-md" />
      </div>
      {/* <div className="flex justify-center items-center flex-wrap gap-10 w-4/5 mx-auto"> */}
      <Marquee pauseOnHover speed={70} autoFill={true} direction="right">
      <div className="flex items-center gap-5 w-full h-full py-5 first:ms-5">
        {benefits.map((item,idx)=>(
      <BenefitCard item={item} key={idx}/>
        ))}
        </div>
    </Marquee>
    </section>
  )
}
