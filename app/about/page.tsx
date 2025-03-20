import AboutHero from '@/components/about/AboutHero'
import AboutUs from '@/components/about/AboutUs'
import { VelocityText } from '@/components/about/VelocityText'
import Collaboration from '@/components/Collaboration'
import FAQ from '@/components/FAQ'
import React from 'react'

const Page = () => {
    return (
        <div>
            <AboutUs />
            <Collaboration />
            <FAQ />
        </div>
    )
}

export default Page
