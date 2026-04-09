import { ProjectCategoryEntity } from '@/domain/entities/projectCategory.entity';
import { describe, expect, it } from 'vitest';

const projectCategoryMock: ProjectCategoryEntity = {
  id: '1',
  name: 'Project Category 1',
  slug: 'project-category-1',
};

describe('Project Entity', () => {
  it('should be defined', () => {
    expect(ProjectCategoryEntity).toBeDefined();
  });

  it('should create an instance of ProjectCategoryEntity with the correct properties', () => {
    const projectCategory = new ProjectCategoryEntity(projectCategoryMock);

    expect(projectCategory.id).toEqual(projectCategoryMock.id);
    expect(projectCategory.name).toEqual(projectCategoryMock.name);
    expect(projectCategory.slug).toEqual(projectCategoryMock.slug);
  });
});
