"use client";
import { about, services } from "@/libs/data";
import {
  Input,
  Radio,
  RadioGroup,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { Element } from "react-scroll";

export default function Contact() {
  return (
    <Element className="padding-variable bg-gradient" name="Contact">
      <h2 className="font-Montserrat text-5xl md:text-7xl text-center text-white">
        Contact Us
      </h2>
      <hr className="w-80 mx-auto p-0.5 bg-white border-t-0 rounded-md" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center pt-3 md:pt-10">
      <div className="w-full text-white flex flex-col justify-center items-center gap-5 py-5">
          <h3 className="text-bold text-2xl md:text-3xl tracking-wide font-Montserrat text-center">
           <span className="font-Caveat font-medium text-2xl md:text-4xl me-3">Webibee</span>world
          </h3>
          <p className="font-medium text-base md:text-lg text-center w-4/5 tracking-normal leading-relaxed">
            We are software developers who build modern websites and tools to
            boost your brands business.If you want to know more about our
            company. 
            <br />
            Check out 👉
          </p>
          <p></p>
        </div>
      <div className="w-full bg-white mx-auto rounded-lg">
        <div className="bg-black-gradient border-b-1 border-primary rounded-t-lg py-3 space-y-2">
          <h2 className="font-Montserrat text-2xl md:text-4xl text-center text-white ">
          Inquiry Form
          </h2>
          <p className="font-Lato font-medium text-base text-center text-white">We will get in touch with you shortly</p>
          {/* <div className="p-1 my-3 rounded-full border-2 border-primary z-40 bg-white w-max mx-auto text-xs">
            OR
          </div> */}
          {/* <div className="w-max mx-auto mb-4">
            <Button
              as={Link}
              href="#"
              color="primary"
              size="md"
              variant="ghost"
              className="capitalize font-bold text-white">
              Book a google meet
            </Button>
          </div> */}
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
      </div>
    </Element>
  );
}
