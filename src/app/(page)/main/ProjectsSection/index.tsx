import Image from "next/image";

import { FC, ReactNode } from "react";
import { SectionTitleTypewritter } from "../SectionTitleTypewritter";
import { Section } from "../Section";
import { projectsList } from "./projectsList";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerFooter,
  DrawerClose,
  buttonVariants,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components";

type ProjectCardProps = {
  title: string;
  src: string;
  alt: string;
  description: string;
  skillIcons: ReactNode;
  imageBgColor?: string;
  job?: string;
  readMode?: ReactNode;
};

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  src,
  alt,
  description,
  skillIcons,
  imageBgColor,
  job,
  readMode,
}) => {
  return (
    <Card>
      <CardHeader>
        <Image
          width={200}
          height={96}
          alt={alt}
          src={src}
          style={{
            borderRadius: 6,
            backgroundColor: imageBgColor || "black",
          }}
        />
        <CardTitle className="mt-1">{title}</CardTitle>
        <label className="text-gray-400 font-bold text-[14px] mt-[-4px]">
          {job || "Freelancer"}
        </label>
      </CardHeader>

      <CardContent className="flex flex-col mt-0.5">
        <CardDescription className="w-[200px]">{description}</CardDescription>
      </CardContent>

      <CardFooter className="flex justify-between items-center mt-2">
        <div className="flex gap-1.5 justify-start items-center">
          {skillIcons}
        </div>

        {readMode && (
          <div className="w-[100%] flex justify-end">
            <Dialog>
              <DialogTrigger
                className={buttonVariants({
                  variant: "outline",
                  size: "sm",
                  className: "text-[13px] px-2 py-0.5 h-fit",
                })}
              >
                Ver Mais
              </DialogTrigger>
              <DialogContent className="h-[90dvh] sm:h-auto sm:max-w-[900px]">
                <DialogHeader>
                  <DialogTitle className="text-[18px] font-bold text-primary">
                    {title}
                  </DialogTitle>
                  <DialogDescription />
                  <div className="h-[75dvh] overflow-y-scroll">
                    <div className="h-fit">{readMode}</div>
                  </div>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

const listProjects = (slice?: number) =>
  projectsList
    .slice(0, slice || projectsList.length)
    .map(({ skillIcons, ...projectProps }) => (
      <ProjectCard
        key={projectProps.title}
        {...projectProps}
        skillIcons={
          <>
            {skillIcons?.map((skillImageProps) => (
              <Image key={skillImageProps.src} {...skillImageProps} />
            ))}
          </>
        }
      />
    ));

export const ProjectsSection = () => {
  return (
    <Section id="projects-section">
      <div className="flex flex-col items-center justify-evenly h-[calc(100dvh-114px)]">
        <SectionTitleTypewritter
          firstText="Portfólio de"
          secondText="Projetos"
        />

        <div className="w-full overflow-x-scroll lg:w-fit">
          <div className="flex items-center justify-center gap-8 w-fit">
            {listProjects(4)}
          </div>
        </div>

        <Drawer>
          <DrawerTrigger
            className={buttonVariants({
              variant: "default",
              size: "default",
            })}
          >
            Conhecer Todos os Projetos
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Projetos</DrawerTitle>
            </DrawerHeader>

            <div className="overflow-y-scroll">
              <div className="grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-4 px-4 h-fit">
                {listProjects()}
              </div>
            </div>
            <DrawerFooter className="py-8">
              <DrawerClose>Fechar</DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </Section>
  );
};
