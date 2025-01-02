import React from "react";
import DotExpandButton from "../buttons/DotExpandButton";

const WorksHero = () => {
  return (
    <section className="md:pb-28 p-10 sm:px-20 xl:px-64 sm:pt-16 xl:pt-28 space-y-20">
      <h3 className="font-EbGaramond font-medium text-5xl w-full md:w-4/5 sm:text-7xl xl:text-9xl tracking-wide !leading-tight text-center md:text-start">
        Craft with{" "}
        <strong className="font-extrabold text-info">CODE, SCALE </strong>with
        Confidence
      </h3>
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-10 md:gap-5">
        <p className="font-SourceCodePro w-full md:w-3/5 text-lg md:text-xl xl:text-2xl">Coding unlocks full control, customization, and long-term growth.</p>
        <DotExpandButton href="#" text="Check out our Works" />
      </div>
    </section>
  );
};

export default WorksHero;
