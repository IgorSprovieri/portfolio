import { ExperienceEntity } from '@/domain/entities/experience.entity';
import { IGetExperiencesRepository } from '@/domain/services/experience.service';
import { experiencesMock } from '../mocks/experiences';

class ExperienceRepository implements IGetExperiencesRepository {
  async getExperiences(): Promise<ExperienceEntity[]> {
    return experiencesMock;
  }
}

export const experienceRepository = new ExperienceRepository();
