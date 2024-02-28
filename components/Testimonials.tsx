"use client";
import { Card } from "@nextui-org/react";
import { Element } from "react-scroll";
import TestimonialCard from "./TestimonialCard";
import Marquee from "react-fast-marquee";
import { lists } from "@/libs/data";

export default function Testimonials() {
  return (
    <Element
      className="padding-variable h-full flex flex-col gap-4 bg-primary"
      name="testimonial"
    >
      <div>
        <h3 className="capitalize text-5xl md:text-7xl w-full mx-auto tracking-wide font-Montserrat font-normal text-center text-default">
          Customer Testimonials
        </h3>
        <hr className="w-56 mt-4 mx-auto p-0.5 border-t-0 rounded-md bg-default" />
      </div>
      <Marquee pauseOnHover speed={70} autoFill={true}>
        <div className="flex items-center gap-5 w-full h-full py-5 first:ms-5">
          {lists.map((list, idx) => (
            <TestimonialCard list={list} key={idx} />
          ))}
        </div>
      </Marquee>
      <Card />
    </Element>
    // <section className="py-6 md:py-10" id="Testimonial">
    //   <div className="py-10 mx-auto">
    //     <h2 className="font-Montserrat text-5xl md:text-7xl text-gradient text-center">
    //       Customer Testimonials
    //     </h2>
    //     <hr className="w-56 mt-4 mx-auto p-[1px] bg-default" />
    //   </div>
    //   <div className="w-full h-full overflow-hidden flex gap-4 ">
    //     <div className="py-10 flex justify-around  gap-4 animate-horizontal_carousel">
    //       {lists.map((list, idx) => (
    //         <Card
    //           className="w-[280px] md:w-[320px] h-[365px] font-Lato"
    //           key={idx}
    //         >
    //           <CardHeader className="flex gap-3">
    //             <Image
    //               alt="nextui logo"
    //               height={40}
    //               radius="sm"
    //               src={list.img}
    //               width={40}
    //             />
    //             <div className="flex flex-col">
    //               <p className="text-xl md:text-2xl font-Montserrat">{list.title}</p>
    //               <p className="text-sm text-default-500">{list.country}</p>
    //             </div>
    //           </CardHeader>
    //           <Divider className="bg-primary" />
    //           <CardBody>
    //             <p className="leading-loose">{list.para}</p>
    //           </CardBody>
    //           {/* <Divider/> */}
    //           {/* <CardFooter>
    //     <Link
    //       isExternal
    //       showAnchorIcon
    //       href="https://github.com/nextui-org/nextui"
    //     >
    //       Visit source code on GitHub.
    //     </Link>
    //   </CardFooter> */}
    //         </Card>
    //       ))}
    //     </div>
    //     <div className="py-10 flex justify-around  gap-4 animate-horizontal_carousel">
    //       {lists.map((list, idx) => (
    //         <Card
    //           className="w-[280px] md:w-[320px] h-[365px] font-Lato"
    //           key={idx}
    //         >
    //           <CardHeader className="flex gap-3">
    //             <Image
    //               alt="nextui logo"
    //               height={40}
    //               radius="sm"
    //               src={list.img}
    //               width={40}
    //             />
    //             <div className="flex flex-col">
    //               <p className="text-xl md:text-2xl font-Montserrat">{list.title}</p>
    //               <p className="text-sm text-default-500">{list.country}</p>
    //             </div>
    //           </CardHeader>
    //           <Divider className="bg-primary" />
    //           <CardBody>
    //             <p className="leading-loose">{list.para}</p>
    //           </CardBody>
    //         </Card>
    //       ))}
    //     </div>
    //   </div>
    // </section>
  );
}
