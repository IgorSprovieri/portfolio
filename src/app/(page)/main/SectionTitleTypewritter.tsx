"use client";

import { FC, useRef } from "react";
import { useTypewritter } from "@/hooks/useTypewritter";

type SectionTitleTypewritterProps = {
  firstText: string;
  secondText: string;
};

export const SectionTitleTypewritter: FC<SectionTitleTypewritterProps> = ({
  firstText: finalFirstText,
  secondText: finalSecondText,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const firstText = useTypewritter(finalFirstText, ref, 500);
  const secondText = useTypewritter(finalSecondText, ref, 500);

  return (
    <div
      ref={ref}
      className="flex flex-col w-full items-center justify-center gap-[4px]"
    >
      <h2 className="font-bold text-[26px] lg:text-[32px] leading-[1]">
        {"{"}
        {firstText}
      </h2>
      <h2 className="font-bold text-[26px] lg:text-[32px] leading-[1] text-(--primary)">
        {secondText}
        {"}"}
      </h2>
    </div>
  );
};
