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
import { useRef } from "react";
import { Element } from "react-scroll";

export default function Contact() {
  // const formRef = useRef(null);
  return (
    <Element className="padding-variable bg-gradient" name="Contact">
      <h2 className="font-Montserrat text-5xl md:text-7xl text-center text-white">
        Contact Us
      </h2>
      <hr className="w-[17rem] mx-auto p-0.5 bg-white border-t-0 rounded-md" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center pt-3 md:pt-10">
      <div className="w-full bg-white mx-auto rounded-lg">
          <div className="bg-black-gradient border-b-1 border-primary rounded-t-lg py-3 space-y-2">
            <h2 className="font-Montserrat text-2xl md:text-4xl text-center text-white ">
              Inquiry Form
            </h2>
            <p className="font-Lato font-medium text-base text-center text-white">
              We will get in touch with you shortly
            </p>
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
            action="https://public.herotofu.com/v1/1da5cb00-21a1-11ee-a1b3-8ba321abde38"
            method="POST"
            className="space-y-5 bg-zinc-100 py-10 px-3 rounded-lg"
            accept-charset="UTF-8"
            // ref={formRef}
            // onSubmit={() =>
            //   setTimeout(() => {
            //     formRef?.current.reset();
            //   }, 1500)
            // }
          >
            <Input
              isRequired
              type="email"
              label="Email"
              name="Email"
              id="Email"
              className="w-full"
              color="primary"
              variant={"bordered"}
            />
            <Input
              type="text"
              name="Phone"
              id="Phone"
              label="Number"
              className="w-full"
              color="primary"
              variant={"bordered"}
            />
            <Input
              isRequired
              type="text"
              name="Company"
              id="Company"
              label="Company Name"
              className="w-full"
              color="primary"
              variant={"bordered"}
            />
            <Select
              isRequired
              name="Service"
              id="Service"
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
              label="Where did you hear about webibee?"
              name="Reach"
              id="Reach"
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
              name="NeedBranding"
              id="NeedBranding"
              label="Do you need help with your brand identity?"
              orientation="horizontal"
              defaultValue="No"
              color="primary"
              className="w-full ml-2 mb-5"
            >
              <Radio value="Yes">Yes</Radio>
              <Radio value="No">No</Radio>
            </RadioGroup>
            <Button
              type="submit"
              size="lg"
              variant="solid"
              className="capitalize font-semibold font-Lato text-white hover:text-white bg-black-gradient"
            >
              Submit
            </Button>
          </form>
        </div>
        <div className="w-full text-white flex flex-col  items-center gap-5 py-5">
          <p className="font-medium text-base md:text-lg md:text-left w-4/5 tracking-normal leading-relaxed">
            If you are not ready to jump on the phone with us quite yet or just
            want a simple web question answered, please leave an inquiry below
            or email us at prithvi@webibee.com We will get back to you within 24
            hours of your inquiry or email.
          </p>
          {/* <p className="font-medium text-lg md:text-xl text-center tracking-normal leading-relaxed border border-primary py-1.5 px-3 w-max rounded-lg bg-black">
            +91-7358023088
          </p>
          <div className="p-1 my-3 rounded-full border-2 border-primary z-40 bg-black w-max mx-auto text-xs">
            OR
          </div> */}
          <div className="w-max mx-auto mb-4">
            <Button
              as={Link}
              href="https://calendar.app.google/dUU7BcdHo1Y61M1v6"
              target="blank"
              size="lg"
              variant={"solid"}
              className="capitalize font-semibold font-Lato  text-white bg-black-gradient"
            >
              Free Consultation
            </Button>
          </div>
        </div>
     
      </div>
    </Element>
  );
}
