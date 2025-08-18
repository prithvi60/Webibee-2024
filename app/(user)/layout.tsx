import Contact from '@/components/Contact'
import FloatingButton from '@/components/FloatingButton'
import Footer from '@/components/Footer'
import NavBar from '@/components/Navbar'
import ScrollToTopButton from '@/components/ScrollToTopButton'
import SmoothScroll from '@/components/SmoothScroll'
import React from 'react'

interface SiteLayoutProps {
  children: React.ReactNode;
}

const SiteLayout = ({ children }: SiteLayoutProps) => {
  return (
    <main>
      <NavBar />
      <SmoothScroll />
      {children}
      <Contact />
      <Footer />
      <FloatingButton />
      <ScrollToTopButton />
    </main>
  )
}

export default SiteLayout