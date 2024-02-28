import Benefits from '@/components/Benefits';
import Contact from '@/components/Contact';
import FAQ from '@/components/FAQ';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import Workflow from '@/components/Workflow';

export default function Home() {
  return (
    <div>
      <Hero/>
      <Portfolio/>
      <Benefits/>
      <Testimonials/>
      {/* <ClientHighlight/> */}
      <Workflow/>
      {/* <Team/> */}
      {/* <KnowMore /> */}
      <FAQ/>
      <Contact/>
    </div> 
  )
}

// bg-gradient-to-b from-[#904BF6] to-[#CFB2FA]