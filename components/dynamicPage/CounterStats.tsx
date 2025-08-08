"use client"
import React, { useState, useEffect } from "react";
import { Stats } from "../Stats";

const CounterStats = () => {
    const [isActive, setIsActive] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsActive(prev => (prev + 1) % 4);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="h-full md:h-[55dvh] flex flex-wrap md:flex-nowrap gap-6 lg:gap-10 w-full p-10 sm:px-20 xl:px-64 sm:py-16 xl:pb-28">
            <Stats
                num={2.7}
                decimals={1}
                suffix="M"
                subheading="Digital Marketing hours"
                isActive={isActive === 0}
            />
            <Stats
                num={250}
                suffix="+"
                subheading="Marketing Experts"
                isActive={isActive === 1}
            />
            <Stats
                num={1000}
                suffix="+"
                subheading="4 and above reviews"
                isActive={isActive === 2}
            />
            <Stats
                num={800}
                suffix="+"
                subheading="Case studies"
                isActive={isActive === 3}
            />
        </section>
    );
};

export default CounterStats;