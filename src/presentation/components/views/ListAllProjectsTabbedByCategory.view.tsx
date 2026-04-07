import Image from 'next/image';

import { ProjectCardComponent } from '../shared/ProjectCard.component';
import { Card } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { ProjectEntity } from '@/domain/entities/project.entity';
import { ProjectCategoryEntity } from '@/domain/entities/projectCategory.entity';

export const ListAllProjectsTabbedByCategoryView = async ({
  projects,
  categories,
}: {
  projects: Partial<Record<string, ProjectEntity[]>>;
  categories: ProjectCategoryEntity[];
}) => {
  const defaultTabValue = 'projects';

  return (
    <Tabs defaultValue={defaultTabValue} className=" gap-2 sm:gap-4">
      <Card className="w-full flex items-center justify-center p-1 sm:p-2">
        <TabsList className="justify-between w-full">
          {categories.map(({ id, slug, name }) => (
            <TabsTrigger
              key={id}
              value={slug}
              className="flex flex-col items-center justify-center sm:gap-8 sm:flex-row text-sm sm:text-lg"
            >
              {name}
            </TabsTrigger>
          ))}
        </TabsList>
      </Card>

      {Object.entries(projects).map(([slug, projects]) => (
        <TabsContent
          key={slug}
          value={slug}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 w-full"
        >
          {projects?.map(({ skillIcons, ...projectProps }) => (
            <ProjectCardComponent
              key={projectProps.title}
              {...projectProps}
              skillIcons={
                <>
                  {skillIcons?.map((skill) => (
                    <Image
                      key={skill.src}
                      src={skill.src}
                      alt={skill.alt}
                      height={skill.height}
                      width={skill.width}
                    />
                  ))}
                </>
              }
            />
          ))}
        </TabsContent>
      ))}
    </Tabs>
  );
};
