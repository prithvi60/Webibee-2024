"use client";
import React, { useState } from "react";

// Using lucide-react for the icons. You can also use inline SVGs or other icon libraries.
const AccordionForLGE = ({ userCountry }: { userCountry: string }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(1);
    const SpanTag = ({ tag }: { tag: string }) => {
        return <strong className="pr-1">{tag}</strong>;
    };
    const items = [
        {
            title: "Starter - Marketing Made Simple",
            price: userCountry === "IN" ? "₹25,000" : "$500",
            description:
                "For businesses who want a solid foundation without the overwhelm.",
            content: [
                <>
                    <SpanTag tag="Consulting & Planning:" /> One-time strategy session to
                    prioritize efforts
                </>,
                <>
                    <SpanTag tag="Marketing Tools Setup:" /> CRM, email, or chatbot
                    (choose one)
                </>,
                <>
                    <SpanTag tag="Content Support:" /> 4 blogs OR 2 email campaigns per
                    month
                </>,
                <>
                    <SpanTag tag="Reports:" /> Simple monthly snapshot so you don’t waste
                    time guessing
                </>,
            ],
            benefit:
                "Benefit: Save hours setting up tools & figuring out content. You get a clear system that just works.",
        },
        {
            title: "Growth - Consistency Without Chaos",
            price: userCountry === "IN" ? "₹40,000" : "$900",
            description:
                "For teams who want ongoing execution and structured campaigns.",
            content: [
                <>
                    <SpanTag tag=" Consulting & Playbooks:" /> Sales enablement guidance +
                    quarterly planning
                </>,
                <>
                    <SpanTag tag="Web & Tech:" /> Landing page or website optimization
                    handled for you
                </>,
                <>
                    <SpanTag tag="Content & Media:" /> 8 content pieces (blogs/emails) + 4
                    reels
                </>,
                <>
                    <SpanTag tag="Creatives & Design:" /> Social media creatives, ad
                    visuals done for you
                </>,
                <>
                    <SpanTag tag="Reports:" /> Bi-weekly insights so you know what’s
                    working
                </>,
            ],
            benefit:
                "Benefit: No more juggling freelancers or scattered efforts. Everything runs smoothly and consistently.",
        },
        {
            title: "Scale - Your Marketing Department on Autopilot",
            price: userCountry === "IN" ? "₹65,000" : "$1500",
            description:
                "For scaling companies who want full support and automation.",
            content: [
                <>
                    <SpanTag tag="Consulting & Systems:" /> Full review of outdated
                    systems + roadmap
                </>,
                <>
                    <SpanTag tag="Web & Technology:" /> Website design/development +
                    CRM/API integrations
                </>,
                <>
                    <SpanTag tag="Content Engine:" /> Full content calendar (blogs, SEO,
                    email, reels, video editing)
                </>,
                <>
                    <SpanTag tag="Creatives & Design:" /> Brand refresh + AI-powered
                    design assets
                </>,
                <>
                    <SpanTag tag="Marketing Tools:" /> Advanced funnels & automated
                    campaigns
                </>,
                <>
                    <SpanTag tag="Reports & Dashboards:" /> Real-time dashboards + monthly
                    strategy reviews
                </>,
            ],
            benefit:
                "Benefit: Stop worrying about marketing execution. We plan, create, design, automate, and track — so you focus only on running your business.",
        },
    ];

    interface AccordionItem {
        title: string;
        price: string;
        description: string;
        content: string[];
    }

    const handleToggle = (index: number): void => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="flex justify-center items-center mt-14">
            <div className="w-full max-w-2xl space-y-4">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`bg-white rounded-2xl transition-all duration-300`}
                    >
                        <div
                            className={`flex items-start md:items-center justify-between p-6 cursor-pointer rounded-2xl`}
                            onClick={() => handleToggle(index)}
                        >
                            <div className="flex flex-col">
                                <span className="text-lg text-left font-semibold">
                                    {item.title}
                                </span>
                                <span className="text-gray-600 text-sm text-left">
                                    {item.description}
                                </span>
                                <span className="bg-purple-200 text-info font-bold py-2 px-4 rounded-full bg-opacity-50 text-xl md:text-2xl block sm:hidden mt-2">
                                    {item.price}
                                    <span className="text-black text-xs">/month</span>
                                </span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <span className="bg-purple-200 text-info font-bold py-2 px-4 rounded-full bg-opacity-50 text-xl md:text-2xl hidden sm:block">
                                    {item.price}
                                    <span className="text-black text-xs">/month</span>
                                </span>
                                <button className="bg-info text-white rounded-full p-2 hover:bg-info/70 focus:outline-none focus:ring-2 focus:ring-info/50 w-10 h-10 flex items-center justify-center">
                                    {openIndex === index ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-minus"
                                        >
                                            <path d="M5 12h14" />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-plus"
                                        >
                                            <path d="M5 12h14" />
                                            <path d="M12 5v14" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                        <div
                            className={`overflow-hidden transition-all font-SourceCodePro duration-500 ${openIndex === index ? "max-h-fit md:max-h-96 opacity-100 p-6 pt-0" : "max-h-0 opacity-0"}`}
                        >
                            <ul className="list-none space-y-2">
                                {item.content.map((bullet, contentIndex) => (
                                    <li key={contentIndex} className="flex text-left w-full">
                                        <span className="mt-1">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4 text-info mr-1"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </span>
                                        <p className="text-base md:text-lg">{bullet}</p>
                                    </li>
                                ))}
                            </ul>
                            <p className="font-normal text-base md:text-lg !leading-normal py-6 text-left">
                                {item.benefit}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AccordionForLGE;
