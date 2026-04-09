import { ExperienceEntity } from '@/domain/entities/experience.entity';
import { describe, expect, it } from 'vitest';

const experienceMock: ExperienceEntity = {
  id: '1',
  title: 'Experience 1',
  period: '01/2020 - 01/2021',
  location: 'Location 1',
  topics: ['Topic 1', 'Topic 2'],
};

describe('Experience Entity', () => {
  it('should be defined', () => {
    expect(ExperienceEntity).toBeDefined();
  });

  it('should create an instance of ExperienceEntity with the correct properties', () => {
    const experience = new ExperienceEntity(experienceMock);

    expect(experience.id).toEqual(experienceMock.id);
    expect(experience.title).toEqual(experienceMock.title);
    expect(experience.period).toEqual(experienceMock.period);
    expect(experience.location).toEqual(experienceMock.location);
    expect(experience.topics).toEqual(experienceMock.topics);

    expect(experience.period).toMatch(
      /^[0-9]{2}\/[0-9]{4} - [0-9]{2}\/[0-9]{4}$/
    );
  });
});
