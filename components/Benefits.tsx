import { benefits } from "@/libs/data";
import { BenefitCard } from "./BenefitCard";
import Marquee from "react-fast-marquee";

export default function Benefits() {
  return (
    <section className="padding-variable bg-gradient">
      <div className="pb-14 mx-auto">
        <h2 className="font-Montserrat text-5xl md:text-7xl text-center text-white pb-6 capitalize">
        Benefits of getting a website built from us
        </h2>
        <hr className="w-80 mx-auto  bg-white p-0.5 border-t-0 rounded-md" />
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
