import { useState, useEffect } from "react";
import { on, off } from "../utils/utils.js";

/**
 * useScrolling custom react hook
 * @returns {boolean}
 */

const useScrolling = () => {
  let prevScroll;

  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    const curScroll = window.scrollY;
    const isScrolled = 0 < curScroll;
    setScrolling(isScrolled);
    prevScroll = curScroll;
  };

  useEffect(() => {
    on(window, "scroll", handleScroll, { passive: true });
    return () => {
      off(window, "scroll", handleScroll, { passive: true });
    };
  }, []);

  return scrolling;
};

export default useScrolling;
