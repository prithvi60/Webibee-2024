import { LGEServices } from '@/libs/data'
import React from 'react'

const WhatWeDo = () => {
    return (
        <section
            className={`w-full p-10 sm:px-20 xl:px-64 sm:py-16 xl:py-28 space-y-4 block md:space-y-7`}
        >
            <h2 className="font-EbGaramond font-medium text-center capitalize text-5xl sm:text-6xl xl:text-7xl">
                What we do for you
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 pt-10 md:pt-16">
                {LGEServices.map((item, idx) => (
                    <div
                        className="border-l-4 border-info bg-[#EDE6FF] rounded-xl shadow-sm overflow-hidden px-5 pt-5 pb-12 md:p-8 space-y-4 md:min-h-[460px]"
                        key={idx}
                    >
                        <div className="relative bg-primary shadow-sm p-2.5 md:p-4 rounded-2xl inline-block mb-6">
                            {item.icon}
                        </div>
                        <h3 className="font-EbGaramond font-semibold text-2xl sm:text-3xl xl:text-4xl">
                            {item.title}
                        </h3>
                        <ul className="list-disc space-y-2 md:space-y-4">
                            {item.summaryList.map((point, index) => (
                                <li className='font-SourceCodePro font-normal text-base sm:text-lg !leading-normal ml-5 md:ml-6' key={index}>
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default WhatWeDo