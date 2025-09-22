import Categories from "@/components/Categories";
import FAQ from "@/components/FAQ";
import AllMarketingNeeds from "@/components/lge/AllMarketingNeeds";
import E2EServices from "@/components/lge/E2EServices";
import { LGEHero } from "@/components/lge/LGEHero";
import Pricing from "@/components/lge/Pricing";
import WhatWeDo from "@/components/lge/WhatWeDo";
import WhyWebibee from "@/components/lge/WhyWebibee";
import Testimonials from "@/components/Testimonials";
import { LGEFaqs } from "@/libs/data";
import { headers } from "next/headers";

const Page = async () => {
    const country = (await headers()).get("x-vercel-ip-country") || "Unknown";
    // try {
    //     const response = await fetch('http://localhost:3000/api/zoho/contacts', {
    //         cache: 'no-store' // Optional: prevents the response from being cached
    //     });

    //     if (!response.ok) {
    //         throw new Error(`Failed to fetch leads: ${response.statusText}`);
    //     }

    //     const data = await response.json();

    //     console.log("client side", data.data);


    // } catch (error) {
    //     console.error("Error fetching leads on the server:", error);
    //     // You could render an error state or an empty list
    //     return <div>An error occurred while fetching data.</div>;
    // }
    return (
        <main>
            <LGEHero />
            <E2EServices />
            <WhatWeDo />
            <AllMarketingNeeds />
            <WhyWebibee />
            <Categories />
            <Testimonials userCountry={country} lge />
            <Pricing userCountry={country} />
            <FAQ lists={LGEFaqs} lge />
        </main>
    )
};

export default Page;
