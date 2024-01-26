import Benefits from '@/components/Benefits';
import ClientHighlight from '@/components/ClientHighlight';
import Contact from '@/components/Contact';
import FAQ from '@/components/FAQ';
import Hero from '@/components/Hero';
// import { KnowMore } from '@/components/KnowMore';
import Portfolio from '@/components/Portfolio';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';
import Workflow from '@/components/Workflow';

export default function Home() {
  return (
    <div className='bg-secondary'>
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