import { ProjectEntity } from '@/domain/entities/project.entity';
import { describe, expect, it } from 'vitest';

const projectMock: ProjectEntity = {
  id: '1',
  title: 'Project 1',
  description: 'Description 1',
  src: '/projects/project-1.png',
  alt: 'Alt 1',
  skillIcons: [
    {
      src: '/icons/skills/skill-1.svg',
      alt: 'Skill 1',
      height: 100,
      width: 100,
    },
    {
      src: '/icons/skills/skill-2.svg',
      alt: 'Skill 2',
      height: 100,
      width: 100,
    },
  ],
  category: {
    id: '1',
    slug: 'category-1',
    name: 'Category 1',
  },
};

describe('Project Entity', () => {
  it('should be defined', () => {
    expect(ProjectEntity).toBeDefined();
  });

  it('should create an instance of ProjectEntity with the correct properties', () => {
    const project = new ProjectEntity(projectMock);

    expect(project.id).toEqual(projectMock.id);
    expect(project.title).toEqual(projectMock.title);
    expect(project.description).toEqual(projectMock.description);
    expect(project.src).toEqual(projectMock.src);
    expect(project.alt).toEqual(projectMock.alt);
    expect(project.skillIcons).toEqual(projectMock.skillIcons);
    expect(project.category).toEqual(projectMock.category);

    expect(project.src).toMatch(/^\/projects\//);
    project.skillIcons.forEach((skillIcon) => {
      expect(skillIcon.src).toMatch(/^\/icons\/skills\//);
      expect(skillIcon.height).toBeGreaterThan(0);
      expect(skillIcon.width).toBeGreaterThan(0);
    });
  });
});
