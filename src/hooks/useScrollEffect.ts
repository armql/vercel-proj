import { useEffect, useState } from "react";

export default function useScrollEffect(value: number) {
  const [scrollEffect, setScrollerEffect] = useState(false);

  useEffect(() => {
    let scrollTimer: number;
    const handleScroll = () => {
      if (window.scrollY > value) {
        clearTimeout(scrollTimer);
        scrollTimer = window.setTimeout(() => {
          setScrollerEffect(true);
        }, 10);
      } else {
        clearTimeout(scrollTimer);
        scrollTimer = window.setTimeout(() => {
          setScrollerEffect(false);
        }, 10);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimer);
    };
  }, [value]);

  return { scrollEffect };
}
