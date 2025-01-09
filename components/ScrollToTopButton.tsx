"use client"
import React, { useState, useEffect } from "react";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const viewportHeight = window.innerHeight;

      setIsVisible(scrollTop > viewportHeight * 0.1);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-20 md:right-28 bg-info p-1.5 shadow-lg rounded-full transition duration-300ease-linear"
        >
          <MdKeyboardDoubleArrowUp  className="text-white text-xl sm:text-3xl xl:text-4xl" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
