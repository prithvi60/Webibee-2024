"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
      .then(response => response.json())
      .then(data => {
        // Check if the country is India
        setIsVisible(data.country === "IN");
      });
  }, []);
  if (loading) {
    return <div style={{ height: '100px' }} />;
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
            title='whatsapp' 
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
      ): (
        <motion.div
          className="fixed bottom-8 right-4"
          style={{ zIndex: "1000" }}
          whileHover={{ scale: 1.1 }}
        >
          <a
            href="https://www.linkedin.com/in/your-profile" // Update with your LinkedIn profile link
            target="_blank"
            rel="noopener noreferrer"
            title='LinkedIn'
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
        </motion.div>
      )}
    </>
  );
}
