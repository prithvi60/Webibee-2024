"use client";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { Marquee } from "@webibee/react-marquee";
import "keen-slider/keen-slider.min.css";
import { Element } from "react-scroll";
import { ourservices } from "@/libs/data";
import { useEffect, useState } from "react";

export default function Services() {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
  }, []);
  if (!loader) {
    return <div className="font-bold"> Loading Services...</div>;
  } else
    return (
      <Element
        className="py-2.5 w-screen space-y-3 md:space-y-4"
        name="Services"
      >
        <Marquee>
          {ourservices.map((service, idx) => (
            <Card
              className="w-[275px] h-[220px] md:w-[360px] md:h-[220px]"
              key={idx}
            >
              <CardHeader className="flex gap-3 bg-black font-Merri">
                <h2 className="text-default font-medium text-2xl px-2 line-clamp-1">
                  {service.title}
                </h2>
              </CardHeader>
              <CardBody className="pb-10 bg-secondary font-Merri">
                <h2 className="font-normal text-default text-lg px-2 py-2 line-clamp-3">
                  {service.desc}
                </h2>
              </CardBody>
            </Card>
          ))}
        </Marquee>
      </Element>
    );
}
