"use client";
import React, { useState } from "react";

// Using lucide-react for the icons. You can also use inline SVGs or other icon libraries.
const AccordionForLGE = ({ userCountry }: { userCountry: string }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(1);

    const items = [
        {
            title: "Starter",
            price: userCountry === "IN" ? "₹25,000/month" : "$500/month",
            description: "Ads + Landing Page Setup",
            content: [
                "Full Lead Engine + Automation",
                "Full Lead Engine + Automation",
                "Full Lead Engine + Automation",
                "Full Lead Engine + Automation",
            ],
        },
        {
            title: "Growth",
            price: userCountry === "IN" ? "₹40,000/month" : "$900/month",
            description: "Full Lead Engine + Automation",
            content: [
                "Full Lead Engine + Automation",
                "Full Lead Engine + Automation",
                "Full Lead Engine + Automation",
                "Full Lead Engine + Automation",
            ],
        },
        {
            title: "Scale",
            price: userCountry === "IN" ? "₹65,000/month" : "$1500/month",
            description: "Multi-channel Ads + Advanced Automation",
            content: [
                "Full Lead Engine + Automation",
                "Full Lead Engine + Automation",
                "Full Lead Engine + Automation",
                "Full Lead Engine + Automation",
            ],
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
                        className={`
              bg-white rounded-2xl transition-all duration-300
            `}
                    >
                        <div
                            className={`
                flex items-center justify-between p-6 cursor-pointer rounded-2xl
              `}
                            onClick={() => handleToggle(index)}
                        >
                            <div className="flex flex-col">
                                <span className="text-xl text-left font-semibold">
                                    {item.title}
                                </span>
                                <span className="text-gray-600 text-sm">
                                    {item.description}
                                </span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <span
                                    className="
                  bg-purple-200 text-purple-800 font-bold py-2 px-4 rounded-full
                  bg-opacity-50
                "
                                >
                                    {item.price}
                                </span>
                                <button
                                    className="
                    bg-purple-600 text-white rounded-full p-2
                    hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500
                    w-10 h-10 flex items-center justify-center
                  "
                                >
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
                            className={`
                overflow-hidden transition-all duration-500
                ${openIndex === index ? "max-h-96 opacity-100 p-6 pt-0" : "max-h-0 opacity-0"}
              `}
                        >
                            <ul className="list-none space-y-2 text-gray-700">
                                {item.content.map((bullet, contentIndex) => (
                                    <li key={contentIndex} className="flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4 text-purple-600 mr-2"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        {bullet}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AccordionForLGE;
