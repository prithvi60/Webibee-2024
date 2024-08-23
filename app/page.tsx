import Benefits from "@/components/Benefits";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import SocialMedia from "@/components/SocialMedia";
import Testimonials from "@/components/Testimonials";
import Workflow from "@/components/Workflow";

export default function Home() { 
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Webibee',
    image: "https://ik.imagekit.io/webibee/Agency/brain-logo.svg",
    description: "Webibee crafts stunning websites that help businesses flourish",
    email : "support@webibee.com",
    url : "https://webibee.com"
  } 
  return (
    <div>
      {/* <Hero/> */}
      <Portfolio />
      {/* <Benefits /> */}
      <Testimonials />
      {/* <Workflow /> */}
      <FAQ />
      {/* <SocialMedia/> */}
      <Contact />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}