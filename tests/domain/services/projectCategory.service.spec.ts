import { beforeEach, describe, expect, it, vi } from 'vitest';

import {
  projectCategoryService,
  ProjectCategoryService,
} from '@/domain/services/projectCategory.service';
import { ProjectCategoryEntity } from '@/domain/entities/projectCategory.entity';

const allCategoriesMock: ProjectCategoryEntity[] = [
  {
    id: '1',
    slug: 'category-1',
    name: 'Category 1',
  },
  {
    id: '2',
    slug: 'category-2',
    name: 'Category 2',
  },
];

describe('Project Category Service', () => {
  const repositoryMock = {
    getCategories: vi.fn().mockResolvedValue(allCategoriesMock),
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should be defined', () => {
    expect(projectCategoryService).toBeDefined();
  });

  it('should called the repository and return all categories', async () => {
    const service = new ProjectCategoryService(repositoryMock);
    const categories = await service.getAllCategories();

    expect(repositoryMock.getCategories).toHaveBeenCalled();
    expect(categories).toEqual(allCategoriesMock);
  });
});
