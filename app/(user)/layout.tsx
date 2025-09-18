import Contact from '@/components/Contact'
import FloatingButton from '@/components/FloatingButton'
import Footer from '@/components/Footer'
import NavBar from '@/components/Navbar'
import ScrollToTopButton from '@/components/ScrollToTopButton'
import SmoothScroll from '@/components/SmoothScroll'
import { headers } from 'next/headers'
import React from 'react'

interface SiteLayoutProps {
  children: React.ReactNode;
}

const SiteLayout = async ({ children }: SiteLayoutProps) => {
  // Read the custom header set by the middleware
  const country = (await headers()).get("X-User-Country") || "unknown";
  return (
    <main>
      <NavBar />
      {/* <SmoothScroll /> */}
      {children}
      <Contact />
      <Footer />
      <FloatingButton userCountry={country} />
      <ScrollToTopButton />
    </main>
  )
}

export default SiteLayout