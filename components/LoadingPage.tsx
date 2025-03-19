"use client"
import dynamic from "next/dynamic";

const LoadingPage = dynamic(() => import("./LottieAnimationClient"), {
    ssr: false,
});

export default LoadingPage;