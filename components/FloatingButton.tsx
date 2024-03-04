"use client";
import React from "react";
import { motion } from "framer-motion";

export default function FloatingButton() {
  return (
    <motion.div
      className="fixed bottom-8 right-4  hover:animate-bounce"
      style={{ zIndex: "1000" }}
      whileHover={{ scale: 1.1 }}
    >
      <a
        href="https://wa.me/7358023088?text=Hey.%20I%20Have%20a%20website%20requirement%20!
        "
        target="_blank"
        rel="noopener noreferrer"
        title='whatsapp' 
      >
        <motion.img
          loading="lazy"
          src="https://ik.imagekit.io/webibee/Agency/whatsapp.gif"
          alt="whatsapp logo"
          title="whatsapp logo"
          className="rounded-full shadow-xl h-14 w-14 md:h-16 md:w-16"
          // style={{ boxShadow: "0 0 0 2px #904BF6" }}
          whileHover={{ boxShadow: "0 0 0 2px #FFFFFF" }}
        />
      </a>
    </motion.div>
  );
}
