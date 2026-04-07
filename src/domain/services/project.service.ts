import { ProjectEntity } from '../entities/project.entity';
import { projectRepository } from '@/infra/repository/project.repository';

export type GetProjectsConfig = {
  groupBy?: { category?: boolean };
};

export interface IProjectRepository {
  getProjects(
    config?: GetProjectsConfig
  ): Promise<Partial<Record<string, ProjectEntity[]>> | ProjectEntity[]>;
}

class ProjectService {
  constructor(private readonly projectsRepository: IProjectRepository) {}

  async getAllProjectsGroupedByCategory(): Promise<
    Partial<Record<string, ProjectEntity[]>> | ProjectEntity[]
  > {
    const foundProjects = await this.projectsRepository.getProjects({
      groupBy: {
        category: true,
      },
    });

    if (Array.isArray(foundProjects)) {
      return {};
    }

    return foundProjects;
  }
}

export const projectService = new ProjectService(projectRepository);
