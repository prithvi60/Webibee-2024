"use client";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import Marquee from "react-fast-marquee";
// import { FaCircleCheck } from "react-icons/fa6";
import { Element } from "react-scroll";
import { ourservices } from "@/libs/data";

export default function Services() {
  return (
    <Element
      className="py-5 md:px-10 lg:p-[60px] space-y-3 md:space-y-4"
      name="Services"
    >
      {/* <div className="pb-10 mx-auto">
        <h2 className="font-Montserrat text-5xl md:text-7xl text-default p-3 w-max mx-auto backdrop-blur-2xl rounded-2xl">
        Services We Offer
        </h2>
        <hr className="w-80 mx-auto  bg-default p-0.5 border-t-0 rounded-md" />
      </div> */}
      <Marquee pauseOnHover speed={70} autoFill={true}>
        <div className="flex justify-center items-center flex-wrap gap-10 first:ms-10">
          {ourservices.map((service, idx) => (
            <Card className="w-[275px] sm:w-[320px] h-[180px]" key={idx}>
              <CardHeader className="flex gap-3 bg-success font-Lato">
                <h3 className="text-default font-medium text-2xl px-2 line-clamp-1">
                  {service.title}
                </h3>
              </CardHeader>
              {/* <Divider className="bg-warning"/> */}
              <CardBody className="pb-10 bg-secondary font-Lato">
                <h4 className="font-normal text-default text-lg px-2 py-2 line-clamp-3">
                  {/* <FaCircleCheck  className="h-5 w-5  text-primary"/> */}
                  {service.desc}
                </h4>
                {/* <ul className="space-y-2">
     <li className="flex items-center gap-3 pl-5">
     <FaCircleCheck  className="h-5 w-5  text-primary"/>
     <p>Premium Website Design</p>
     </li>
     <li className="flex items-center gap-3 pl-5">
     <FaCircleCheck  className="h-5 w-5  text-primary"/>
     <p>Graphic Design</p>
     </li>
     <li className="flex items-center gap-3 pl-5">
     <FaCircleCheck  className="h-5 w-5  text-primary"/>
     <p>Homepage Content</p>
     </li>
     {/* <li className="flex items-center gap-3 pl-5">
     <FaCircleCheck  className="h-5 w-5  text-primary"/>
     <p>Shipping Setup</p>
     </li>
     <li className="flex items-center gap-3 pl-5">
     <FaCircleCheck  className="h-5 w-5  text-primary"/>
     <p>Payment Gateway Interation</p>
     </li>
     <li className="flex items-center gap-3 pl-5">
     <FaCircleCheck  className="h-5 w-5  text-primary"/>
     <p>And Much More…</p>
     </li> 
   </ul> */}
              </CardBody>
            </Card>
          ))}
        </div>
      </Marquee>
    </Element>
  );
}
