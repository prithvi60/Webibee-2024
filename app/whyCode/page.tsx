import HowItWorks from '@/components/whyCode/HorizontalScrollCarousel'
import WorksHero from '@/components/whyCode/WCHero'
import WCTable from '@/components/whyCode/WCTable'
import React from 'react'

const Page = () => {
    return (
        <div>
            <WorksHero />
            {/* <HowItWorks /> */}
            <HowItWorks />
            <WCTable />
        </div>
    )
}

export default Page
