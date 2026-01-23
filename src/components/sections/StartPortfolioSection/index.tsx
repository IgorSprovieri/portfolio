import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Typewritter } from "./client/Typewritter";

export const StartPortfolioSection = () => {
  return (
    <section className="flex flex-col gap-6 sm:gap-16 items-center justify-start max-w-236.5 px-3">
      <div className="flex flex-col-reverse sm:flex-row gap-4 sm:gap-6 items-center justify-center">
        <div className="flex flex-col gap-2 items-center justify-center">
          <Typewritter />
        </div>

        <div className="w-32 h-32 sm:h-44 sm:w-44 overflow-hidden relative rounded-full">
          <Image src="/igor-sprovieri.jpeg" alt="igor-sprovieri-image" fill />
        </div>
      </div>

      <p className="text-sm sm:text-md max-w-[692px] text-center">
        Programador autodidata desde os 15 anos de idade, tenho experiência
        profissional desde 2020 com desenvolvimento de APIs, sites, aplicativos
        e jogos. Atualmente, atuo no desenvolvimento de aplicações web e mobile.
      </p>

      <Card className="flex flex-row items-center justify-between sm:justify-evenly w-full py-3 sm:py-6">
        <div className="h-8 w-8 sm:h-10 sm:w-10 overflow-hidden relative ">
          <Image fill src="/icons/skills/typescript.svg" alt="typescript" />
        </div>

        <div className="h-7 w-7 sm:h-9 sm:w-9 overflow-hidden relative ">
          <Image fill src="/icons/skills/react.svg" alt="react" />
        </div>

        <div className="h-6 w-6 sm:h-8 sm:w-8 overflow-hidden relative ">
          <Image fill src="/icons/skills/next.svg" alt="next" />
        </div>

        <div className="h-8 w-14 sm:h-10 sm:w-17 overflow-hidden relative ">
          <Image fill src="/icons/skills/expo.svg" alt="expo" />
        </div>

        <div className="h-8 w-8 sm:h-10 sm:w-10 overflow-hidden relative">
          <Image fill src="/icons/skills/node.svg" alt="node" />
        </div>
      </Card>
    </section>
  );
};
