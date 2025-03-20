
"use client";
import Lottie from 'react-lottie-player';
import logoAnimation from "../public/logo.json";

const LottieSSR = () => {
    return (
        <Lottie
            loop
            animationData={logoAnimation}
            play
            style={{ width: 224, height: 224 }} // Equivalent to size-56
            rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
        />
    );
};

export default LottieSSR;