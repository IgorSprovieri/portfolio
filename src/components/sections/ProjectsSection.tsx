import { SectionTitle } from "../SectionTitle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { projectsService } from "@/services/projects";
import { ProjectCard } from "../cards/ProjectCard";
import Image from "next/image";
import { Card } from "../ui/card";

export const ProjectsSection = () => {
  return (
    <section
      id="projects-section"
      className="flex flex-col gap-16 items-center justify-start scroll-mt-48"
    >
      <SectionTitle firstText="Portfólio de" secondText="Projetos" />
      <Tabs defaultValue="projects" className="gap-4">
        <Card className="max-w-[934px] flex items-center justify-center">
          <TabsList className="justify-between w-full">
            {projectsService.map(({ tabId, tabName }) => (
              <TabsTrigger
                key={tabId}
                value={tabId}
                className="flex flex-col items-center justify-center gap-4 lg:gap-8 lg:flex-row"
              >
                {tabName}
              </TabsTrigger>
            ))}
          </TabsList>
        </Card>

        {projectsService.map(({ tabId, projects }) => (
          <TabsContent
            key={tabId}
            value={tabId}
            className="grid grid-cols-4 gap-4 max-w-[934px]"
          >
            {projects.map(({ skillIcons, ...projectProps }) => (
              <ProjectCard
                key={projectProps.title}
                {...projectProps}
                skillIcons={
                  <>
                    {skillIcons?.map((skillImageProps) => (
                      <Image
                        key={skillImageProps.src}
                        {...skillImageProps}
                        alt={skillImageProps.alt}
                      />
                    ))}
                  </>
                }
              />
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};
