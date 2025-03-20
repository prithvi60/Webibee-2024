"use client";
import Lottie from "react-lottie-player";
import logoAnimation from "../public/logo.json";

const LottieSSR = ({
    onAnimationComplete,
}: {
    onAnimationComplete: () => void;
}) => {
    return (
        <Lottie
            loop={false}
            animationData={logoAnimation}
            play
            style={{ width: 224, height: 224 }}
            rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
            onComplete={onAnimationComplete}
        />
    );
};

export default LottieSSR;
