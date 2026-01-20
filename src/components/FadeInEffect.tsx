"use client";

import { FC, useEffect, useRef } from "react";

export const FadeInEffect: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.classList.remove("opacity-0");
    ref.current?.classList.add("opacity-100");
  }, []);

  return (
    <div ref={ref} className="opacity-0 duration-500">
      {children}
    </div>
  );
};
