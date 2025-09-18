"use client";
import { useEffect, useState } from "react";

const CalendlyLink = () => {
    const [isScriptLoaded, setIsScriptLoaded] = useState(false);
    const url = process.env.NEXT_PUBLIC_CALENDLY_ID;

    useEffect(() => {
        const existingScript = document.querySelector(
            'script[src="https://assets.calendly.com/assets/external/widget.js"]'
        );

        if (existingScript) {
            setIsScriptLoaded(true);
            return;
        }

        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        script.onload = () => setIsScriptLoaded(true);
        script.onerror = () => console.error("Failed to load Calendly script");
        document.body.appendChild(script);

        return () => { };
    }, []);

    // Function to detect if the device is an Apple device
    const isAppleDevice = () => {
        const userAgent = window.navigator.userAgent.toLowerCase();
        return /(iphone|ipad|ipod|macintosh)/i.test(userAgent);
    };

    // Define interfaces
    interface CalendlyWindow extends Window {
        Calendly?: {
            initPopupWidget: (options: { url: string }) => void;
        }
    }

    const handleCalendlyClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        e.stopPropagation();

        if (isAppleDevice()) {
            // Redirect to Calendly URL for Apple devices
            window.location.href = url as string;
        } else {
            // Use popup for non-Apple devices
            const calendlyWindow = window as CalendlyWindow;
            if (calendlyWindow.Calendly && isScriptLoaded) {
                calendlyWindow.Calendly.initPopupWidget({ url: url as string });
            } else {
                console.error("Calendly not ready. Script loaded:", isScriptLoaded);
                setTimeout(() => {
                    if (calendlyWindow.Calendly) {
                        calendlyWindow.Calendly.initPopupWidget({ url: url as string });
                    } else {
                        alert("Unable to load Calendly. Please try again later.");
                    }
                }, 500);
            }
        }
    };

    return (
        <button
            onClick={handleCalendlyClick}
            className={`capitalize font-bold hover:animate-pulse tracking-wide hover:text-info/80 relative text-base md:text-xl xl:text-2xl hover:decoration-dashed hover:transition-colors hover:duration-300 hover:ease-in-out border-b-4 border-[#4d3191]`}
        >
            Free Consultation
        </button>
    );
};

export default CalendlyLink;
