import Image from "next/image";

import { SectionTitle } from "../SectionTitle";
import { FC } from "react";
import { Card } from "../ui/card";

export const AboutMeSection: FC = () => {
  return (
    <section
      id="about-section"
      className="flex flex-col gap-8 sm:gap-16 items-center justify-start scroll-mt-48 max-w-[946px] px-3"
    >
      <SectionTitle firstText="Um Pouco" secondText="Sobre Mim" />
      <Card className="w-full flex flex-row items-center justify-center gap-6 py-3 sm:py-6">
        <div className="hidden sm:flex relative w-72 h-96 overflow-hidden">
          <Image
            src="/dummy/dummy-hello.png"
            alt="igor-sprovieri-image"
            fill
            className="object-cover"
          />
        </div>

        <p className="text-sm sm:text-lg w-full">
          Minha trajetória começou muito cedo, sou autodidata e, aos 15 anos,
          aprendi a criar jogos com a Unity, inicialmente como hobby. Em 2020,
          abri meu primeiro estúdio de jogos, no qual desenvolvi e publiquei
          mais de 15 jogos autorais e para terceiros.
          <br /> <br />
          Em 2022, minha história ganhou um novo capítulo, quando comecei a
          atuar como desenvolvedor web. Desde então, desenvolvi aplicativos para
          grandes empresas, treinei desenvolvedores iniciantes, implementei
          soluções end-to-end, resolvi problemas em todas as stacks e também fui
          responsável técnico por projetos frontend.
          <br /> <br />
          Minha capacidade de adaptação, a persistência, o aprendizado contínuo,
          o foco em qualidade, a busca em entender o problema e encontrar a
          melhor solução sempre me ajudaram em toda a carreira.
        </p>
      </Card>
    </section>
  );
};
