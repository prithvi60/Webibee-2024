// components/SmoothScroll.tsx
"use client"
import { useEffect, useState } from 'react';
import lenis from 'lenis';


const SmoothScroll: React.FC = () => {
    const [lenisInstance, setLenisInstance] = useState<lenis | null>(null);

    useEffect(() => {
        const lenisInstance = new lenis({
            duration: 0.6, // Adjust duration
            easing: (t: number) =>
                t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
            // smooth: true, // Enable smooth scrolling
            // direction: 'vertical', // Restrict scrolling to vertical
        });

        function raf(time: number) {
            lenisInstance.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        setLenisInstance(lenisInstance);

        // Cleanup on component unmount
        return () => {
            if (lenisInstance) {
                lenisInstance.destroy();
            }
        };
    }, []);

    useEffect(() => {
        if (lenisInstance) {
            lenisInstance.on('scroll', () => {
                // Handle scroll events here, if needed
            });
        }
    }, [lenisInstance]);

    return null;
};

export default SmoothScroll;

