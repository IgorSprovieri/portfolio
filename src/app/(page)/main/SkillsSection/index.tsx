import Image from "next/image";

import { FC, ReactNode } from "react";
import { Section } from "../Section";
import { SectionTitleTypewritter } from "../SectionTitleTypewritter";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Card,
  CardContent,
} from "@/components";

type SkillCardProps = {
  text: string;
  icons: ReactNode;
};

const SkillCard: FC<SkillCardProps> = ({ text, icons }) => {
  return (
    <div className="w-[50%] text-center font-medium flex flex-col items-center justify-center lg:w-[160px]">
      <Card className="w-[100px] p-0 h-[72px] flex items-center justify-center hover:-translate-y-[8px] transition-transform duration-500">
        <CardContent className="flex items-center justify-center gap-[4px]">
          {icons}
        </CardContent>
      </Card>
      <p className="mt-[12px] text-[12px] lg:text-[14px]">{text}</p>
    </div>
  );
};

export const SkillsSection = () => {
  return (
    <Section id="skills-section">
      <div className="flex flex-col items-center justify-between h-[calc(100dvh-114px)] pt-8 pb-8 lg:pt-[150px] lg:pb-[150px]">
        <SectionTitleTypewritter
          firstText="Habilidades que"
          secondText="Domino"
        />

        <Tabs
          defaultValue="backend"
          className="flex flex-col items-center justify-center h-full"
        >
          <TabsContent
            value="backend"
            className="flex flex-col items-center justify-center gap-4 lg:gap-8 lg:flex-row"
          >
            <div className="flex items-center justify-center gap-4 lg:gap-8">
              <SkillCard
                text="Express e Nest para criação de Api's com Node"
                icons={
                  <>
                    <Image
                      height={32}
                      width={32}
                      src="/icons/skills/nest.svg"
                      alt="nest"
                    />
                  </>
                }
              />

              <SkillCard
                text="DB SQL e NoSQL com Postgres, Mongo e Redis"
                icons={
                  <>
                    <Image
                      height={28}
                      width={28}
                      src="/icons/skills/postgres.svg"
                      alt="postgres"
                    />
                  </>
                }
              />
            </div>

            <div className="flex items-center justify-center gap-4 lg:gap-8">
              <SkillCard
                text="OR(D)M's Mongoose, Sequelize, TypeORM e Prisma"
                icons={
                  <>
                    <Image
                      height={32}
                      width={32}
                      src="/icons/skills/sequelize.svg"
                      alt="sequelize"
                    />
                  </>
                }
              />

              <SkillCard
                text="AWS, Railway e Vercel para deploy de Api's e sites"
                icons={
                  <>
                    <Image
                      height={32}
                      width={32}
                      src="/icons/skills/aws.svg"
                      alt="aws"
                    />
                  </>
                }
              />
            </div>
          </TabsContent>
          <TabsContent
            value="frontend"
            className="flex flex-col items-center justify-center gap-4 lg:gap-8 lg:flex-row"
          >
            <div className="flex items-center justify-center gap-4 lg:gap-8">
              <SkillCard
                text="HTML, CSS e JavaScript para criação de sites"
                icons={
                  <>
                    <Image
                      height={32}
                      width={32}
                      src="/icons/skills/html.svg"
                      alt="html"
                    />
                  </>
                }
              />

              <SkillCard
                text="React e Next para criação de páginas HTML com Jsx e SSR"
                icons={
                  <>
                    <Image
                      height={32}
                      width={32}
                      src="/icons/skills/next.svg"
                      alt="next"
                    />
                  </>
                }
              />
            </div>

            <div className="flex items-center justify-center gap-4 lg:gap-8">
              <SkillCard
                text="CSS Avançado com Chakra UI, Tailwind e Shadcn/ui"
                icons={
                  <>
                    <Image
                      height={32}
                      width={32}
                      src="/icons/skills/chakra.svg"
                      alt="chakra"
                    />
                  </>
                }
              />

              <SkillCard
                text="Bibliotecas como Redux, Formik, Yup, React Query e Axios"
                icons={
                  <>
                    <Image
                      height={32}
                      width={32}
                      src="/icons/skills/redux.svg"
                      alt="redux"
                    />
                  </>
                }
              />
            </div>
          </TabsContent>
          <TabsContent
            value="mobile"
            className="flex flex-col items-center justify-center gap-4 lg:gap-8 lg:flex-row"
          >
            <div className="flex items-center justify-center gap-4 lg:gap-8">
              <SkillCard
                text="Typescript para tipagem e superset do JavaScript"
                icons={
                  <>
                    <Image
                      height={32}
                      width={32}
                      src="/icons/skills/typescript.svg"
                      alt="typescript"
                    />
                  </>
                }
              />

              <SkillCard
                text="React Native para desenvolvimento IOS e Android"
                icons={
                  <>
                    <Image
                      height={32}
                      width={32}
                      src="/icons/skills/react.svg"
                      alt="react"
                    />
                  </>
                }
              />
            </div>

            <div className="flex items-center justify-center gap-4 lg:gap-8">
              <SkillCard
                text="Framework para a criação de apps com React Native"
                icons={
                  <>
                    <Image
                      height={32}
                      width={72}
                      src="/icons/skills/expo.svg"
                      alt="expo"
                    />
                  </>
                }
              />

              <SkillCard
                text="Firebase para database, storage, auth e outros"
                icons={
                  <>
                    <Image
                      height={32}
                      width={32}
                      src="/icons/skills/firebase.svg"
                      alt="firebase"
                    />
                  </>
                }
              />
            </div>
          </TabsContent>

          <TabsList>
            <TabsTrigger value="backend">Backend</TabsTrigger>
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="mobile">Mobile</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </Section>
  );
};
