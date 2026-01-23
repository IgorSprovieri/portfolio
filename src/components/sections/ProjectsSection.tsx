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
      className="flex flex-col gap-8 sm:gap-16 items-center justify-start scroll-mt-48 max-w-236.5 px-3"
    >
      <SectionTitle firstText="Portfólio de" secondText="Projetos" />

      <Tabs defaultValue="projects" className=" gap-2 sm:gap-4">
        <Card className="w-full flex items-center justify-center p-1 sm:p-2">
          <TabsList className="justify-between w-full">
            {projectsService.map(({ tabId, tabName }) => (
              <TabsTrigger
                key={tabId}
                value={tabId}
                className="flex flex-col items-center justify-center sm:gap-8 sm:flex-row text-sm sm:text-lg"
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
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 w-full"
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
