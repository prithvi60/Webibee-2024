import ContactData from "@/components/contact/ContactData";
import ContactForm from "@/components/contact/ContactForm";
import AboutPage from "@/components/dynamicPage/AboutPage";
import CounterStats from "@/components/dynamicPage/CounterStats";
import FAQ from "@/components/FAQ";
import { aboutData } from "@/libs/data";

interface PageProps {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const Page = async ({ params }: PageProps) => {
    const { slug } = await params;

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