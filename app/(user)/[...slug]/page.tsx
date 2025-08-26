import ContactData from "@/components/contact/ContactData";
import AboutPage from "@/components/dynamicPage/AboutPage";
import CounterStats from "@/components/dynamicPage/CounterStats";
import FAQ from "@/components/FAQ";
import { aboutData, dynamicContactDetails } from "@/libs/data";
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

    const FilteredData = dynamicContactDetails.filter(
        (item) => item.category === routeInfo.prefix
    );

    if (FilteredData.length === 0) {
        return NotFound();
    }

    return (
        <div>
            <ContactData
                seo
                data={FilteredData[0].ContactDetails}
                location={routeInfo.city !== null ? routeInfo.city : null}
            />
            <CounterStats
                data={FilteredData[0].counterStatus}
                location={routeInfo.city !== null ? routeInfo.city : null}
            />
            <AboutPage
                data={FilteredData[0].aboutSection[0]}
                category={FilteredData[0].category}
                location={routeInfo.city !== null ? routeInfo.city : null}
            />
            <AboutPage
                data={FilteredData[0].aboutSection[1]}
                reverse
                category={FilteredData[0].category}
                location={routeInfo.city !== null ? routeInfo.city : null}
            />
            <AboutPage
                data={FilteredData[0].aboutSection[2]}
                category={FilteredData[0].category}
                location={routeInfo.city !== null ? routeInfo.city : null}
            />
            <AboutPage
                data={FilteredData[0].aboutSection[3]}
                reverse
                category={FilteredData[0].category}
                location={routeInfo.city !== null ? routeInfo.city : null}
            />
            {FilteredData[0].aboutSection[4] && (
                <AboutPage
                    data={FilteredData[0].aboutSection[4]}
                    category={FilteredData[0].category}
                    location={routeInfo.city !== null ? routeInfo.city : null}
                />
            )}
            <FAQ />
        </div>
    );
};

export default Page;
