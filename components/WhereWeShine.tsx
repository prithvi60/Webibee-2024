import { shine } from "@/libs/data";
import React from "react";
import { WeShine } from "./whyCode/HorizontalScrollCarousel";

const WhereWeShine = () => {
    return (
        <section className="px-10 pt-10 sm:px-20 xl:px-64">
            <WeShine
                data={shine}
                title={
                    "Where We <strong class='text-info font-bold'>SHINE?</strong>"
                }
                styles={
                    "font-EbGaramond font-medium text-5xl w-full sm:text-7xl tracking-wide !leading-tight text-center md:text-start font-bold !leading-tight text-[#1B1B1CCC]"
                }
            />
        </section>
    );
};

export default WhereWeShine;
