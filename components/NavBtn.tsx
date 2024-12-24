import React from "react";
import { motion } from "framer-motion";

interface NavBtnProps {
  text: string;
}

const NavBtn: React.FC<NavBtnProps> = ({text}) => {
  return (
    <section className="grid place-content-center">
          <a
            href={"https://calendly.com/webibee/consultation"}
            title="Contact"
       
            aria-current="page"
            // className="flex items-center gap-2 text-lg md:text-xl hover:opacity-50 cursor-pointer font-Merri py-1.5 px-2 text-[#31a327] bg-white rounded-lg font-semibold hover:animate-pulse"
          >
      <MarqueeButton>{text}</MarqueeButton>
      </a>
    </section>
  );
};

const MarqueeButton = ({ children }: { children: string }) => {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className="relative overflow-hidden  rounded-md bg-white p-1 md:p-4 md:text-xl font-black uppercase font-Merri  w-[150px] md:w-full text-sm"
    >
      <motion.span
        className="inline-block text-[#7943f2] "
        initial={{ x: "0%" }}
        animate={{
          x: "calc(-100% - 6px)",
        }}
        transition={{
          ease: "linear",
          duration: 5,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        {children} •{" "}
      </motion.span>

      <motion.span
        initial={{ x: "calc(-100% - 6px)" }}
        animate={{
          x: "calc(-200% - 12px)",
        }}
        transition={{
          ease: "linear",
          duration: 5,
          repeat: Infinity,
          repeatType: "loop",
        }}
        className="absolute left-1 md:left-4 top-1 md:top-4 inline-block text-[#7943f2]"
      >
        {children} •
      </motion.span>
      <motion.span
        initial={{ x: "calc(100% + 6px)" }}
        animate={{
          x: "0%",
        }}
        transition={{
          ease: "linear",
          duration: 5,
          repeat: Infinity,
          repeatType: "loop",
        }}
        className="absolute left-1 md:left-4 top-1 md:top-4 inline-block text-[#7943f2]"
      >
        {children} •
      </motion.span>
      <motion.span
        initial={{ x: "calc(200% + 12px)" }}
        animate={{
          x: "calc(100% + 6px)",
        }}
        transition={{
          ease: "linear",
          duration: 5,
          repeat: Infinity,
          repeatType: "loop",
        }}
        className="absolute left-1 md:left-4 top-1 md:top-4 inline-block text-[#7943f2]"
      >
        {children} •
      </motion.span>
    </motion.button>
  );
};

export default NavBtn;