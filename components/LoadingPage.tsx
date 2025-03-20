// "use client"
// import dynamic from "next/dynamic";

// const LoadingPage = dynamic(() => import("./LottieAnimationClient"), {
//     ssr: false,
// });

// export default LoadingPage;

"use client";

import dynamic from "next/dynamic";

// Dynamically import LottieAnimationClient with SSR disabled
const LottieAnimationClient = dynamic(() => import("./LottieAnimationClient"), {
    ssr: false, // Prevents server-side rendering
});

const LoadingPage = () => {
    return (
        <div className="grid h-[85vh] place-content-center place-items-center">
            <LottieAnimationClient />
        </div>
    );
};

export default LoadingPage;