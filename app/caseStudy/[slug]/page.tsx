import AboutClient from '@/components/CaseStudyPage/AboutClient';
import CSHero from '@/components/CaseStudyPage/CSHero';
import OCSection from '@/components/CaseStudyPage/OCSection';
import Result from '@/components/CaseStudyPage/Result';
import React from 'react'

const Page = ({ params }: { params: { slug: string } }) => {
    const { slug } = params;
    return (
        <div>
            <CSHero />
            <AboutClient />
            <OCSection />
            <Result />
        </div>
    )
}

export default Page
