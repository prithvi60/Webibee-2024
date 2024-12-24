import React from 'react'

const Contact = () => {
    return (
        <section className='w-full p-10 sm:px-12 xl:pt-12 xl:pb-6 max-w-5xl mx-auto text-center'>
            <div className='block space-y-12 lg:space-y-16'>
                <h4 className='font-EbGaramond text-2xl tracking-wider capitalize sm:text-5xl  xl:text-6xl'>Ignite Your <span className='font-extrabold text-info'>Vision</span> Today</h4>
                <div className='block space-y-6 lg:space-y-10'>
                    <h6 className='font-SourceCodePro tracking-wide text-lg sm:text-2xl xl:text-3xl'>Feel the Impact</h6>
                    <p className='text-sm sm:text-lg xl:text-xl font-SourceCodePro text-[#868686]'>Ready to Elevate Your Brand?</p>
                    <button className='uppercase font-SourceCodePro text-base sm:text-lg xl:text-xl py-3 px-6 rounded-md hover:bg-info/80 hover:text-white transition duration-300 ease-in-out border-2'>
                        GET IN TOUCH
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Contact
