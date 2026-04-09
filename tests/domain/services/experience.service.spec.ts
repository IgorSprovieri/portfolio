import { ExperienceEntity } from '@/domain/entities/experience.entity';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import {
  experienceService,
  ExperienceService,
} from '@/domain/services/experience.service';

const allExperiencesMock: ExperienceEntity[] = [
  {
    id: '1',
    title: 'Experience 1',
    topics: ['Topic 1', 'Topic 2'],
    period: '01/2020 - 01/2021',
    location: 'Location 1',
  },
  {
    id: '2',
    title: 'Experience 2',
    topics: ['Topic 1', 'Topic 2'],
    period: '01/2021 - 01/2022',
    location: 'Location 2',
  },
];

describe('Experience Service', () => {
  const repositoryMock = {
    getExperiences: vi.fn().mockResolvedValue(allExperiencesMock),
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should be defined', () => {
    expect(experienceService).toBeDefined();
  });

  it('should called the repository and return all experiences', async () => {
    const service = new ExperienceService(repositoryMock);
    const experiences = await service.getAllExperiences();

    expect(repositoryMock.getExperiences).toHaveBeenCalled();
    expect(experiences).toEqual(allExperiencesMock);
  });

  it('should that the period is in the correct format', async () => {
    const service = new ExperienceService(repositoryMock);
    const experiences = await service.getAllExperiences();

    experiences.forEach((experience) => {
      expect(experience.period).toMatch(/^\d{2}\/\d{4} - \d{2}\/\d{4}$/);
    });
  });
});
