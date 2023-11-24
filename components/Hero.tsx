import Image from "next/image";
// import { IMG } from "@/constants"
const IMG = [
  { src: "/img-1.jpg", ratio: "aspect-box" },
  { src: "/img-3.jpg", ratio: "aspect-square" },
  { src: "/img-2.jpg", ratio: "aspect-box" },
  { src: "/img-4.jpg", ratio: "aspect-square" },
  { src: "/img-1.jpg", ratio: "aspect-box" },
  { src: "/img-3.jpg", ratio: "aspect-box" },
  { src: "/img-3.jpg", ratio: "aspect-box" },
  { src: "/img-2.jpg", ratio: "aspect-square" },
  { src: "/img-4.jpg", ratio: "aspect-box" },
];

const Hero = () => {
  return (
    <section className="pb-10 font-body bg-secondary">
      <div className="w-full h-full md:h-[80vh] md:flex md:justify-between gap-5 md:gap-2">
        {/* titlte card */}
        <div className="w-full md:w-2/5 text-white flex flex-col justify-center items-center gap-5 py-5">
          <h3 className="text-bold text-5xl tracking-wide font-header">
            Webibee world
          </h3>
          <p className="font-medium text-2xl text-center w-4/5">
            We build and design websites meant for sales
          </p>
          <hr className="w-3/5 p-0.5 bg-gradient"/>
        </div>
        {/* Masonary cards */}
        <div className="w-full h-[50vh] md:h-full md:w-3/5 py-5 overflow-hidden">
          <div className="gap-3 columns-2 md:columns-3 px-6 animate-vertical_carousel rounded-xl">
            {IMG.map((item, idx) => (
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
            {IMG.map((item, idx) => (
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
