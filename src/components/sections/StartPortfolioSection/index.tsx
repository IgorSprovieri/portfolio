import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Typewritter } from "./client/Typewritter";

export const StartPortfolioSection = () => {
  return (
    <section className="flex flex-col gap-16 items-center justify-start">
      <div className="flex flex-col-reverse gap-8 items-center justify-center lg:flex-row  lg:items-center ">
        <div className="flex flex-col gap-2 items-center justify-center">
          <Typewritter />
        </div>

        <div className="w-32 lg:w-fit">
          <Image
            src="/igor-sprovieri.jpeg"
            alt="igor-sprovieri-image"
            width={180}
            height={180}
            style={{ borderRadius: "100%" }}
          />
        </div>
      </div>

      <p className="text-md max-w-[692px] text-center">
        Programador autodidata desde os 15 anos de idade, tenho experiência
        profissional desde 2020 com desenvolvimento de APIs, sites, aplicativos
        e jogos. Atualmente, atuo no desenvolvimento de aplicações web e mobile.
      </p>

      <Card className="flex flex-row items-center justify-between w-[934px] py-6 px-16">
        <Image
          height={40}
          width={40}
          src="/icons/skills/typescript.svg"
          alt="typescript"
        />
        <Image
          height={34}
          width={34}
          src="/icons/skills/react.svg"
          alt="react"
        />
        <Image height={32} width={32} src="/icons/skills/next.svg" alt="next" />
        <Image height={40} width={70} src="/icons/skills/expo.svg" alt="expo" />
        <Image height={40} width={40} src="/icons/skills/node.svg" alt="node" />
      </Card>
    </section>
  );
};
