"use client"
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
        href="https://web.whatsapp.com/send?phone=7358023088&text=Hi. I have a website requirement!&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.img
          src="/whatsapp.gif"
          loading="lazy"
          alt="msg"
          className="rounded-full p-2 shadow-xl"
          style={{ boxShadow: "0 0 0 2px #904BF6" }}
          whileHover={{ boxShadow: "0 0 0 2px #151414" }}
        />
      </a>
    </motion.div>
  );
}