"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { SiGooglechat } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
export default function FloatingButton() {
  const [isIndia, setIsIndia] = useState(false);

  useEffect(() => {
    // Fetch user's location
    fetch("https://ipapi.co/json/")
      .then((response) => response.json())
      .then((data) => {
        // Check if the country is India
        setIsIndia(data.country === "IN");
      });
  }, []);
  return (
    <>
      {!isIndia ? (
        <motion.div
          className="fixed bottom-8 right-4"
          style={{ zIndex: "1000" }}
          whileHover={{ scale: 1.1 }}
        >
          <a
            href="https://chat.google.com/dm/prithvi@webibee.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Google Chat"
          >
            <div className="bg-white p-4 rounded-full border-secondary border-2">
              <SiGooglechat className="text-green-500 text-xl sm:text-3xl xl:text-4xl " />
            </div>
          </a>
        </motion.div>
      ) : (
        <motion.div
          className="fixed bottom-8 right-4"
          style={{ zIndex: "1000" }}
          whileHover={{ scale: 1.1 }}
        >
          <a
            href="https://wa.me/7358023088?text=Hey%20Prithvi.%20We%20need%20to%20connect%20now%20!"
            target="_blank"
            rel="noopener noreferrer"
            title="whatsapp"
          >
            <div className="bg-white p-4 rounded-full border-secondary border-2">
              <FaWhatsapp className="text-green-500 text-xl sm:text-3xl xl:text-4xl" />
            </div>
          </a>
        </motion.div>
      )}
    </>
  );
}

export const OfferButton = () => {
  return (
    <div className="grid place-content-center">
      <TiltChipLink />
    </div>
  );
};

const TiltChipLink = () => {
  return (
    <div className="mb-1.5 w-fit rounded-full bg-zinc-600">
      <a
        href={"https://calendly.com/webibee/consultation"}
        rel="nofollow"
        className="flex origin-top-left items-center rounded-full border border-indigo-900 bg-white p-0.5 text-sm transition-transform hover:-rotate-2"
      >
        <span className="rounded-full bg-[#FF6154] px-2 py-0.5 font-medium text-white">
          FREE!
        </span>
        <span className="ml-1.5 mr-1 inline-block">
          Claim your free website audit here
        </span>
        <FiArrowUpRight className="mr-2 inline-block" />
      </a>
    </div>
  );
};
