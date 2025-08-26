"use client"
import React, { useState, useEffect } from "react";
import { Stats } from "../Stats";

type DataProps = {
    num: number;
    suffix: string;
    subheading: string;
    isDecimal: boolean;
}[]

const CounterStats = ({ data, location }: { data: DataProps, location: string | null; }) => {
    const [isActive, setIsActive] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsActive(prev => (prev + 1) % 4);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="h-full md:h-[55dvh] flex flex-wrap md:flex-nowrap gap-6 lg:gap-10 w-full p-10 sm:px-20 xl:px-48 sm:py-16 xl:pb-28">
            <Stats
                num={data[0].num}
                decimals={data[0].isDecimal === true ? 1 : 0}
                suffix={data[0].suffix}
                subheading={data[0].subheading}
                isActive={isActive === 0}
            />
            <Stats
                num={data[1].num}
                suffix={data[1].suffix}
                subheading={data[1].subheading}
                isActive={isActive === 1}
            />
            <Stats
                num={data[2].num}
                suffix={data[2].suffix}
                subheading={data[2].subheading}
                isActive={isActive === 2}
            />
            <Stats
                num={data[3].num}
                suffix={data[3].suffix}
                subheading={data[3].subheading}
                isActive={isActive === 3}
            />
        </section>
    );
};

export default CounterStats;