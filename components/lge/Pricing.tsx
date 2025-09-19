import React from 'react'
import AccordionForLGE from './AccordionForLGE'

const Pricing = ({ userCountry }: { userCountry: string }) => {
    return (
        <section className={`w-full p-10 sm:px-20 xl:px-64 sm:py-16 xl:py-28 space-y-4 block md:space-y-7 text-center bg-[#EDE6FF]`}>
            <h2 className="w-max mx-auto font-SourceCodePro font-medium capitalize text-sm px-4 py-2.5 rounded-full border border-info/50">
                Transparent, SME-friendly pricing
            </h2>
            <h3 className="font-EbGaramond font-semibold capitalize text-5xl sm:text-6xl xl:text-7xl">
                Pricing
            </h3>
            <p className="font-SourceCodePro text-[#4D4D4D] font-normal text-sm sm:text-base !leading-normal w-full xl:w-4/5 mx-auto">
                No hidden fees. <strong>50% Refund</strong> on service fee within cancellation under a month. For custom requirements please book our free consultation.
            </p>
            <div>
                <AccordionForLGE userCountry={userCountry} />
            </div>
        </section>
    )
}

export default Pricing