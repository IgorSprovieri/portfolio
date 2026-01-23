"use client";

import { Card } from "@/components/ui/card";
import { useTypewritter } from "@/hooks/useTypewritter";
import { useRef } from "react";

export const Typewritter = () => {
  const firstTextRef = useRef<HTMLDivElement>(null);
  const secondTextRef = useRef<HTMLDivElement>(null);

  const firstText = useTypewritter("Olá, muito prazer!", firstTextRef, 500);
  const secondText = useTypewritter("Sou o Igor Sprovieri", secondTextRef, 950);

  return (
    <>
      <Card className="bg-primary flex items-center justify-center p-3 sm:p-4">
        <h1
          ref={firstTextRef}
          className="text-2xl sm:text-4xl text-card font-bold"
        >
          {firstText}
        </h1>
      </Card>
      <h1 ref={secondTextRef} className="text-2xl sm:text-4xl font-bold">
        {secondText}
      </h1>
    </>
  );
};
