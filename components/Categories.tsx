import { categories, categories2 } from '@/libs/data'
import Image from 'next/image'
import React from 'react'

const Categories = () => {
    return (
        <section className='p-10 overflow-visible min-h-screen sm:px-20 xl:px-64 sm:py-16 xl:py-28 flex flex-col lg:flex-row gap-10 lg:justify-between'>
            <div className='w-full lg:w-[45%] h-fit-content md:mr-6 xl:mr-7'>
                <div className='lg:sticky lg:top-5 space-y-12'>
                    <h4 className='font-EbGaramond text-2xl md:text-4xl xl:text-6xl tracking-wider font-medium'>Crafting Impact Across <strong className='text-info'>Industries</strong></h4>
                    <p className='text-base md:text-lg font-SourceCodePro'>Our work transforms visions into digital realities, elevating brands across diverse industries. Whether designing sleek portfolios for clothing brands or crafting immersive experiences for interior designers, we blend creativity with functionality. Every project is a testament to innovation and attention to detail.</p>
                </div>
            </div>
            <div className='flex no_scrollbar md:justify-center flex-row md:flex-col lg:flex-row gap-5 max-w-2xl md:max-w-full lg:w-[55%] overflow-x-scroll lg:overflow-x-visible h-full'>
                <div className="flex flex-row lg:flex-col gap-5 lg:gap-10">
                    {categories.map((category, idx) => (
                        <div
                            key={idx}
                            className="p-5 w-52 md:w-64 lg:w-[280px] border-4 border-[#DFE3E8] h-full sm:h-72 xl:h-96 flex flex-col items-center justify-center gap-10"
                        >
                            <div className='relative mx-auto w-40 h-20'>
                                <Image fill alt='logo' className='object-contain object-center' src={category.logo} />
                            </div>
                            <hr className="w-full h-1.5 bg-[#404040] rounded-md" />
                            <div className="text-[#404040] text-base tracking-wider md:text-xl block space-y-1.5 text-center uppercase font-EbGaramond font-bold">
                                <h4>{category.title}</h4>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex flex-row lg:flex-col gap-5 lg:gap-10 lg:mt-24">
                    {categories2.map((category, idx) => (
                        <div
                            key={idx}
                            className="p-5 w-52 md:w-64 lg:w-[280px] border-4 border-[#DFE3E8] h-full sm:h-72 xl:h-96 flex flex-col items-center justify-center gap-10"
                        >
                            <div className='relative mx-auto w-40 h-20'>
                                <Image fill alt='logo' className='object-contain object-center' src={category.logo} />
                            </div>
                            <hr className="w-full h-1.5 bg-[#404040] rounded-md" />
                            <div className="text-[#404040] text-base tracking-wider md:text-xl block space-y-1.5 text-center uppercase font-EbGaramond font-bold">
                                <h4>{category.title}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Categories
