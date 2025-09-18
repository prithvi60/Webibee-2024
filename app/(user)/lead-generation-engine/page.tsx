import Categories from "@/components/Categories";
import FAQ from "@/components/FAQ";
import AllMarketingNeeds from "@/components/lge/AllMarketingNeeds";
import E2EServices from "@/components/lge/E2EServices";
import { LGEHero } from "@/components/lge/LGEHero";
import WhatWeDo from "@/components/lge/WhatWeDo";
import WhyWebibee from "@/components/lge/WhyWebibee";
import Testimonials from "@/components/Testimonials";
import { LGEFaqs } from "@/libs/data";
import { headers } from "next/headers";

const Page = async () => {
    const country = (await headers()).get("x-vercel-ip-country") || "Unknown";
    return (
        <main>
            <LGEHero />
            <E2EServices />
            <WhatWeDo />
            <AllMarketingNeeds />
            <WhyWebibee />
            <Categories />
            <Testimonials userCountry={country} />
            <FAQ lists={LGEFaqs} />
        </main>
    )
};

export default Page;
