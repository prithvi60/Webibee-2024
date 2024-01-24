import { knowmore } from "@/libs/data";
import Image from "next/image";
import Link from "next/link";

export const KnowMore = () => {
  return (
    <section className="padding-variable font-Lato bg-gradient">
      <div>
        <h3 className="capitalize text-5xl md:text-7xl w-full mx-auto tracking-wide font-Montserrat font-bold text-center text-white">
          Know More
        </h3>
        <hr className="w-56 mt-4 mx-auto p-0.5 border-t-0 rounded-md bg-gradient" />
      </div>
      <div className="w-full h-full md:h-[80vh] md:flex md:justify-between gap-5 md:gap-2 py-10">
        {/* titlte card */}
        <div className="w-full md:w-2/5 text-white flex flex-col justify-center items-center gap-5 py-5">
          <h3 className="text-bold text-2xl md:text-3xl tracking-wide font-Montserrat text-center">
           <span className="font-Caveat font-medium text-2xl md:text-4xl me-3">  Check out 👉</span>
          </h3>
          <p className="font-medium text-base md:text-lg text-left w-4/5 tracking-normal leading-relaxed">
            We are very active on Instagram and LinkendIn and love actively participating in global communities.
          
          </p>
          {/* <hr className="w-3/5 p-0.5 bg-gradient" /> */}
        </div>
        {/* Masonary cards */}
        <div className="w-full h-[50vh] md:h-full md:w-3/5 py-5 overflow-hidden">
          <Link href={"https://www.instagram.com/prithvi_bytes/?hl=en"} target={"_blank"}>
          <div className="gap-3 columns-2 md:columns-3 px-6 animate-vertical_carousel  rounded-xl">
            {knowmore.map((item, idx) => (
              <div
                className={`${item.ratio} rounded-md relative overflow-hidden mb-3`}
                key={idx}
              >
                <Image
                  alt="..."
                  fill
                  src={item.src}
                  className="object-cover object-center mb-3"
                />
              </div>
            ))}
          </div>
          <div className="gap-3 columns-2 md:columns-3 px-6 animate-vertical_carousel rounded-xl">
            {knowmore.map((item, idx) => (
              <div
                className={`${item.ratio} rounded-md relative overflow-hidden mb-3`}
                key={idx}
              >
                <Image
                  alt="..."
                  fill
                  src={item.src}
                  className="object-cover object-center mb-3"
                />
              </div>
            ))}
          </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
