import { nextui } from "@nextui-org/react";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        info: "#936AF7",
      },
      fontFamily: {
        EbGaramond: "var(--font-EbGaramond)",
        SourceCodePro: "var(--font-sourceCodePro)",
        PermanentMarker: "var(--font-permanentMarker)",
      },
      screens: {
        xs: "400px",
        "3xl": "1920px",
        "4xl": "2560px",
        "5xl": "3840px",
      },
      maxWidth: {
        "10xl": "1512px",
      },
      borderRadius: {
        "5xl": "40px",
      },
      keyframes: {
        marquee_v: {
          from: { transform: "translateY(0%)" },
          to: { transform: "translateY(-100%)" },
        },
        marquee_h: {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(calc(-100% - 1rem))" },
        },
      },
      animation: {
        vertical_carousel: "marquee_v 20s linear infinite",
        horizontal_carousel: "marquee_h 20s linear infinite",
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            default: "#000000",
            primary: "#FFFFFF", // Main Bg
            secondary: "#FFD700", // cards body Bg
            success: "#2c213f", // nav & Title heading
            warning: "#4c435f", // border
            danger: "#7943f2", // Buttons
            focus: "#17092c",
          },
        },
      },
    }),
  ],
};

// Colors-

// 904BF6 & CFB2FA [ Gradient colors ] - Purple
// 141313 - black main bg color
// FFFFFF- default text color

// Fonts-

// Title- Caveat    [Bold]
// Body-Work sans [Regular]
//  head: lg > 40px, lg < 34px,
//  sub-head: lg > 32px, lg < 30px,
