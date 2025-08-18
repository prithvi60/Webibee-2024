import ContactData from "@/components/contact/ContactData";
import AboutPage from "@/components/dynamicPage/AboutPage";
import CounterStats from "@/components/dynamicPage/CounterStats";
import FAQ from "@/components/FAQ";
import { aboutData } from "@/libs/data";
import { ParseRoute } from "@/libs/ParsePlaces";
import NotFound from "./not-found";

interface PageProps {
    params: Promise<{ slug: string[] }>;
    searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

const Page = async ({ params }: PageProps) => {
    const { slug } = await params;
    const fullPath = Array.isArray(slug) ? slug.join("/") : slug;

    // Parse the route
    const routeInfo = ParseRoute(fullPath);

    if (!routeInfo) {
        return NotFound();
    }

    return (
        <div>
            <ContactData seo />
            <CounterStats />
            <AboutPage data={aboutData[0]} />
            <AboutPage data={aboutData[1]} reverse />
            <AboutPage data={aboutData[2]} />
            <FAQ />
        </div>
    );
};

export default Page;