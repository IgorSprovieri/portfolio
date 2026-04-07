import { experienceService } from '@/domain/services/experience.service';
import { ListExperiencesView } from '../components/views/ListExperiences.view';

export const ListAllExperiencesController = async () => {
  const experiences = await experienceService.getAllExperiences();

  return <ListExperiencesView experiences={experiences} />;
};
