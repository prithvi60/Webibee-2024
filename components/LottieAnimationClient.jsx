"use client";

import { useLottie } from "lottie-react";
import logoAnimation from "../public/logo.json";

const LottieAnimationClient = () => {
    const options = {
        animationData: logoAnimation,
        loop: true,
    };

    const { View } = useLottie(options);
    return (
        <div className="grid h-[85vh] place-content-center place-items-center">
            <div className="size-56 sm:size-96">{View}</div>
        </div>
    );
};

export default LottieAnimationClient;
