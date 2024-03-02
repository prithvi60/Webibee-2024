"use client";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import Marquee from "react-fast-marquee";
// import { FaCircleCheck } from "react-icons/fa6";
import { Element } from "react-scroll";
import { ourservices } from "@/libs/data";

export default function Services() {
  return (
    <Element
      className="py-2.5 md:px-10 lg:p-[60px] space-y-3 md:space-y-4"
      name="Services"
    >
      <Marquee pauseOnHover speed={70} autoFill={true}>
        <div className="flex justify-center items-center flex-wrap gap-10 first:ms-10">
          {ourservices.map((service, idx) => (
            <Card className="w-[275px] h-[220px] md:w-[360px] md:h-[220px]" key={idx}>
              <CardHeader className="flex gap-3 bg-success font-Lato">
                <h2 className="text-default font-medium text-2xl px-2 line-clamp-1">
                  {service.title}
                </h2>
              </CardHeader>
              {/* <Divider className="bg-warning"/> */}
              <CardBody className="pb-10 bg-secondary font-Lato">
                <h2 className="font-normal text-default text-lg px-2 py-2 line-clamp-3">
                  {/* <FaCircleCheck  className="h-5 w-5  text-primary"/> */}
                  {service.desc}
                </h2>
              </CardBody>
            </Card>
          ))}
        </div>
      </Marquee>
    </Element>
  );
}
