"use client";

import dynamic from "next/dynamic";

// Dynamically import LottieAnimationClient with SSR disabled
const LottieAnimationClient = dynamic(() => import("./LottieAnimationClient"), {
    ssr: false, // Prevents server-side rendering
});

interface LoadingPageProps {
    onLoadingComplete: () => void;
}

const LoadingPage = ({ onLoadingComplete }: LoadingPageProps) => {
    const handleAnimationComplete = () => {
        onLoadingComplete();
    };
    return (
        <div className="grid h-screen w-full bg-white !z-[999999] top-0 left-0 absolute place-content-center place-items-center">
            <LottieAnimationClient onAnimationComplete={handleAnimationComplete} />
        </div>
    );
};

export default LoadingPage;
