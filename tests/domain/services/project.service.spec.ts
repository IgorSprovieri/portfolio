import { beforeEach, describe, expect, it, vi } from 'vitest';
import { ProjectEntity } from '@/domain/entities/project.entity';
import {
  projectService,
  ProjectService,
} from '@/domain/services/project.service';

const allProjectsGroupByCategoryMock: Partial<Record<string, ProjectEntity[]>> =
  {
    'category-1': [
      {
        id: '1',
        category: {
          id: '1',
          slug: 'category-1',
          name: 'Category 1',
        },
        title: 'Project 1',
        description: 'Description 1',
        src: '/projects/project-1.png',
        alt: 'Alt 1',
        skillIcons: [
          {
            src: '/icons/skill-icon-1.svg',
            alt: 'Skill 1',
            height: 100,
            width: 100,
          },
        ],
        readMore: 'Read more 1',
      },
    ],
  };

const repositoryMock = {
  getProjects: vi.fn().mockImplementation((input) => {
    return input.groupBy?.category ? allProjectsGroupByCategoryMock : [];
  }),
};

describe('Project Service', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should be defined', () => {
    expect(projectService).toBeDefined();
  });

  it('should called the repository and return all projects grouped by category', async () => {
    const service = new ProjectService(repositoryMock);
    const projects = await service.getAllProjectsGroupedByCategory();

    expect(repositoryMock.getProjects).toHaveBeenCalled();
    expect(projects).toEqual(allProjectsGroupByCategoryMock);
  });
});
