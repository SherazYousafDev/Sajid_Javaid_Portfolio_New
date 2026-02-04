import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-8 right-8 z-99">
      <button
        onClick={scrollToTop}
        className={`
          p-3 rounded-xl bg-primary/20 backdrop-blur-md border border-primary/30 text-primary0
          shadow-[0_0_20px_rgba(99,102,241,0.2)] hover:bg-primary hover:text-white 
          hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] transition-all duration-500 group
          ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10 pointer-events-none"
          }
        `}
        aria-label="Scroll to top"
      >
        <ChevronUp
          size={24}
          className="group-hover:-translate-y-1 transition-transform duration-300"
        />
      </button>
    </div>
  );
};

export default ScrollToTop;
