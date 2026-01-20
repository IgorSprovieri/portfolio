"use client";

import { FC, useRef } from "react";

type SectionTitleProps = {
  firstText: string;
  secondText: string;
};

export const SectionTitle: FC<SectionTitleProps> = ({
  firstText,
  secondText,
}) => {
  const ref = useRef<HTMLDivElement>(null);

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
