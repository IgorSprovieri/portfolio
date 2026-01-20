import { RefObject, useEffect } from "react";

export const useCascade = (ref: RefObject<HTMLDivElement | null>) => {
  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const ratio = entry.intersectionRatio;

          if (ratio >= 0.5) {
            element.classList.remove("opacity-0", "translate-y-16");
            element.classList.add("opacity-100", "translate-y-0");
          }

          if (ratio < 0.5) {
            element.classList.remove("opacity-100", "translate-y-0");
            element.classList.add("opacity-0", "translate-y-16");
          }
        });
      },
      {
        threshold: [0, 0.5],
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [ref]);
};
