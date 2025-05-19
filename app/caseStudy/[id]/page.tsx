import AboutClient from "@/components/CaseStudyPage/AboutClient";
import CSHero from "@/components/CaseStudyPage/CSHero";
import OCSection from "@/components/CaseStudyPage/OCSection";
import Result from "@/components/CaseStudyPage/Result";
import { caseStudies } from "@/libs/data";
import React from "react";

interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

const Page: React.FC<PageProps> = async ({ params }) => {
    const { id } = await Promise.resolve(params);
    const filteredData = caseStudies.find((data) => data.href === id);


    if (!filteredData) {
        return (
            <div className="p-10 space-y-6 sm:px-20 xl:px-64 sm:py-16 xl:py-28 font-EbGaramond text-xl font-semibold animate-pulse tracking-widest flex justify-center items-center h-screen sm:text-2xl xl:text-3xl">
                Case study Under Progress ...
            </div>
        );
    }

    return (
        <div>
            <CSHero
                data={filteredData.table}
                title={filteredData.title}
                bgImg={filteredData?.mainBgImg}
                bgVideo={filteredData?.video}
                slides={filteredData.slides}
                summary={filteredData.summary}
            />
            <AboutClient title={filteredData.title} about={filteredData.about} />
            <OCSection OCLists={filteredData.OCLists} />
            <Result
                results={filteredData.results}
                data={filteredData.images}
                testimonialImg={filteredData.testimonialImg}
                testimonialName={filteredData.testimonialName}
                testimonialPosition={filteredData.testimonialPosition}
                testimonials={filteredData.testimonials}
            />
        </div>
    );
};

export default Page;
