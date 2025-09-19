import React from 'react'
import AccordionForLGE from './AccordionForLGE'

const Pricing = ({ userCountry }: { userCountry: string }) => {
    return (
        <section className={`w-full py-10 sm:px-10 sm:py-16 xl:py-28 `}>
            <div className='bg-[#EDE6FF] space-y-4 px-10 sm:px-14 lg:px-0 py-[78px] block md:space-y-7 text-center rounded-3xl'>
                <h2 className="w-max mx-auto font-SourceCodePro font-medium capitalize text-sm px-4 py-2.5 rounded-full border border-info/50">
                    Transparent, SME-friendly pricing
                </h2>
                <h3 className="font-EbGaramond font-semibold capitalize text-5xl sm:text-6xl xl:text-7xl">
                    Pricing
                </h3>
                <p className="font-SourceCodePro text-[#4D4D4D] font-normal text-base sm:text-lg lg:text-xl !leading-normal w-full xl:w-4/5 mx-auto">
                    No hidden fees. <strong>50% Refund</strong> on service fee within cancellation under a month. For custom requirements please book our free consultation.
                </p>
                <div>
                    <AccordionForLGE userCountry={userCountry} />
                </div>
            </div>
        </section>
    )
}

export default Pricing