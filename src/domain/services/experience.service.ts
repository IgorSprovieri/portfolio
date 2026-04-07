import { ExperienceEntity } from '../entities/experience.entity';
import { experienceRepository } from '@/infra/repository/experience.repository';

export interface IGetExperiencesRepository {
  getExperiences(): Promise<ExperienceEntity[]>;
}

export class ExperienceService {
  constructor(
    private readonly experiencesRepository: IGetExperiencesRepository
  ) {}

  async getAllExperiences() {
    return this.experiencesRepository.getExperiences();
  }
}

export const experienceService = new ExperienceService(experienceRepository);
