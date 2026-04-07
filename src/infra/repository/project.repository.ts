import { projectsMock } from '../mocks/projects';
import { ProjectEntity } from '@/domain/entities/project.entity';

import {
  GetProjectsConfig,
  IProjectRepository,
} from '@/domain/services/project.service';

class ProjectRepository implements IProjectRepository {
  async getProjects(config?: GetProjectsConfig) {
    if (config?.groupBy?.category) {
      return Object.groupBy(projectsMock, (project) => project.category.slug);
    }

    return projectsMock;
  }
}

export const projectRepository = new ProjectRepository();
