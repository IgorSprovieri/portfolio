"use client";

import { useTypewritter } from "@/hooks/useTypewritter";
import { FC, useRef } from "react";

type MainTitleTypewritterProps = {
  text: string;
};

export const MainTitleTypewritter: FC<MainTitleTypewritterProps> = ({
  text: finalText,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const text = useTypewritter(finalText, ref, 500);

  return (
    <div ref={ref} className="h-[56px] lg:h-[68px]">
      <h1 className="font-bold text-[28px] leading-[1.1] lg:text-[32px]">
        {text}
      </h1>
    </div>
  );
};
