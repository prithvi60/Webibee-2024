"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { SiGooglechat } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingButton({
  userCountry,
}: {
  userCountry: string;
}) {
  // Render the WhatsApp button for users in India ('IN')
  if (userCountry === "IN") {
    return (
      <motion.div
        className="fixed bottom-8 right-4"
        style={{ zIndex: 1000 }}
        whileHover={{ scale: 1.1 }}
      >
        <a
          href="https://wa.me/7358023088?text=Hey%20Prithvi.%20We%20need%20to%20connect%20now%20!"
          target="_blank"
          rel="noopener noreferrer"
          title="WhatsApp"
        >
          <div className="bg-white p-4 rounded-full border-secondary border-2">
            <FaWhatsapp className="text-green-500 text-xl sm:text-3xl xl:text-4xl" />
          </div>
        </a>
      </motion.div>
    );
  }

  // Render the Google Chat button for users in the US ('US') and all other countries
  // You can create another `if (userCountry === 'US')` block if you want a different button for the US
  return (
    <motion.div
      className="fixed bottom-8 right-4"
      style={{ zIndex: 1000 }}
      whileHover={{ scale: 1.1 }}
    >
      <a
        href="https://chat.google.com/dm/prithvi@webibee.com"
        target="_blank"
        rel="noopener noreferrer"
        title="Google Chat"
      >
        <div className="bg-white p-4 rounded-full border-secondary border-2">
          <SiGooglechat className="text-green-500 text-xl sm:text-3xl xl:text-4xl" />
        </div>
      </a>
    </motion.div>
  );
}
