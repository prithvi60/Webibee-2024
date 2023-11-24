"use client"
import { benefits } from "@/libs/data";
import {Card, CardHeader, CardBody, Divider} from "@nextui-org/react";

export default function Benefits() {
  return (
    <section className="py-16 bg-gradient">
      <div className="pb-14 mx-auto">
        <h2 className="font-header text-4xl md:text-5xl text-center">
        Benefits of getting a website built from us
        </h2>
        <hr className="w-80 mt-4 mx-auto p-[1px] bg-white" />
      </div>
      <div className="flex justify-center items-center flex-wrap gap-10 w-4/5 mx-auto">
        {benefits.map((item,idx)=>(
      <Card className="w-[280px] sm:w-[320px]" key={idx}>
      <CardHeader className="flex gap-3 bg-black-gradient font-body justify-center items-center">
        <h3 className="text-white text-bold text-xl px-2">{item.title}</h3>
      </CardHeader>
      <Divider/>
      <CardBody className="pb-10 text-center">
        <p className="font-bold text-lg px-2 py-2">{item.para}</p>
      </CardBody>
      </Card>
        ))}
    </div>
    </section>
  )
}
