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

export class ProjectService {
  constructor(private readonly projectRepository: IProjectRepository) {}

  async getAllProjectsGroupedByCategory(): Promise<
    Partial<Record<string, ProjectEntity[]>> | ProjectEntity[]
  > {
    const foundProjects = await this.projectRepository.getProjects({
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
