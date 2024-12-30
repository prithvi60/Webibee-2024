import AboutUs from '@/components/about/AboutUs'
import { VelocityText } from '@/components/about/VelocityText'
import Collaboration from '@/components/Collaboration'
import React from 'react'

const Page = () => {
    return (
        <div>
            <VelocityText />
            <AboutUs />
            <Collaboration />
        </div>
    )
}

export default Page
