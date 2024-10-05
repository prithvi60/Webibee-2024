"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

export default function FloatingButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show empty div for 1 second
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    // Fetch user's location
    fetch("https://ipapi.co/json/")
      .then((response) => response.json())
      .then((data) => {
        // Check if the country is India
        setIsVisible(data.country === "IN");
      });
  }, []);
  if (loading) {
    return <div style={{ height: "100px" }} />;
  }

  return (
    <>
      {isVisible ? (
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
            <motion.img
              loading="lazy"
              src="https://ik.imagekit.io/webibee/Agency/whatsapp.gif"
              alt="whatsapp logo"
              title="whatsapp logo"
              className="rounded-full shadow-xl h-14 w-14 md:h-16 md:w-16"
              whileHover={{ boxShadow: "0 0 0 2px #FFFFFF" }}
            />
          </a>
        </motion.div>
      ) : (
        <motion.div
          className="fixed bottom-0 right-2"
          style={{ zIndex: "1000" }}
          whileHover={{ scale: 1.1 }}
        >
          <OfferButton/>
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
{
  /* <motion.div
className="fixed bottom-8 right-4"
style={{ zIndex: "1000" }}
whileHover={{ scale: 1.1 }}
>
<a
href="https://www.linkedin.com/in/prithvi-n"
  target="_blank"
  rel="noopener noreferrer"
  title='LinkedIn'
  onClick={() => navigator.clipboard.writeText("Hi, I would like to connect with you!")}
>
  <motion.img
    loading="lazy"
    src="/Li.webp"
    alt="LinkedIn logo"
    title="LinkedIn logo"
    className="rounded-full shadow-xl h-14 w-14 md:h-16 md:w-16"
    whileHover={{ boxShadow: "0 0 0 2px #367cb6" }}
  />
</a>
</motion.div> */
}
