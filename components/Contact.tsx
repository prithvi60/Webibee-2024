"use client";
import { about, services } from "@/libs/data";
import {
  Button,
  Input,
  Radio,
  RadioGroup,
  Select,
  SelectItem,
} from "@nextui-org/react";
import Link from "next/link";

export default function Contact() {
  return (
    <section className="padding-variable bg-gradient" id="Contact us">
      <div className="w-full md:w-4/5 lg:w-[40%] bg-white mx-auto rounded-lg ">
        <div className="bg-black-gradient border-b-1 border-primary rounded-t-lg py-3">
          <h2 className="font-Montserrat text-5xl md:text-7xl text-center text-white px-4 py-2">
            Contact Us
          </h2>
          <div className="p-1 my-3 rounded-full border-2 border-primary z-40 bg-white w-max mx-auto text-xs">
            OR
          </div>
          <div className="w-max mx-auto mb-4">
            <Button
              as={Link}
              href="#"
              color="primary"
              size="md"
              variant="ghost"
              className="capitalize font-bold text-white">
              Book a google meet
            </Button>
          </div>
        </div>
        <form
          action=""
          method="POST"
          className="space-y-5 bg-zinc-100 py-10 px-3 rounded-lg"
        >
          <Input
            isRequired
            type="email"
            label="Email"
            className="w-full"
            color="primary"
            variant={"bordered"}
          />
          <Input
            isRequired
            type="text"
            label="Number"
            className="w-full"
            color="primary"
            variant={"bordered"}
          />
          <Input
            isRequired
            type="text"
            label="Company Name"
            className="w-full"
            color="primary"
            variant={"bordered"}
          />
          <Select
            isRequired
            label="What service do you require? "
            placeholder="Select an Service"
            defaultSelectedKeys={["Service 1"]}
            className="w-full"
            color="primary"
            variant={"bordered"}
          >
            {services.map((service) => (
              <SelectItem key={service.value} value={service.value}>
                {service.label}
              </SelectItem>
            ))}
          </Select>
          <Select
            isRequired
            label="Where did you hear about webibee?"
            placeholder="Select an Media"
            defaultSelectedKeys={["Media 1"]}
            className="w-full"
            color="primary"
            variant={"bordered"}
          >
            {about.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </Select>
          <RadioGroup
            label="Do you need help with your brand identity?"
            orientation="horizontal"
            defaultValue="Yes"
            color="primary"
            className="w-full ml-2 mb-5"
          >
            <Radio value="Yes">Yes</Radio>
            <Radio value="No">No</Radio>
          </RadioGroup>
        </form>
      </div>
    </section>
  );
}
