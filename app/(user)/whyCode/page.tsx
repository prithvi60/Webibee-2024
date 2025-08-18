import HowItWorks from "@/components/whyCode/HorizontalScrollCarousel";
import LetsCreate from "@/components/whyCode/LetsCreate";
import WorksHero from "@/components/whyCode/WCHero";
import WCTable from "@/components/whyCode/WCTable";
import { howItWorks } from "@/libs/data";
import React from "react";

const Page = () => {
    return (
        <div>
            <WorksHero />
            <LetsCreate />
            <div className="md:pb-28 p-10 sm:px-20 xl:px-64 sm:pt-16 xl:pt-28">
                <HowItWorks data={howItWorks} title="Empowering developers to create robust, scalable solutions with the power of code." styles={"font-EbGaramond text-xl sm:text-2xl lg:text-3xl xl:text-4xl w-full md:w-3/5 font-bold !leading-tight text-[#181B30]"} />
            </div>
            <WCTable />
        </div>
    );
};

export default Page;
