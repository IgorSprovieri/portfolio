import { FC, ReactNode } from "react";
import { Section } from "../Section";
import { SectionTitleTypewritter } from "../SectionTitleTypewritter";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Card,
} from "@/components";

type ExperienceCardProps = {
  title: string;
  period?: string;
  description?: ReactNode;
  subItems?: {
    title: string;
    period?: string;
    description: ReactNode;
  }[];
};

const ExperienceCard: FC<ExperienceCardProps> = ({
  title,
  period,
  subItems,
  description,
}) => {
  return (
    <Card className="p-0">
      <Accordion
        type="single"
        collapsible
        className="w-[85dvw] mx-4 lg:w-[50dvw]"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div>
              <h2 className="text-primary text-[18px] font-bold">{title}</h2>
              {period && (
                <h3 className="text-gray-500 font-bold text-[13px]">
                  {period}
                </h3>
              )}
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            {description && (
              <p className="text-[14px] leading-[1.25] tracking-[-0.2] [word-spacing:0px] pl-2">
                {description}
              </p>
            )}
            {subItems &&
              subItems?.map(({ title, period, description }) => (
                <div key={title + period}>
                  <h2 className="text-primary font-bold text-[16px]">
                    {title}
                  </h2>
                  {period && (
                    <h3 className="text-gray-500 font-bold text-[13px]">
                      {period}
                    </h3>
                  )}
                  <p className="text-[14px] leading-[1.25] tracking-[-0.2] [word-spacing:0px] pl-2 pt-1">
                    {description}
                  </p>
                </div>
              ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};

export const ExperiencesSection = () => {
  return (
    <Section id="experiences-section">
      <div className="pt-[100px]">
        <SectionTitleTypewritter firstText="Minhas" secondText="Experiências" />

        <div className="flex flex-col items-center justify-start h-full mt-[32px] gap-4">
          <ExperienceCard
            title="Seven Apps"
            period="Fev 2023 - Ago 2025"
            subItems={[
              {
                title: "BestBarbers - Desenvolvedor Fullstack e Mobile",
                period: "Jul 2024 - Ago 2025",
                description: (
                  <>
                    Atuei no desenvolvimento de um aplicativo completo para
                    barbearias com implementação white-label.
                    <br />
                    <br />A minha participação foi na criação de um novo projeto
                    com tecnologias mais atuais e nas demandas do projeto
                    antigo, como subir novos aplicativos na Apple Store e Google
                    Play, desenvolvimento de novas features e correção de bugs.
                    Desenvolvi também soluções para tarefas repetitivas criando
                    Cli’s.
                    <br />
                    <br />O projeto antigo foi feito em React Native CLI, React,
                    Sequelize e trabalhei na migração para Next, Expo, Nest e
                    Prisma, em uma nova arquitetura de monorepo com
                    implementação de tradução.
                  </>
                ),
              },
              {
                title: "Mapa da Programação - Desenvolvedor Frontend e Mobile",
                period: "Fev 2024 - Jun 2024",
                description: (
                  <>
                    Atuei no desenvolvimento de uma plataforma de cursos online
                    com Next, Expo, Nest e AWS.
                  </>
                ),
              },
              {
                title: "Mapa da Programação - Tutor",
                period: "Fev 2023 - Jan 2024",
                description: (
                  <>
                    Atuei como tutor backend ajudando alunos que desejam ser
                    desenvolvedores. As tecnologias usadas foram: Node, SQL,
                    Docker, Express, Mongoose, Postgres, Sequelize e AWS.
                  </>
                ),
              },
            ]}
          />

          <ExperienceCard
            title="Autônomo - Desenvolvedor Web e Mobile"
            period="Jan 2023 - Jan 2024"
            subItems={[
              {
                title: "Áster Máquinas (John Deere)",
                description: (
                  <>
                    Desenvolvi um aplicativo que gera recomendações para
                    máquinas de empresas agrícolas através de dados coletados
                    por sensores e um site pra cadastro de máquinas e
                    recomendações. Utilizei JavaScript, React, React Native,
                    Expo, Styled Components e Firebase.
                  </>
                ),
              },
              {
                title: "Auto Posto Canindé",
                description: (
                  <>
                    Desenvolvi um sistema de controle de aluguéis de espaços
                    internos enquanto atuei na administração. Utilizei
                    TypeScript, React, Styled Components, Express, TypeORM e
                    Postgres.
                  </>
                ),
              },
              {
                title: "MFL",
                description: (
                  <>
                    Desenvolvi uma plataforma de um curso online via ebook
                    utilizando Next e Firebase.
                  </>
                ),
              },
            ]}
          />

          <ExperienceCard
            title="Autônomo - Desenvolvedor Unity C#"
            period="Jan 2020 - Set 2022"
            description={
              <>
                Participei de 5 projetos para empresas: Pinel Games, DejaVú
                Games e Afil Games. Também desenvolvi 11 projetos autorais, em
                equipe, e fui redator por mais de 1 ano do site Crie Seus Jogos.
                O meu primeiro jogo na Steam, Destroy the Cubes, teve um artigo
                na revista Warpzone.
              </>
            }
          />

          <ExperienceCard
            title="Outros Trabalhos"
            subItems={[
              {
                title: "Trabalho Voluntário",
                period: "Ago 2023 - Jan 2025",
                description: (
                  <>
                    Fiz um trabalho voluntário para a Igreja Cristã Maranata,
                    onde desenvolvi e gerenciei um site de inscrição para
                    eventos com React, Next, Styled Components, Express, TypeORM
                    e Mongo.
                  </>
                ),
              },
            ]}
          />
        </div>
      </div>
    </Section>
  );
};
