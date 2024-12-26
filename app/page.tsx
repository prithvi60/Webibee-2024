import AboutUs from "@/components/AboutUs";
import Collaboration from "@/components/Collaboration";
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
    name: 'Webibee',
    image: "https://ik.imagekit.io/webibee/Agency/brain-logo.svg",
    description: "Webibee crafts stunning websites that help businesses flourish",
    email: "support@webibee.com",
    url: "https://webibee.com"
  }
  return (
    <div>
      <Hero />
      <PortfolioSlider />
      <Categories />
      <Testimonials />
      <AboutUs />
      <Collaboration />
      <Services />
      <FAQ />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}