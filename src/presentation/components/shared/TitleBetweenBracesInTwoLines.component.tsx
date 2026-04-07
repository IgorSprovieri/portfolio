'use client';

import { FC, useRef } from 'react';

type TitleBetweenBracesInTwoLinesComponentProps = {
  firstLineText: string;
  secondLineText: string;
};

export const TitleBetweenBracesInTwoLinesComponent: FC<
  TitleBetweenBracesInTwoLinesComponentProps
> = ({ firstLineText, secondLineText }) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className="flex flex-col w-full items-center justify-center gap-1"
    >
      <h2 className="font-bold text-[26px] lg:text-[32px] leading-none">
        {'{'}
        {firstLineText}
      </h2>
      <h2 className="font-bold text-[26px] lg:text-[32px] leading-none text-primary">
        {secondLineText}
        {'}'}
      </h2>
    </div>
  );
};
