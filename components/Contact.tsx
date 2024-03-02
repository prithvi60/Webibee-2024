"use client";
import { services } from "@/libs/data";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import Link from "next/link";
import { Element } from "react-scroll";

export default function Contact() {
  // const formRef = useRef(null);
  return (
    <Element className="padding-variable bg-primary" name="Contact">
      <h1 className="font-Montserrat text-5xl md:text-7xl text-center text-default font-medium">
        Contact Us
      </h1>
      <hr className="w-[17rem] mx-auto p-0.5 bg-default border-t-0 rounded-md" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center pt-3 md:pt-10">
        <div className="w-full bg-default mx-auto rounded-lg">
          <div className="bg-success rounded-t-lg py-3 space-y-2">
            <h2 className="font-Montserrat text-2xl md:text-4xl text-center text-default ">
              Inquiry Form
            </h2>
            <p className="font-Lato font-semibold text-base md:text-lg text-center text-default">
              We will get in touch with you shortly
            </p>
            {/* <div className="p-1 my-3 rounded-full border-2 border-primary z-40 bg-default w-max mx-auto text-xs">
            OR
          </div> */}
            {/* <div className="w-max mx-auto mb-4">
            <Button
              as={Link}
              href="#"
              color="primary"
              size="md"
              variant="ghost"
              className="capitalize font-bold text-default">
              Book a google meet
            </Button>
          </div> */}
          </div>
          <form
            action="https://public.herotofu.com/v1/1da5cb00-21a1-11ee-a1b3-8ba321abde38"
            method="POST"
            className="space-y-5 bg-secondary overflow-hidden py-10 px-5  md:px-10 rounded-b-lg !font-Lato"
            acceptCharset="UTF-8"
            // ref={formRef}
            // onSubmit={() =>
            //   setTimeout(() => {
            //     formRef?.current.reset();
            //   }, 1500)
            // }
          >
            <Input
              isRequired
              size="lg"
              type="email"
              label="Email"
              name="Email"
              id="Email"
              className="w-full bg-default rounded-md !overflow-hidden"
            />
            <Input
              type="text"
              size="lg"
              name="Phone"
              id="Phone"
              label="Number"
              className="w-full bg-default rounded-md !overflow-hidden"
            />
            <Input
              isRequired
              type="text"
              size="lg"
              name="Company"
              id="Company"
              label="Company Name"
              className="w-full bg-default rounded-md !overflow-hidden"
            />
            <Select
              selectionMode="multiple"
              isRequired
              size="lg"
              name="Service"
              id="Service"
              label="What service do you require? "
              placeholder="Select an service"
              defaultSelectedKeys={[services[0].label]}
              className="w-full bg-default rounded-md placeholder:text-slate-500 !overflow-hidden"
            >
              {services.map((service) => (
                <SelectItem key={service.value} value={service.value}>
                  {service.label}
                </SelectItem>
              ))}
            </Select>
            {/* <Select
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
            </Select> */}
            {/* <RadioGroup
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
            </RadioGroup> */}
            <div className="w-full text-center">
              <Button
                type="submit"
                // size="lg"
                variant="solid"
                className="px-14 py-6 text-lg md:text-xl capitalize font-semibold font-Lato text-default hover:text-default bg-danger hover:animate-appearance-in"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
        <div className="w-full text-default flex flex-col  items-center gap-5 py-5">
          <p className="text-base md:text-lg md:text-left w-4/5 tracking-normal leading-relaxed font-Lato">
            If you are not ready to jump on the phone with us quite yet or just
            want a simple web question answered, please leave an inquiry below
            or email us at
            <span className="mx-2 font-bold hover:text-default/70 underline underline-offset-2 hover:animate-appearance-in">
              <Link passHref={true}
                title="email address"
                href="mailto: support@webibee.com"
                target="_blank"
              >
                support@webibee.com
              </Link>
            </span>
            . We will get back to you within 24 hours of your inquiry or email.
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
              passHref={true}
              title="Free Consultation"
              href="https://calendar.app.google/dUU7BcdHo1Y61M1v6"
              target="blank"
              size="lg"
              variant={"solid"}
              className="capitalize font-semibold font-Lato  text-default bg-danger hover:animate-appearance-in"
            >
              Book a Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </Element>
  );
}
