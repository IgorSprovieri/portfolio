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
              Desenvolvedor desde 2020, tenho experiência com APIs, sites,
              aplicativos e jogos. Nos últimos anos tenho atuado
              majoritariamente no frontend de aplicações web e mobile.
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
                        Desenvolvedor desde 2020, tenho experiência com APIs,
                        sites, aplicativos e jogos. Nos últimos anos tenho
                        atuado majoritariamente no frontend de aplicações web e
                        mobile com React.js, Next.js, React Native e Expo
                        <br />
                        <br />
                        Sou uma pessoa autodidata que tem facilidade em se
                        adaptar a vários contextos, linguagens e ferramentas,
                        além de ser colaborativo e pensar &quot;fora da
                        caixa&quot; para buscar soluções.
                        <br />
                        <br />
                        Nos 3 primeiros anos da minha carreira trabalhei como
                        desenvolvedor de jogos com a Unity em mais de 15
                        projetos que hoje estão publicados e sendo jogados por
                        milhares de pessoas.
                        <br />
                        <br />
                        Já fiz um projeto para uma grande empresa chamado Áster
                        Recomenda, onde desenvolvi um aplicativo e um site que
                        monitoram máquinas agrícolas e otimizam a produtividade
                        de fazendas por todo o Brasil.
                        <br />
                        <br />
                        Trabalhei por muito tempo em uma startup chamada
                        BestBarbers, onde pude desenvolver meu conhecimento em
                        desenvolvimento web, principalmente no frontend.
                        <br />
                        <br />
                        Também já mentorei desenvolvedores iniciantes,
                        implementei arquiteturas como Atomic Design e Monorepo,
                        desenvolvi sites do zero para startups e fiz um projeto
                        voluntário para a Igreja.
                        <br />
                        <br />
                        Minha Stack Atual: HTML, CSS, JavaScript, TypeScript,
                        React.js, Vite, Next.js, Chakra UI, Tailwind CSS,
                        Shadcn/ui, React Native, Expo, EAS, xCode, Android
                        Studio, React Query, Zustand, Zod, React Hook Form,
                        Node, Git, GitHub, Firebase, CI/CD (Vercel e Render),
                        Orval, Vitest, Cypress, Figma, Atomic Design, Docker,
                        AWS EC2 e S3.
                      </div>
                    </div>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <div className="w-32 lg:w-fit">
            <Image
              src="/igor-sprovieri.jpeg"
              alt="igor-sprovieri-image"
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
