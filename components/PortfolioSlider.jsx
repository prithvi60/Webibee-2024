"use client"
import { portfolioImages } from '@/libs/data';
import Image from 'next/image'
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { useState } from 'react';
import Link from 'next/link';

const PortfolioSlider = () => {
    const [loading, setLoading] = useState(true);
    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 3,
        slidesPerRow: 1,
        nextArrow: <SampleNextArrow loading={loading} />,
        prevArrow: <SamplePrevArrow loading={loading} />,
    };

    const handleImageLoad = () => {
        setLoading(false);
    };
    return (
        <section className='py-10 sm:py-16 xl:py-28 w-full h-full'>
            {/* h-[45vh] sm:h-[55vh] md:h-[75vh] lg:h-[100vh] xl:h-[100vh]  */}
            <div className="slider-container relative">
                <Slider {...settings}>
                    {portfolioImages.map((image, index) => (
                        <Link href={image.href} className='relative w-full h-[50vh] sm:h-[60vh] md:h-[80vh]  lg:h-screen' key={index}>
                            <Image fill alt='image' src={image.img} className='object-contain object-center' onLoad={handleImageLoad} />
                        </Link>
                    ))}
                </Slider>
            </div>
        </section>
    )
}

export default PortfolioSlider


function SampleNextArrow(props) {
    const { onClick, loading } = props;
    return (
        <div
            className={`${loading && "hidden"} absolute top-20 sm:top-28 lg:top-28 right-0 sm:right-4 xl:right-16 rounded-full p-2.5 cursor-pointer hover:bg-info bg-slate-200/50 backdrop-blur-xl`}
            onClick={onClick}
        >
            <FaArrowRight className='text-xs sm:text-base xl:text-2xl text-white' />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick, loading } = props;
    return (
        <div
            className={`${loading && "hidden"} absolute p-2.5 cursor-pointer hover:bg-info top-20 sm:top-28 right-8 sm:right-16 xl:right-32 lg:top-28 rounded-full z-30 bg-slate-200/50 backdrop-blur-xl`}
            onClick={onClick}
        >
            <FaArrowLeft className='text-xs sm:text-base xl:text-2xl text-white' />
        </div>
    );
}