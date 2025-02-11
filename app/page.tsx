import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import PortfolioSlider from "@/components/PortfolioSlider";
import Categories from "@/components/Categories";

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Webibee Software Agency',
    image: "https://ik.imagekit.io/webibee/Webibee/webibeepurplelogo.png?updatedAt=1735897013322",
    description: "Business Tech for Small Medium Enterprises across the globe",
    email: "support@webibee.com",
    url: "https://webibee.com"
  }
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <PortfolioSlider />
      <Categories />
      <Testimonials />
      <Services />
      <FAQ />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}