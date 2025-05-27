import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <section className="w-full">
      <div className="md:pb-28 p-10 sm:px-20 xl:px-64 sm:pt-16 xl:pt-28 space-y-10">
        <h5 className="font-SourceCodePro font-semibold tracking-wider text-base sm:text-lg">
          Small team, <strong className="text-info">big</strong> solutions.
        </h5>
        <h3 className="font-EbGaramond font-medium text-5xl w-full sm:text-7xl xl:text-9xl tracking-wide !leading-tight">
          Affordable &{" "}
          <strong className="font-extrabold text-info">Scalable</strong> ideas
          tailored for you.
        </h3>
        <div className="flex flex-col md:flex-row justify-between items-center gap-14 md:gap-5 overflow-hidden font-SourceCodePro pb-10">
          <div className="relative basis-full md:basis-3/5 pb-20 md:pb-0">
            <p className="font-normal text-base sm:text-lg xl:text-xl !leading-10">
              Webibee began with a shared desire to make complex technology
              accessible to businesses of all sizes. With a focus on simplicity,
              innovation, and quality, we started as a small team working with
              SMEs, helping them digitize and streamline operations. Over the
              years, we've built a reputation for delivering high-quality web
              development, custom SaaS solutions, and digital marketing that
              drive results.
            </p>
            <div className="absolute -bottom-24 md:-bottom-52 left-0 h-64 w-full md:h-80">
              <Image
                alt="svg"
                src={
                  "https://mywebibeeworld.b-cdn.net/Webibee/bg%20svg.svg"
                }
                fill
                className="object-contain object-center"
              />
            </div>
          </div>
          <div className="relative w-64 h-64 md:w-full md:h-80 md:basis-2/5">
            <Image
              alt="illustration"
              src={
                "https://mywebibeeworld.b-cdn.net/Webibee/illustration-1.svg"
              }
              fill
              className="object-contain object-center"
            />
          </div>
        </div>
      </div>
      <div className="relative bg-secondary min-h-screen p-10 sm:px-20 xl:px-64 sm:py-16 xl:py-28 space-y-6">
        <div className="flex flex-col-reverse md:flex-row md:items-start justify-between items-center gap-14 md:gap-16 overflow-visible h-full">
          <div className="w-full md:w-1/2">
            <div className="md:sticky md:top-5">
              <iframe
                src="https://www.youtube.com/embed/DRxUfXXEOk4"
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-md w-full h-[400px] md:h-[600px]"
              ></iframe>
            </div>
          </div>
          <div className="font-semibold text-base sm:text-lg md:text-xl basis-full md:basis-1/2 !leading-10">
            <p>
              At Webibee, we empower small and medium-sized enterprises (SMEs)
              by providing essential Business Tech that help them thrive in the
              modern business landscape. Our mission is to deliver tailored,
              cutting-edge technologies and compelling digital experiences that
              transform how businesses operate, engage with customers, and scale
              effectively.
            </p>
            <br />
            <p>
              Our journey began by recognizing the challenges entrepreneurs face
              when navigating the fast-changing tech landscape. We set out to
              create affordable, efficient, and scalable solutions that help
              businesses not only survive but thrive. Whether you’re looking to
              build your first{" "}
              <span className="font-extrabold italic tracking-wide">
                website, optimize processes, or scale rapidly,
              </span>{" "}
              Webibee offers the perfect blend of{" "}
              <span className="font-extrabold italic tracking-wide">
                technology, creativity, and strategic insights
              </span>{" "}
              to turn your ideas into reality
            </p>
          </div>
        </div>
        {/* <div className="w-full flex justify-end items-center ">
          <p className="font-normal text-base sm:text-lg xl:text-xl text-right !leading-10 w-full md:w-1/2">
            At Webibee, we empower small and medium-sized enterprises (SMEs) by
            providing essential Business Tech that help them thrive in the
            modern business landscape. Our mission is to deliver tailored,
            cutting-edge technologies and compelling digital experiences that
            transform how businesses operate, engage with customers, and scale
            effectively.
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default AboutUs;
