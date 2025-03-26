import React, { useEffect, useState } from "react";
import "./ScrollToUp.css";

const ScrollToUp = () => {
  const [scrollToTop, setScrollToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setScrollToTop(true);
      } else {
        setScrollToTop(false);
      }
    });
  }, []);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {scrollToTop && (
        <button className="scroll" onClick={scrollUp}>
          <i class="fas fa-arrow-up"></i>
        </button>
      )}
    </div>
  );
};

export default ScrollToUp;
