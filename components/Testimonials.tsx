"use client";
import { lists } from "@/libs/data";
import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";

export default function Testimonials() {
  return (
    <section className="py-6 md:py-10">
      <div className="py-10 mx-auto">
        <h2 className="font-header text-4xl md:text-5xl text-gradient text-center">
          Customer Testimonials
        </h2>
        <hr className="w-56 mt-4 mx-auto p-[1px] bg-white" />
      </div>
      <div className="w-full h-[65vh] overflow-hidden flex gap-4 ">
        <div className="py-10 flex justify-around  gap-4 animate-horizontal_carousel">
          {lists.map((list, idx) => (
            <Card
              className="w-[280px] md:w-[320px] h-[365px] font-body"
              key={idx}
            >
              <CardHeader className="flex gap-3">
                <Image
                  alt="nextui logo"
                  height={40}
                  radius="sm"
                  src={list.img}
                  width={40}
                />
                <div className="flex flex-col">
                  <p className="text-xl md:text-2xl font-header">{list.title}</p>
                  <p className="text-sm text-default-500">{list.country}</p>
                </div>
              </CardHeader>
              <Divider className="bg-primary" />
              <CardBody>
                <p className="leading-loose">{list.para}</p>
              </CardBody>
              {/* <Divider/> */}
              {/* <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/nextui-org/nextui"
        >
          Visit source code on GitHub.
        </Link>
      </CardFooter> */}
            </Card>
          ))}
        </div>
        <div className="py-10 flex justify-around  gap-4 animate-horizontal_carousel">
          {lists.map((list, idx) => (
            <Card
              className="w-[280px] md:w-[320px] h-[365px] font-body"
              key={idx}
            >
              <CardHeader className="flex gap-3">
                <Image
                  alt="nextui logo"
                  height={40}
                  radius="sm"
                  src={list.img}
                  width={40}
                />
                <div className="flex flex-col">
                  <p className="text-xl md:text-2xl font-header">{list.title}</p>
                  <p className="text-sm text-default-500">{list.country}</p>
                </div>
              </CardHeader>
              <Divider className="bg-primary" />
              <CardBody>
                <p className="leading-loose">{list.para}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
