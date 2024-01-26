"use client";
import React from "react";
import { motion } from "framer-motion";

export default function FloatingButton() {
  return (
    <motion.div
      className="fixed bottom-8 right-4 "
      style={{ zIndex: "1000" }}
      whileHover={{ scale: 1.1 }}
    >
      <a
        href="https://wa.me/7358023088?text=Hey.%20I%20Have%20a%20website%20requirement%20!
        "
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.img
          src="/whatsapp.gif"
          loading="lazy"
          alt="msg"
          className="rounded-full p-2 shadow-xl"
          style={{ boxShadow: "0 0 0 2px #904BF6" }}
          whileHover={{ boxShadow: "0 0 0 2px #FFFFFF" }}
        />
      </a>
    </motion.div>
  );
}
