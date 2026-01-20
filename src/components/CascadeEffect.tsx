"use client";

import { useCascade } from "@/hooks/useCascade";
import { FC, useRef } from "react";

export const CascadeEffect: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useCascade(ref);

  return (
    <div
      ref={ref}
      className="opacity-0 translate-y-6 transition-all duration-1000 ease-out"
    >
      {children}
    </div>
  );
};
