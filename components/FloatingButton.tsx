"use client";
import React from "react";
import { motion } from "framer-motion";

export default function FloatingButton() {
  return (
    <motion.div
      className="fixed bottom-8 right-4  hover:animate-pulse"
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
          src="https://ik.imagekit.io/webibee/Agency/whatsapp.gif"
          loading="lazy"
          alt="whatsapp logo"
          title="whatsapp logo"
          className="rounded-full shadow-xl h-12 w-12 md:h-14 md:w-14"
          style={{ boxShadow: "0 0 0 2px #904BF6" }}
          whileHover={{ boxShadow: "0 0 0 2px #FFFFFF" }}
        />
      </a>
    </motion.div>
  );
}
