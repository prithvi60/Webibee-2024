import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import PortfolioSlider from "@/components/PortfolioSlider";
import Categories from "@/components/Categories";
import { headers } from "next/headers";

export default async function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Webibee Software Agency',
    image: "https://cdn.webibee.com/Webibee/webibeepurplelogo.png",
    description: "Business Tech for Small Medium Enterprises across the globe",
    email: "support@webibee.com",
    url: "https://webibee.com"
  }
  const country = (await headers()).get("x-vercel-ip-country") || "Unknown";

  return (
    <div className="overflow-x-hidden">
      <Hero />
      <PortfolioSlider />
      <Categories />
      <Testimonials userCountry={country} />
      <Services />
      <FAQ userCountry={country} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}