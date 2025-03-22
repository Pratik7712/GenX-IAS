import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ScrollToTopProps {
  showBelow?: number;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ showBelow = 300 }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > showBelow) {
        if (!show) setShow(true);
      } else {
        if (show) setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [show, showBelow]);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
          onClick={handleClick}
          className="fixed z-50 bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 
                    bg-crimson-500 hover:bg-crimson-600 text-white rounded-full 
                    p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all duration-300
                    focus:outline-none focus:ring-2 focus:ring-crimson-400 focus:ring-opacity-50"
          aria-label="Scroll to top"
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronUp className="h-5 w-5 sm:h-6 sm:w-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
