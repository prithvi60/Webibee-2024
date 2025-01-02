import React from "react";

const ContactForm = () => {
    return (
        <section className="w-full p-10 sm:px-20 xl:px-64 sm:py-16 xl:py-28 flex flex-col md:flex-row gap-20 items-center">
            <div className="w-full md:w-2/5 space-y-7 md:space-y-14">
                <h3 className="font-EbGaramond font-medium text-5xl sm:text-7xl xl:text-8xl ">
                    Let’s <strong className="text-info">talk</strong>
                </h3>
                <p className="font-SourceCodePro font-normal text-sm sm:text-base !leading-tight">
                    Have a project to discuss?<br /> Looking to partner with us?
                </p>
                <p className="font-SourceCodePro font-normal text-sm sm:text-base">
                    Drop us a line...
                </p>
            </div>
            <form className="w-full md:w-3/5">
                <div className="flex flex-col gap-6">
                    <input
                        type="text"
                        placeholder="Full Name*"
                        required
                        className="bg-info/25 text-base md:text-lg font-SourceCodePro focus:ring-1 px-5 py-3 placeholder:text-[#757272] focus:outline-info/80"
                    />
                    <input
                        type="email"
                        placeholder="Email Address*"
                        required
                        className="bg-info/25 text-base md:text-lg font-SourceCodePro focus:ring-1 px-5 py-3 placeholder:text-[#757272] focus:outline-info/80"
                    />
                    <input
                        type="text"
                        placeholder="Company*"
                        required
                        className="bg-info/25 text-base md:text-lg font-SourceCodePro focus:ring-1 px-5 py-3 placeholder:text-[#757272] focus:outline-info/80"
                    />
                    <input
                        type="text"
                        placeholder="Department*"
                        required
                        className="bg-info/25 text-base md:text-lg font-SourceCodePro focus:ring-1 px-5 py-3 placeholder:text-[#757272] focus:outline-info/80"
                    />
                    <input
                        type="text"
                        placeholder="Phone number*"
                        required
                        className="bg-info/25 text-base md:text-lg font-SourceCodePro focus:ring-1 px-5 py-3 placeholder:text-[#757272] focus:outline-info/80"
                    />
                    <textarea
                        rows={5}
                        placeholder="Message"
                        className="bg-info/25 text-base md:text-lg font-SourceCodePro focus:ring-1 px-5 py-3 placeholder:text-[#757272] focus:outline-info/80"
                    />
                    <button className="bg-info/80 text-white font-SourceCodePro font-medium text-base sm:text-lg xl:text-xl p-2 rounded-md hover:bg-info active:bg-neutral-700">
                        Submit
                    </button>
                </div>
            </form>
        </section>
    );
};

export default ContactForm;
