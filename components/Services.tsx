"use client"
import {Card, CardHeader, CardBody, Divider} from "@nextui-org/react";
import { FaCircleCheck } from "react-icons/fa6";

export default function Services() {
  return (
    <section className="py-16 mb-28 bg-gradient px-5" id="Services">
      <div className="pb-10 mx-auto">
        <h2 className="font-header text-5xl md:text-7xl text-center text-white">
        Services We Offer
        </h2>
        <hr className="w-56 mt-4 mx-auto p-[1px] bg-gradient" />
      </div>
      <div className="flex justify-center items-center flex-wrap gap-10">
      <Card className="w-[300px] sm:w-[350px]">
      <CardHeader className="flex gap-3 bg-black-gradient font-body ">
        <h3 className="text-white text-bold text-xl px-2">Shopify Website Creation</h3>
      </CardHeader>
      <Divider/>
      <CardBody className="pb-10">
        <h4 className="font-bold text-lg px-2 py-2">What does it include?</h4>
        <ul className="space-y-2">
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
          <li className="flex items-center gap-3 pl-5">
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
        </ul>
      </CardBody>
      </Card>
      <Card className="w-[300px] sm:w-[350px]">
      <CardHeader className="flex gap-3 bg-black-gradient font-body ">
        <h3 className="text-white text-bold text-xl px-2">Shopify Website Redesign</h3>
      </CardHeader>
      <Divider/>
      <CardBody className="pb-10">
        <h4 className="font-bold text-lg px-2 py-2">What does it include?</h4>
        <ul className="space-y-2">
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
          <li className="flex items-center gap-3 pl-5">
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
        </ul>
      </CardBody>
      </Card>
    </div>
    </section>
  )
}
