import { ProjectCategoryEntity } from '../entities/projectCategory.entity';
import { projectCategoryRepository } from '@/infra/repository/projectCategory.repository';

export interface IProjectCategoryRepository {
  getCategories(): Promise<ProjectCategoryEntity[]>;
}

class ProjectCategoryService {
  constructor(
    private readonly projectCategoriesRepository: IProjectCategoryRepository
  ) {}

  async getAllCategories() {
    return this.projectCategoriesRepository.getCategories();
  }
}

export const projectCategoryService = new ProjectCategoryService(
  projectCategoryRepository
);
