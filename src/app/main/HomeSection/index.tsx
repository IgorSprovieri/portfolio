import Image from "next/image";
import { Section } from "../Section";
import { MainTitleTypewritter } from "./MainTitleTypewritter";
import { Button, buttonVariants } from "@/components";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components";

export const HomeSection = () => {
  return (
    <Section id="home-section">
      <div className="flex flex-col gap-[32px] items-center justify-evenly h-[calc(100dvh-114px)]">
        <div className="flex flex-col-reverse gap-[32px] items-center justify-center lg:flex-row  lg:items-start ">
          <div className="flex flex-col w-full gap-[12px] lg:w-[400px]">
            <MainTitleTypewritter text="Olá, Muito prazer! Sou o Igor Sprovieri" />

            <p className="text-[13px] lg:text-[14px]">
              Após atuar 3 anos como desenvolvedor de jogos, migrei para a área
              de desenvolvimento web, onde atuo desde 2023 com Node, React e
              React Native.
            </p>

            <div className="flex items-center justify-center gap-2 lg:justify-start">
              <a href="https://wa.me/5511997612295" target="_blank">
                <Button>Entrar em Contato</Button>
              </a>

              <Dialog>
                <DialogTrigger
                  className={buttonVariants({
                    variant: "outline",
                    size: "default",
                  })}
                >
                  Sobre Mim
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="text-[18px] font-bold text-primary">
                      Quem é Igor Sprovieri?
                    </DialogTitle>
                    <DialogDescription />
                    <div className="h-[80dvh] overflow-x-scroll lg:h-fit">
                      <div className="text-[14px] leading-[1.25] tracking-[-0.2] [word-spacing:0px] pl-2 pt-1 text-black text-left lg:text-[16px]">
                        Após atuar por 3 anos como desenvolvedor de jogos com a
                        Unity, migrei para a área de desenvolvimento web, onde
                        atuo desde 2023.
                        <br />
                        <br />
                        Tenho conhecimento em frontend React (Next), mobile com
                        React Native (Expo) e backend com Node (Express e Nest).
                        <br />
                        <br />
                        Sou uma pessoa mais lógica do que criativa, embora tenha
                        sempre muitas ideias e flexibilidade para discutir sua
                        viabilidade e implementação.
                        <br />
                        <br />
                        Gosto de ser desafiado com problemas complexos, nos
                        quais sempre me envolvo trazendo soluções para
                        discussão. Prezo pela qualidade das entregas, com código
                        legível, separação de responsabilidades e documentação,
                        quando necessário.
                        <br />
                        <br />
                        Meu ponto forte é a organização e estruturação, que
                        ajudam na escalabilidade e produtividade da equipe no
                        longo prazo, mas sempre tomando decisões em conjunto.
                        <br />
                        <br />
                        Também destaco a depuração e correção de bugs, consigo
                        manter a calma em momentos críticos, o que me ajuda a
                        tomar boas decisões e resolver problemas complexos.
                        <br />
                        <br />
                        Gosto muito de arquitetura de código, padrões de projeto
                        e como aprendi a programar com C#, tenho grande
                        familiaridade com programação orientada a objetos.
                      </div>
                    </div>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <div className="w-32 lg:w-fit">
            <Image
              src="https://media.licdn.com/dms/image/v2/D4D03AQFTOLD2FM3S4Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726236010303?e=1758153600&v=beta&t=Vj4z1sFqja5gyuD_m1Oxu9GlRJchnwd5Rhymk6SKmLo"
              alt="igor-sprovieri-photo"
              width={200}
              height={200}
              style={{ borderRadius: 12 }}
            />
          </div>
        </div>

        <a href="#achievements-section">
          <div className="h-fit w-fit animate-bounce">
            <Image
              height={64}
              width={64}
              src="/icons/arrow-down.svg"
              alt="Arrow down"
            />
          </div>
        </a>
      </div>
    </Section>
  );
};
