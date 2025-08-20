import { RefObject, useEffect, useState } from "react";

export const useTypewritter = (
  finalText: string,
  ref: RefObject<HTMLDivElement | null>,
  delay: number
) => {
  const [text, setText] = useState("");

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    let intervalId: NodeJS.Timeout;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setText("");
          setTimeout(() => {
            intervalId = setInterval(
              () =>
                setText((prev) => {
                  if (prev.length >= finalText.length) {
                    clearInterval(intervalId);
                    return prev;
                  }

                  return prev + finalText[prev.length];
                }),
              50
            );
          }, delay);
        }

        if (!entry.isIntersecting) {
          clearInterval(intervalId);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 1,
      }
    );

    observer.observe(element);

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }

      observer.unobserve(element);
    };
  }, []);

  return text;
};
