import {nextui} from "@nextui-org/react";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
      },
      fontFamily: {
        Lato: ['var(--font-lato)'],
        Montserrat: ['var(--font-montserrat)'],
        caveat: ['var(--font-caveat)'],
      },
      aspectRatio: {
        box : "3 / 4"
      },
      backgroundImage: {
        // 'bg-img-1': "url('/img-1.png')",
        // 'bg-img-2': "url('/img-2.png')",
        // 'feature-bg': "url('/feature-bg.png')",
        // pattern: "url('/pattern.png')",
        // 'pattern-2': "url('/pattern-bg.png')",
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
      keyframes: {
        marquee_v: {
          from: { transform: 'translateY(0%)' },
          to: { transform: 'translateY(-100%)' }
        },
        marquee_h: {
          from: { transform: 'translateX(0%)' },
          to: { transform: 'translateX(calc(-100% - 1rem))' }
        },
      },
      animation: {
        vertical_carousel: 'marquee_v 20s linear infinite',
        horizontal_carousel: 'marquee_h 20s linear infinite',
        }
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            default: "#FFFFFF",
            primary :"#17092c", // Main Bg
            secondary: "#231536", // cards body Bg
            success: "#2c213f", // nav & Title heading
            warning : "#4c435f", // border
            danger : "#7943f2",  // Buttons
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