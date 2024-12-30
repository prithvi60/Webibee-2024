"use client"
import React from 'react'
import { FiCheck, FiX } from "react-icons/fi";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const WCTable = () => {
    return (
        <section className="md:pb-28 p-10 sm:px-20 xl:px-64 sm:pt-16 xl:pt-28 space-y-20">
            <DarkGradientPricing />
        </section>
    )
}

export default WCTable

const DarkGradientPricing = () => {
    return (
        <section
            // style={{
            //     backgroundImage:
            //         "radial-gradient(100% 100% at 50% 0%, rgba(13,13,17,1), rgba(9,9,11,1))",
            // }}
            className="relative overflow-hidden bg-transparent text-zinc-200 selection:bg-transparent"
        >
            <div className="relative z-10 mx-auto max-w-5xl px-4 py-20 md:px-8">
                {/* <div className="mb-12 space-y-3">
                    <h2 className="text-center text-3xl font-semibold leading-tight sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                        Pricing
                    </h2>
                    <p className="text-center text-base text-zinc-400 md:text-lg">
                        Use it for free for yourself, upgrade when your team needs advanced
                        control.
                    </p>
                </div> */}

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    <PriceCard
                        // tier=""
                        price="Feature"
                        // bestFor=""
                        // CTA={<GhostButton className="w-full">Get started free</GhostButton>}
                        benefits={[
                            { text: "Customization", checked: true },
                            { text: "Scalability", checked: true },
                            { text: "Security", checked: true },
                            { text: "Integration", checked: true },
                            { text: "Ownership", checked: true },
                        ]}
                    />
                    <PriceCard
                        // tier=""
                        price="Coding"
                        // bestFor=""
                        // CTA={
                        //     <GhostButton className="w-full bg-zinc-50 text-zinc-950 hover:bg-zinc-200 hover:text-zinc-900">
                        //         14-day free trial
                        //     </GhostButton>
                        // }
                        benefits={[
                            { text: "High", checked: true },
                            { text: "Excellent", checked: true },
                            { text: "Fully Controllable", checked: true },
                            { text: "Seamless", checked: true },
                            { text: "Full", checked: true },
                        ]}
                    />
                    <PriceCard
                        // tier=""
                        price="No-Code"
                        // bestFor=""
                        // CTA={<GhostButton className="w-full">Contact us</GhostButton>}
                        benefits={[
                            { text: "Limited", checked: true },
                            { text: "Moderate", checked: true },
                            { text: "Platform-dependent", checked: true },
                            { text: "Restricted", checked: true },
                            { text: "Partial", checked: true },
                        ]}
                    />
                </div>
            </div>
        </section>
    );
};

const PriceCard = ({ price, benefits }: { price: any, benefits: any }) => {
    return (
        <Card>
            <div className="flex flex-col items-center border-b-4 border-[#1B1B1CCC] pb-6">
                {/* <span className="mb-6 inline-block text-zinc-50">{tier}</span> */}
                <span className="mb-3 inline-block text-[#1B1B1CCC] text-4xl font-bold font-EbGaramond">{price}</span>
                {/* <span className="bg-gradient-to-br from-zinc-200 to-zinc-500 bg-clip-text text-center text-transparent">
                    {bestFor}
                </span> */}
            </div>

            <div className="space-y-4 py-9">
                {benefits.map((b: any, i: any) => (
                    <Benefit {...b} key={i} />
                ))}
            </div>

            {/* {CTA} */}
        </Card>
    );
};

const Benefit = ({ text, checked }: { text: any, checked: any }) => {
    return (
        <div className="flex items-center gap-3">
            {checked ? (
                <span className="grid size-5 place-content-center rounded-full bg-info text-sm text-zinc-50">
                    <FiCheck />
                </span>
            ) : (
                <span className="grid size-5 place-content-center rounded-full bg-zinc-800 text-sm text-zinc-400">
                    <FiX />
                </span>
            )}
            <span className="text-sm text-[#181B30] font-SourceCodePro">{text}</span>
        </div>
    );
};

const Card = ({
    className = "",
    children,
    style = {},
}: {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}) => {
    return (
        <motion.div
            initial={{
                filter: "blur(2px)",
            }}
            whileInView={{
                filter: "blur(0px)",
            }}
            transition={{
                duration: 0.5,
                ease: "easeInOut",
                delay: 0.25,
            }}
            style={style}
            className={twMerge(
                "relative h-full w-full overflow-hidden rounded-2xl border-2 border-secondary bg-transparent p-6 shadow-xl",
                className
            )}
        >
            {children}
        </motion.div>
    );
};

// const GhostButton = ({ children, className, ...rest }: { children: any, className: any }) => {
//     return (
//         <button
//             className={twMerge(
//                 "rounded-md px-4 py-2 text-lg text-zinc-100 transition-all hover:scale-[1.02] hover:bg-zinc-800 hover:text-zinc-50 active:scale-[0.98]",
//                 className
//             )}
//             {...rest}
//         >
//             {children}
//         </button>
//     );
// };
