import { ProjectCategoryEntity } from '@/domain/entities/projectCategory.entity';
import { IProjectCategoryRepository } from '@/domain/services/projectCategory.service';
import { projectCategoriesMock } from '../mocks/projectCategories';

class ProjectCategoryRepository implements IProjectCategoryRepository {
  async getCategories(): Promise<ProjectCategoryEntity[]> {
    return projectCategoriesMock;
  }
}

export const projectCategoryRepository = new ProjectCategoryRepository();
